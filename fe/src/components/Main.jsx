import React, { useState } from 'react';
import Result from './Result.jsx';
import { GoogleReCaptchaProvider } from 'react-google-recaptcha-v3';



export default function Main() {
    const [showResult, setShowResult] = useState(false);

    const handleResolve = () => {
        setShowResult(!showResult);
    };

    return (
        <div>
            <p className="title">title</p>
            <button onClick={handleResolve}>Show Result</button>
            <GoogleReCaptchaProvider reCaptchaKey="6LdIYyQqAAAAAGPIC7CuubHIDYXm-a1moGU46g_l">
                {showResult && <Result />}
            </GoogleReCaptchaProvider>
        
        </div>
    )
};
