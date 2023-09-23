import GoogleLogin from  "@stack-pulse/next-google-login"

import saveToGoogleSheets from './func/saveToGoogleSheets'

function Login() {

    function onLogin(googleResponse){
        console.log(googleResponse);
        saveToGoogleSheets(googleResponse.profileObj);
    }
    function getStringClientID(){
      return process.env.REACT_APP_GOOGLE_CLIENTID;
    }
  return (
    <div className="GoogleLogin">
        <GoogleLogin
        clientId={getStringClientID()}
        buttonText="Continue with Google"
        onSuccess={onLogin}
        onFailure={console.log}
        cookiePolicy={'single_host_origin'}
        />
        
    </div>
  );
}

export default Login;
