import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {  getAuth , signInWithEmailAndPassword} from "firebase/auth";
import app from '../../Firebase/Firebase.init';

const Login = () => {
const auth = getAuth(app);
const [errorMessage,setErrorMessage] = useState(false);
const [success,setSuccess] = useState('');


const handleLogIn = (event) =>{
  event.preventDefault();
  setErrorMessage(false);
  setSuccess('');
  const form = event.target ;
  const email = form.email.value;
  const password = form.password.value;
  console.log(email,password)
 
  // sign in method  call 


signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    const emailVerified = user.emailVerified;
    if(emailVerified === false){
      alert(` Please verify your email ! `)
      return ;
      
    }
 
   
    setSuccess('Successfully Log in')
    
    console.log(user,emailVerified,'login user')
    form.reset()
  })
  .catch((error) => {
    const errorMess = error.message;
    setErrorMessage(errorMess);
  });

}


    return (
 <div>
 
  <div className="hero min-h-screen bg-base-200">
  <div className="hero-content flex-col lg:flex-col">
    <div className="text-center">
      <h1 className="text-4xl font-bold">Please Login now!</h1>
     
    </div>

    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
      <form onSubmit={ handleLogIn} className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" placeholder="email" className="input input-bordered" name='email' required />
        </div>

        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" placeholder="password" className="input input-bordered" name='password' required/>
          <label className="label">
            <Link  className="label-text-alt link link-hover">Forgot password?</Link>
          </label>
          { errorMessage && <p className='text-danger mt-3'> {errorMessage} </p> } 
          {success && <p className='text-lime-500'> {success} </p> }
          <p> You have no account? <Link className='text-primary ' to= '/SignUp' >Sign up here  </Link></p>
          </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Login</button>
        
        </div>
      </form>
     </div>
   </div>
  </div>
  
 </div>
);

};

export default Login;