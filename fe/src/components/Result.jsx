import React, { useState, useEffect, useCallback }  from 'react';
import Response from './Response.jsx';
import { useGoogleReCaptcha } from 'react-google-recaptcha-v3';
import FadeLoader from "react-spinners/FadeLoader";


export default function Result() {
    const [result, setResult] = useState('');
    const [checking, setChecking] = useState(false);

    const { executeRecaptcha } = useGoogleReCaptcha();

    const handleReCaptchaVerify = useCallback(async () => {
        setChecking(true);
        if (!executeRecaptcha) {
          console.log('captcha awaiting execution');
          return;
        };
    
        const token = await executeRecaptcha();
        setResult(token);
        setChecking(false);
        
    }, [executeRecaptcha]);
      
    useEffect(() => {
        handleReCaptchaVerify();
    }, [handleReCaptchaVerify]);
    
    return (
        <div>
            <br></br>
            {checking === true && <FadeLoader className="loader" color="#ffffff"/>}
            <br></br>
            <Response props={result} />
        </div>
    )
};