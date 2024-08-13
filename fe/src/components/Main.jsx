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
            <p className="title">reCAPTCHA-v3</p>
            <button onClick={handleResolve}>Load reCAPTCHA-v3</button>
            <GoogleReCaptchaProvider reCaptchaKey="6LdIYyQqAAAAAGPIC7CuubHIDYXm-a1moGU46g_l">
                {load && <Result />}
            </GoogleReCaptchaProvider>
        </div>
    )
};