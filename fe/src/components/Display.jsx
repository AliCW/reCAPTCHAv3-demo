import React from 'react';

export default function Display(props){

    return (
        <div>
            {
            (props.props.data.success)
            ? 
            <div>
                <p>Pass!</p>
                <p>Score: {props.props.data.score}</p>
            </div>
            : 
            <p>Fail!</p>
            }

            {console.log(props.props.data, "pass/fail")}
          
            {/* <p>{console.log(props.props.data)}</p> */}
        </div>
    )
}