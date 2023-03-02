import style from "./Form.module.css"
import React from "react";
import validation from "./validation.js";

function Form(props) {
 const [userData, setUserData] = React.useState({ username: '', password: '' });
 const [errors, setErrors] = React.useState({ username: '', password: '' });
 

 const handleInputChange = (event)=>{
    //console.log("event", event.target.value)
    const {name, value} = event.target;
    setUserData({
        ...userData,
    [name]: value
    })
    setErrors(validation({
        ...userData,
        [name]: value
    }))
  }

  const handleSubmit = e =>{
    e.preventDefault()
    props.login(userData)
  }
    return(
        <div className={style.conten}>
        <form onSubmit={handleSubmit}>
            <label>Name: </label>
            <input type="text" name="username" value={userData.username} onChange={handleInputChange}/>
            <p className={style.error}>{errors.username && errors.username}</p>

            <br />
            <label>Password: </label>
            <input type="password" name="password" value={userData.password} onChange={handleInputChange} />

            <p className={style.error}>{errors.password && errors.password}</p>
       
            <button>Login</button>
        </form>
        </div>
    )
}

export default Form;