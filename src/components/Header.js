import { Link } from "react-router-dom";
import { LOGO } from "../utils/constants";
import { useState,useContext } from "react"
import UserContext from "../utils/UserContext";

const Header = () => {
    const [buttonName, setButtonName] = useState("Login")
    const {loggedInUser} = useContext(UserContext)


    return (
        <div className="flex justify-between bg-yellow-100 shadow-lg sm:bg-green-100">
            <div className="logo-Container">
                <img className="w-56" src={LOGO}></img>
            </div>
            <div className="flex items-center ">
                <ul className="flex p-4 m-4">
                    <li className="px-4">
                        <Link to="/">Home</Link>
                    </li>
                    <li className="px-4">
                        <Link to="/about"> About us</Link>
                    </li>
                    <li className="px-4">
                        <Link to="/contact">Contact us</Link>
                    </li>
                    <li className="px-4">
                        <Link to="/grocery">Grocery</Link>
                    </li>
                    <li className="px-4">Cart</li>
                    <button className="login" onClick={() =>{ buttonName==="Login" ?  setButtonName("Logout"): setButtonName("Login") }} >{buttonName}</button>
                    <li className="px-4 font-bold">{loggedInUser}</li>
                </ul>
            </div>
        </div>
    );
};

export default Header;

