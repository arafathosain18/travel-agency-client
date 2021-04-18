import React, { useContext } from 'react';
import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from './firebase.config';
import { UserContext } from '../../../App';
import { useHistory, useLocation } from 'react-router';

if (firebase.apps.length === 0) {
  firebase.initializeApp(firebaseConfig);
}

const Login = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);

    const history = useHistory();
    const location = useLocation();
    const { from } = location.state || { from: { pathname: "/" } };


    
    const googleSignIn = ()=>{
      const provider = new firebase.auth.GoogleAuthProvider();
        firebase.auth()
      .signInWithPopup(provider)
      .then((result) => {
        const {displayName, email}= result.user;
        const signInUser = {displayName, email};
        console.log(signInUser);
        setLoggedInUser(signInUser);
        history.replace(from);
      }).catch((error) => {
        const errorMessage = error.message;
        console.log(errorMessage);
      });

    }
   

    return (
        <div style={{width:'400px',textAlign:'center', backgroundColor:'#5B8747' , padding:'100px', marginTop:'300px', marginLeft:'700px'}} >
            <form action="">
                <input type="email" placeholder='Your Email'/>
                <br/>
                <input type="password" placeholder='Your Password'/>
                <br/>
            </form>
            <br/>
            <button style={{backgroundColor:'#CB8C41'}} onClick={googleSignIn} >Sign IN with Google</button>
        </div>
    );
};

export default Login;