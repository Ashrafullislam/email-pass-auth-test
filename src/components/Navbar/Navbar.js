import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div>
          <div className="navbar bg-neutral text-neutral-content">
           <Link className="btn btn-ghost normal-case text-xl">Profile Context</Link> 
            <Link className="btn btn-ghost normal-case text-xl"  to= '/' > Home  </Link>
            <Link className="btn btn-ghost normal-case text-xl" to= '/SignUp' > Sign Up </Link>
            <Link className="btn btn-ghost normal-case text-xl" to= '/Login' > Login  </Link>
         </div>
        </div>
    );
};

export default Navbar;