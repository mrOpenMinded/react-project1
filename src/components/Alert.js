
import React from 'react';

function Alert(props) {
    // const capitalize=(word)=>{
    //     return word.charAt(0).toUpperCase()+word.slice(1);
    // }
    return (
        <>
            <div style={{ height: '50px' }}>
                <div className={`alert alert-${props.alertV.type} alert-dismissible fade show`} role="alert">
                    <strong>{props.alertV.type}</strong> {props.alertV.msg}
                </div>
            </div>
        </>
    )
}
export default Alert;