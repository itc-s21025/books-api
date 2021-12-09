import React from "react";

const Head = (props) => {
    return (
        <header className="App-head">
            <h2>{props.text}</h2>
        </header>
    );
};

export default Head;