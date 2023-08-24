import React from "react";

function Title (props) {
    return (
        <div className="title">
            <div className="title-box">
                <img src={props.icon} alt={props.title} />
                <h1>{props.title}</h1>
            </div>
            <hr />
        </div>
    );
}

export default Title;