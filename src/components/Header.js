import { Link } from "react-router-dom";
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
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/about"> About us</Link>
                    </li>
                    <li>
                        <Link to="/contact">Contact us</Link>
                    </li>
                    <li>Cart</li>
                    <button className="login" onClick={() =>{ buttonName==="Login" ?  setButtonName("Logout"): setButtonName("Login") }} >{buttonName}</button>
                </ul>
            </div>
        </div>
    );
};

export default Header;

