import { Button, TextField, Typography} from "@mui/material";
import React, { Component } from "react";
import "../styles/Styles.css";



class Auth extends Component {
    constructor(props) {
        super(props)

        this.state = {
            form: {
                email: '',
                password: ''
            }
        };

        this.creds = {
            email: "siddharth@gmail.com",
            password: "123456"
        }
    }

    handleChange = (e, key) => {
        let { form } = this.state;
        form[key] = e.target.value;
        this.setState({ form });
    };

    handleSubmit = (event) => {
        event.preventDefault();
        const { form } = this.state;
        const { email, password } = this.creds;
        if (email === form.email && password == form.password) {
            // redirect
            // console.log("proper creds");
            localStorage.setItem('isAuth', 1);
            this.props.updateAuth(1);
        } else {
            alert("Incorrect email or password")
        }
    }
    render() {
        return (
            <>
                <div className="loginPage">
                    <form onSubmit={this.handleSubmit}>
                        <div className="loginForm">
                            <Typography variant="h3" style={{ fontWeight: "600", fontFamily: " 'Poppins', sans-serif", color: "darkorange" }} >Welcome!</Typography>
                            <Typography variant="h4" style={{ fontWeight: "400", fontFamily: " 'Poppins', sans-serif" }} >Sign in to Continue</Typography>
                            <p style={{ fontWeight: "400", fontSize: "15px", color: "gray" }}>Don't have an account?
                                <a href="#" style={{ textDecoration: "none", paddingLeft: "10px", color: "blue" }}>Sign up</a>
                            </p>
                            <TextField id="outlined-basic" label="Email Address" variant="outlined" type="email" onChange={(e) => { this.handleChange(e, 'email') }} />
                            <TextField id="outlined-basic" label="Password" variant="outlined" type="password" onChange={(e) => { this.handleChange(e, 'password') }} />
                            <Button type='submit' variant="contained" id="btn" style={{ backgroundColor: "orange" }}>Continue</Button>
                        </div>
                    </form>
                </div>
            </>
        )
    }
}

export default Auth;