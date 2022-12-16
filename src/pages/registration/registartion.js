import React from "react";
import Inputform from "../../components/inputForm/inputForm.js";
import Style from "./registration.module.css"


const Registration = () => {
    return (
        <div className={Style.registration}>
             <Inputform type="email" text="E-mail"/>
        </div>
    )
}

export default Registration