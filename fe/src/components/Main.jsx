import React, { useState } from 'react';
import Result from './Result.jsx';
import { GoogleReCaptchaProvider } from 'react-google-recaptcha-v3';


export default function Main() {
    const [load, setLoad] = useState(false);

    const handleResolve = () => {
        setLoad(!load);
    };

    return (
        <div>
            <h1 className="header">reCAPTCHA-v3</h1>
            <button className="button" onClick={handleResolve}>Load reCAPTCHA-v3</button>
            <GoogleReCaptchaProvider reCaptchaKey="6LdIYyQqAAAAAGPIC7CuubHIDYXm-a1moGU46g_l">
                {load && <Result />}
            </GoogleReCaptchaProvider>
            <p className="text" style={{"margintop": "10%"}}>This site is protected by reCAPTCHA and Google</p>
            <a className="link-button" target="_blank" rel="noreferrer" href='https://policies.google.com/privacy'>Privacy Policy</a>
            <br></br>
            <a className="link-button" target="_blank" rel="noreferrer" href='https://policies.google.com/terms'>Terms of Service</a>
        </div>
    )
};