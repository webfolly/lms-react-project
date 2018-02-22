import React from 'react';
import {logIn} from '../api/auth';
import {Spinner} from '../UI/UIComponents';
import '../styles';

export default class SignIn extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username:"",
            password:"",
            isLogging:false 
        }
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleInputChange(event){
        const target = event.target;
        const {name,value} = target;
        this.setState({[name]:value});
    }
    handleSubmit(e) {
        e.preventDefault();
        this.setState({isLogging:true})
        const {username,password} = this.state;
        logIn(username,password)
            .then(curUser => {this.setState({isLogging:false});this.props.history.replace('/dashboard')});
    }
    render(){
        return(
            this.state.isLogging ? <Spinner /> : (
            <div className="limiter">
                <div className="container-login100">
                    <div className="wrap-login100">
                        <div className="login100-form-title">
                            <span className="login100-form-title-1">
                                Sign In
                            </span>
                        </div>
                        <form action="post" className="login100-form validate-form" onSubmit={this.handleSubmit}>
                            <div className="wrap-input100 validate-input" data-validate="Username is required">
                                <span className="label-input100">Username</span>
                                <input className="input100" type="text" name="username" placeholder="Enter username" value={this.state.username} onChange={this.handleInputChange}/>
                                <span className="focus-input100"></span>
                            </div>
                            <div className="wrap-input100 validate-input" data-validate="Password is required">
                                <span className="label-input100">Password</span>
                                <input className="input100" type="password" name="password" placeholder="Enter password" value={this.state.password} onChange={this.handleInputChange}/>
                                <span className="focus-input100"></span>
                            </div>
                            <div className="flex-sb-m w-full p-b-30">
                                <div className="contact100-form-checkbox">
                                    <input className="input-checkbox100" id="ckb1" type="checkbox" name="remember-me"/>
                                    <label className="label-checkbox100" htmlFor="ckb1">
                                        Remember me
                                    </label>
                                </div>
                                <div>
                                    <a href="" className="txt1">
                                        Forgot Password?
                                    </a>
                                </div>
                            </div>
                            <div className="container-login100-form-btn">
                                <button className="login100-form-btn">
                                    Login
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>)
        );
    }
}




  


