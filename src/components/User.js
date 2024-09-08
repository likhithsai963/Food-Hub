import {useState} from 'react'

const User = ({name}) => {
    const [count]= useState(0)
    const [count2] = useState(1)
  return (
    <div className="user-card">
        <h1>Count:{count}</h1>
        <h2>Name :{name}</h2>
        <h3>Location : Hyderabad</h3>
        <h4>Contact : 6302916587</h4>
    </div>
  )
}

export default User
