import User from "./User";
import UserClass from "./UserClass";
import React, { Component } from 'react'
import UserContext from "../utils/UserContext";

class About extends Component {
    constructor(props){
        super(props);
        console.log("Parent Constructor")
    }

 componentDidMount(){
    console.log("Parent did mount")
 }
  render() {
    console.log("Parent Render")
    return(
        <div>
            This is my food app
            {/* <User name={"likhith (function)"}/> */}
            <div>Logged In User 
                <UserContext.Consumer>
                    {({loggedInUser})=> <h1 className="text-xl font-bold">{loggedInUser}</h1>}
                </UserContext.Consumer>
            </div>
            <UserClass name={"likhith (class)"} location={"Hyderabad (class)"}/>
        </div>
    )
  }
}

export default About
