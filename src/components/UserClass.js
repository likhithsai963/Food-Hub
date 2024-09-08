import React, { Component } from 'react'
import { json } from 'react-router-dom';

class UserClass extends Component {
    constructor(props) {
        super(props)
        this.state = {
            userInfo: {
                name: "Dumnmy",
                location: "Default Location",
                avatar_url:"dummy"
            }
        };
        console.log("Child constructor")

    }

    async componentDidMount() {
        console.log("component did mount")
        const data = await fetch("https://api.github.com/users/likhithsai963")
        const json = await data.json();
        this.setState({
            userInfo: json
        })
        console.log(json)
    }
    componentDidUpdate(){
        console.log("update")
    }
    componentWillUnmount(){
        console.log("unmount")
    }

    render() {
        // const {location} = this.props
        const { name, location,avatar_url } = this.state.userInfo
        console.log("child render")
        return (
            <div className="user-card">
                <img src={avatar_url}/>
                <h2>Name :{name}</h2>
                <h3>Location : {location}</h3>
                <h4>Contact : 6302916587</h4>
            </div>
        )
    }
}

export default UserClass
