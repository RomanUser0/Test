import React from "react";
import Style from "./login.module.css"
import Inputform from "../../components/inputForm/inputForm.js";


const Login = () => {
    return (
        <div className={Style.login}>
            <Inputform type="text" text="Login"/>
        </div>
    )
}

export default Login