import React from "react"
import userAPI from '../services/users'

class Login extends React.Component {
    constructor(props) {
        super(props)
        this.handleLogin = this.handleLogin.bind(this)
        this.state = {
            user: '',
            password: '',
            formErrors: { user: '', password: '' },
            userValid: false,
            passwordValid: false,
            formValid: false
        }
    }
    componentDidMount() {
    }
    componentWillUnmount() {
    }
    handleUserInput = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        this.setState({ [name]: value },
            () => { this.validateField(name, value) });
    }
    validateField(fieldName, value) {
        let fieldValidationErrors = this.state.formErrors;
        let userValid = this.state.userValid;
        let passwordValid = this.state.passwordValid;
        switch (fieldName) {
            case 'user':
                userValid = value.length <= 20;
                fieldValidationErrors.user = userValid ? '' : ' is invalid user';
                break;
            case 'password':
                passwordValid = value.length >= 6;
                fieldValidationErrors.password = passwordValid ? '' : ' is too short';
                break;
            default:
                break;
        }
        this.setState({
            formErrors: fieldValidationErrors,
            userValid: userValid,
            passwordValid: passwordValid
        }, this.validateForm);
    }
    validateForm() {
        this.setState({ formValid: this.state.userValid && this.state.passwordValid });
    }
    errorClass(error) {
        return (error.length === 0 ? '' : 'has-error');
    }
    handleLogin() {
        let user = { userName: this.state.user, passWord: this.state.password }
        let isValid = this.state.formValid
        if (isValid) {
            let response = userAPI.login(user)
            
            if (response) {
                this.setState({ user: '', password: '', })
                localStorage.setItem('Username',this.state.user)
                localStorage.setItem('Password', this.state.password)
                this.props.handleCloseModal()
            } else {
                alert('Login thất bại')
                this.setState({ user: '', password: '', })
            }
        }
    }
    render() {
        if (this.props.renderLogin) {
            return (
                <div className="login-box">
                    <h2>Login</h2>
                    <form>
                        <div className={`user-box ${this.errorClass(this.state.formErrors.user)}`}>
                        <input type="text" name="user" required="" placeholder="Username"
                        value={this.state.user}
                        onChange={this.handleUserInput} 
                        />
                        </div>
                        <div className={`user-box ${this.errorClass(this.state.formErrors.password)}`}>
                            <input type="password" name="password" required="" placeholder="Password"
                             value={this.state.password}
                             onChange={this.handleUserInput}/>
                        </div>

                    </form>
                    <div className="boxBtn">
                        <a onClick={this.handleLogin}disabled={!this.state.formValid} href="#">
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
