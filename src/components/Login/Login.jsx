import React, { useState } from 'react';
import { getAuth, GoogleAuthProvider, GithubAuthProvider, signInWithPopup, signOut } from 'firebase/auth';
import app from '../../firebase/firebase.init';


const Login = () => {
    const [user, setUser] = useState(null);
    const auth = getAuth(app);

    const googleProvider = new GoogleAuthProvider();
    const githubProvider = new GithubAuthProvider();

    const handleGithubSignIn = () => {
        signInWithPopup(auth, githubProvider)
        .then(result => {
            const loggedInUser = result.user;
            console.log(loggedInUser);
            setUser(loggedInUser);
        })
        .catch(error => {
            console.log(error);
        });
    }

    const handleGoogleSignIn = () => {
        signInWithPopup(auth, googleProvider)
            .then(result => {
                const loggedInUser = result.user;
                console.log(loggedInUser);
                setUser(loggedInUser);
            })
            .catch(error => {
                console.log(error);
            });
    };

    const handleSignOut = () => {
        signOut(auth, googleProvider)
            .then(result => {
                console.log(result);
                setUser(null);
            })
            .catch(error => {
                console.log(error);
            })
    }

    return (
        <div>
            {/* user ? logout : signin */}

            {user ?
                <button onClick={handleSignOut}>Sign out</button> :
                <>
                    <button onClick={handleGoogleSignIn}>Google Login</button>
                    <button onClick={handleGithubSignIn}>Github Login</button>
                </>
            }
            {user && <div>
                <h3>User: {user.displayName || 'No display name'}</h3>
                <p>Email: {user.email}</p>
                <img src={user.photoURL} />
            </div>
            }
        </div>

    );
};

export default Login;
