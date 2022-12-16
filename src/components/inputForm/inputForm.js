import React from "react";


const Inputform = (props) => {
    return (
        <div>
            <form>
                <input type={props.type} placeholder={props.text}></input>
                <input type="password" placeholder="Password"></input>
                <button>Enter</button>
            </form>
        </div>
    )
}

export default Inputform