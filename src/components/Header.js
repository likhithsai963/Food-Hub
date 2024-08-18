import { LOGO } from "../utils/constants";
import { useState } from "react"

const Header = () => {
    const [buttonName, setButtonName] = useState("Login")

    return (
        <div className="header">
            <div className="logo-Container">
                <img className="logo" src={LOGO}></img>
            </div>
            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About us</li>
                    <li>Contact us</li>
                    <li>Cart</li>
                    <button className="login" onClick={() =>{ buttonName==="Login" ?  setButtonName("Logout"): setButtonName("Login") }} >{buttonName}</button>
                </ul>
            </div>
        </div>
    );
};

export default Header;

