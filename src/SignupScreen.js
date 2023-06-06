import { GoogleButton } from "react-google-button";
import React, { useEffect, useState } from 'react';
import jwt_decode from 'jwt-decode';

function SignupScreen ()  {

  const [user, setUser]= useState({});

      useEffect(()=> {
        // global google
        // google.accounts.id.initialize({
        //   client_id: '505454167267-g30sa17rva7inuesjukq73caiohpf15m.apps.googleusercontent.com',
        //   callback: responseGoogle,
        // });
        // google.accounts.id.renderButton(
        //   document.getElementById("signInDiv"),
        //   {theme: "outline",size: "large"}
        // );

      },[]);


  const responseGoogle = (response) => {
    // Handle the Google login response
    console.log(response);
    // console.log(response.credential);
    var userObject = jwt_decode(response.credential);
    console.log(userObject);
    setUser(userObject);
    document.getElementById("signInDiv").hidden = true;

  };

  function handleSignOut(event ){
    setUser({});
    document.getElementById("signInDiv").hidden = false;
  }

  return (
    <div>
      <h2>Sign up</h2>
      {/* Your signup form here */}
      {/* <GoogleButton
        label="Be Cool"
         onClick={responseGoogle}
      /> */}
      <div id="signInDiv"></div>
      {
        Object.keys(user).length !=0 &&
        <button onClick={(e) => handleSignOut(e)} >Sign Out</button>

      }
      {user && 
        <div>
          <img src={user.picture} />
          <h3>{user.name}</h3>
          </div>
      }
    </div>
  );
};

export default SignupScreen;
