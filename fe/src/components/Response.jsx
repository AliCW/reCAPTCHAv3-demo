import React, { useState } from 'react';
import Display from './Display.jsx';
import axios from 'axios';

export default function Response(props) {
    const [showOutput, setShowOutput] = useState(false);
    const [output, setOutput] = useState({})
    const [checkResult, setCheckResult] = useState();

    const api = axios.create({
        baseURL: "http://127.0.0.1:8000/",
    });


    const handleSubmit = (event) => {
        event.preventDefault();
        setShowOutput(!showOutput);
        const token = props.result
        console.log(token, "<<<<----")
        return api.post('http://127.0.0.1:8000/key/', token)
        .then((response) => {
            setOutput(response);
            setCheckResult(response.data.success);
        });
    };



    return (
        <div>
            <button onClick={handleSubmit}>Display</button>
            {showOutput && <Display props={output}/>}
            
        </div>
    )

};



