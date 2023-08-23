import React from "react";

function Title (props) {
    return (
        <div className="title">   
            <h1>{props.title}</h1>
            <hr />
        </div>
    );
}

export default Title;