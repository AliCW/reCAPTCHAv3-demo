import React, { useState, useEffect, useCallback }  from 'react';
import Response from './Response.jsx';
import { useGoogleReCaptcha } from 'react-google-recaptcha-v3';


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
            {checking === true && <p>LOADING</p>}
            <br></br>
            <Response props={result} />
        </div>
    )
};