import User from "./User";
import UserClass from "./UserClass";
import React, { Component } from 'react'

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
            <UserClass name={"likhith (class)"} location={"Hyderabad (class)"}/>
        </div>
    )
  }
}

export default About
