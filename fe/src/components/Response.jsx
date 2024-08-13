import React, { useState } from 'react';
import Display from './Display.jsx';
import axios from 'axios';

export default function Response({ props }) {
    const [showOutput, setShowOutput] = useState(false);
    const [output, setOutput] = useState({});

    const api = axios.create({
        baseURL: "http://127.0.0.1:8000/",
    });

    const token = props;

    const handleSubmit = (event) => {
        if(event) event.preventDefault();
        return api.post('http://127.0.0.1:8000/key/', token)
        .then((response) => {
            setOutput(response);
            setShowOutput(!showOutput);
        });
    };

    return (
        <div>
            <button className="button" onClick={handleSubmit}> Check Results </button>
            {showOutput && <Display props={output}/>}
        </div>
    )

};