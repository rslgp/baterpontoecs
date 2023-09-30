import GoogleLogin from  "@stack-pulse/next-google-login"

import saveToGoogleSheets from './func/saveToGoogleSheets'

function Login() {

    function onLogin(googleResponse){
        console.log(googleResponse);
        googleResponse.profileObj.codigoDia = document.getElementById("codigoDia").value;
        var inseriu = saveToGoogleSheets(googleResponse.profileObj);
        if(inseriu) alert("Ponto registrado");
        else alert("Falha no ponto")
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
        <div className="espacamento"/>
        <div className="espacamento"/>
        <input id="codigoDia" type="number" />
        
    </div>
  );
}

export default Login;
