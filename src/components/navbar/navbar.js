import React from "react";
import { NavLink } from "react-router-dom";
import Style from "./navbar.module.css"


const Navbar = () => {
    return (
        <div className={Style.navbar}>
            <NavLink to="/login">Login</NavLink>
            <NavLink to="/registration">Registartion</NavLink>
        </div>
    )
}


export default Navbar