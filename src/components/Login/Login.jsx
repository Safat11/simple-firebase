import React from 'react';
import { getAuth } from 'firebase/auth';
import app from '../../firebase/firebase.init';
import { GoogleAuthProvider } from 'firebase/auth/web-extension';

const Login = () => {
    const auth = getAuth(app)
    const provider = new GoogleAuthProvider();

    const handleGoogleSignIn = () =>{
        console.log("Mama Google is cooming!!");
    }
    return (
        <div>
            <button onClick={handleGoogleSignIn}>Google login</button>
        </div>
    );
};

export default Login;