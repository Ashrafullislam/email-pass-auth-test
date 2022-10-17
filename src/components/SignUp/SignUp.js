import React, { useState } from 'react';
import { createUserWithEmailAndPassword,getAuth ,sendEmailVerification} from  "firebase/auth";
import app from '../../Firebase/Firebase.init';
import { Link } from 'react-router-dom';
import { ToastContainer,toast } from 'react-toastify';
import './SignUp.css';

const SignUp = () => {
const auth = getAuth(app);
 const [errorMessage,setErrorMessage] = useState(false);
 const [success,setSuccess] = useState(false);

 const handleSignIn = (event) =>{
    event.preventDefault();
    setErrorMessage(false);
    setSuccess(false)
    const form = event.target ;
    const email = form.email.value;
    const password = form.password.value;
    const name = form.name.value;
    console.log(email,password,name)
    

    createUserWithEmailAndPassword(auth,email,password,name)
   .then((result) => {
    const user = result.user;
    console.log(user)
   // toastify 
    setSuccess('Successfully Created account ');
    toast('Successfully created accouont') 
    sendEmailVerification(auth.currentUser)
   .then(() => {
    // Email verification sent!
    
    });
    form.reset() 
  
   })
  .catch(error => {
    const errorMess = error.message;
    setErrorMessage(errorMess);

  })
  }

 
  
 return (
 <div className='signUP'>
  <div className="hero min-h-screen bg-base-200">
    <div className="hero-content flex-col lg:flex-col">
      <div className="text-center">
      <h1 className="text-4xl font-bold">Please Sign up !</h1>
    </div>

    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
      <form onSubmit={handleSignIn} className="card-body">
      
      <div className="form-control">
          <label className="label">
            <span className="label-text">Name </span>
          </label>
          <input type="text" placeholder="email" className="input input-bordered" name='name ' required />
        </div>

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
         
        </div> 
        <div className="form-control mt-6">
           { success && <p className='text-green-600'> {success} </p>}
            {errorMessage && <p className='text-red-600'> {errorMessage} </p>}
          <button className="btn btn-primary"> Sign Up  </button>
           <p>  Already have an account ?<Link className='text-primary' to= "/Login">Log in here  </Link> </p>
        </div>

        
        </form>

       </div>
      </div>
     </div>
     <ToastContainer  />
  </div>
      
    );
};

export default SignUp;