import React, { useState } from 'react';
import Result from './Result.jsx';

export default function Main() {
    const [buttonResolve, sendButtonResolve] = useState(false)

    const handleResolve = () => {
        sendButtonResolve(!buttonResolve);
    };

    return (
        <div>
            <p className="title">RIGHT HERE, RIGHT NOW</p>

            <button className="input" onClick={handleResolve}> Resolve </button>

            {buttonResolve === true && <Result/>}
        </div>
    )

};