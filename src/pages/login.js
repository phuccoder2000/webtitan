import React from "react"
import userAPI from '../services/users'

class Login extends React.Component {
    constructor(props) {
        super(props)
        this.handleLogin = this.handleLogin.bind(this)
    }

    componentDidMount() {

    }

    componentWillUnmount() {

    }

    validateForm() {
        return true
    }

    handleLogin() {
        let user = { userName: 'Huy', passWord: '123456' }
        let isValid = this.validateForm(user)

        if (isValid) {
            let response = userAPI.login(user)
            if (response) {
                alert('Login thành công')
                this.props.handleCloseModal()
            } else {
                alert('Login thất bại')
            }
        }
    }

    render() {
        if (this.props.renderLogin) {
            return (


                <div className="login-box">
                    <h2>Login</h2>
                    <form>
                        <div className="user-box"><input type="text" name="" required="" placeholder="Username" />
                        </div>
                        <div className="user-box">
                            <input type="password" name="" required="" placeholder="Password" />
                        </div>

                    </form>
                    <div className="boxBtn">
                        <a onClick={this.handleLogin} href="#">
                            <span />
                            <span />
                            <span />
                            <span />
                            Login
                        </a>
                        <a onClick={this.props.handleCloseModal} href="#">
                            <span />
                            <span />
                            <span />
                            <span />
                            Close
                        </a>
                        </div>
                </div>
            )
        }

        return null
    }
}

export default Login

// import React, { useState, useEffect } from "react";
// import {useHistory} from "react-router-dom";

// function Login() {
//     const[userName,setuserName] = useState("");
//     const[password,setpassword] = useState("");
//     const history = useHistory();

//     useEffect(() => {
//         if(localStorage.getItem('user-info')){
//             history.push("/add")
//         }
//     }, [])
//     async function login(){
//         console.warn(userName,password)
//         let item ={userName,password};
//         let result = await fetch('/data')

//     }

//     return (
//         <div className="login-box">
//             <h2>Login</h2>
//             <form>
//                 <div className="user-box"><input type="text" name="" required="" placeholder="Username" />
//                 </div>
//                 <div className="user-box">
//                     <input type="password" name="" required="" placeholder="Password" />
//                 </div>

//             </form>
//             <div className="boxBtn">
//                 <a onClick={this.handleLogin} href="#">
//                     <span />
//                     <span />
//                     <span />
//                     <span />
//                     Login
//                 </a>
//                 <a onClick={this.props.handleCloseModal} href="#">
//                     <span />
//                     <span />
//                     <span />
//                     <span />
//                     Close
//                 </a>
//             </div>
//         </div>
//     )
// }
// export default Login
