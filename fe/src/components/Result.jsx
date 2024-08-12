import React, { useState, useEffect, useCallback }  from 'react';
import Response from './Response.jsx';
import { useGoogleReCaptcha } from 'react-google-recaptcha-v3';


export default function Result() {
    const [result, setResult] = useState('');
    const [buttonResolve, sendButtonResolve] = useState(false);
    const { executeRecaptcha } = useGoogleReCaptcha();

    const handleResolve = () => {
        sendButtonResolve(!buttonResolve);
    };

    const handleReCaptchaVerify = useCallback(async () => {
        if (!executeRecaptcha) {
          console.log('captcha awaiting execution');
          return;
        }
    
        const token = await executeRecaptcha();
        setResult(token)
    }, [executeRecaptcha]);
      
    useEffect(() => {
        handleReCaptchaVerify();
    }, [handleReCaptchaVerify]);
    
    return (
        <div>
            <p>Result Here</p>
            
            <button onClick={handleReCaptchaVerify}> Check Token </button>
            <br></br>
            <button className="input" onClick={handleResolve}> Show Result </button>
            {buttonResolve && <Response props={result} />}
        </div>
    )

};