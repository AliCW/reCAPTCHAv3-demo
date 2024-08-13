import React from 'react';

export default function Display({ props }){

    return (
        <div>
            {
            (props.data.success)
            ? 
            <div key={props.config.data}>
                <p>Pass!</p>
                <p>Score: {props.data.score}</p>
            </div>
            : 
            <div>
            <p>Fail!</p>
            {props.data["error-codes"].map((errorCode) => {
                return (
                    <div key={props.config.data}>
                        <p>{errorCode}</p>
                    </div>
                )
            })}
            </div>
            }

            {/* {console.log(props, "props")} */}

        </div>
    )
}
