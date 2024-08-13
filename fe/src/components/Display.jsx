import React from 'react';
import formatErrors from '../utils/formatErrors';
import formatTime from '../utils/formatTime';

export default function Display({ props }){

    return (
        <div className="details">
            {
            (props.data.success)
            ? 
            <div key={props.config.data}>
                <p className="details-title">Pass!</p>
                <p>Score: {props.data.score}</p>
                <p>Challenge Time: {formatTime(props.data.challenge_ts)}</p>
            </div>
            : 
            <div>
            <p>Fail!</p>
            {props.data["error-codes"].map((errorCode) => {
                return (
                    <div key={props.config.data}>
                        <p>{formatErrors(errorCode)}</p>
                    </div>
                )
            })}
            </div>
            }

            {console.log(props, "props")}

        </div>
    )
}
