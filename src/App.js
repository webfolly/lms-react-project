import React, { Component } from 'react';
import SideNav from './App/SideNav';
import Routes from './App/Routes';
import LoginScreen from './App/LoginScreen';

let users = [
	 {username:"admin",password:"admin"}
	,{username:"miya",password:"admin"}
	,{username:"hayden",password:"admin"}
	,{username:"jianghuahui",password:"admin"}
	,{username:"jerry",password:"admin"}
];
export default class App extends React.Component {
	constructor(props) {
        super(props);
        this.state = {
            username:"",
            password:"",
            isLoggedIn:true
        }
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }
    handleClick(){
        this.setState({isLoggedIn:false});
    }
    handleInputChange(event){
        const target = event.target;
        const {name,value} = target;
        console.log(value);
        this.setState({[name]:value});
    }
    handleSubmit(e) {
        for(let i=0;i<users.length;i++) {
            if(this.state.username === users[i].username) {
                if(this.state.password === users[i].password) {
                    this.setState({isLoggedIn:true});
                    break;
                } else {
                    alert("Passowrd not correct");
                }
            } 
        }
	}
	render(){
		const isLoggedIn = this.state.isLoggedIn;
		return(
			<div>
			{ isLoggedIn ?  (
				<div><SideNav onClick={this.handleClick}/> <main className="wf-container"> <Routes /> </main></div>) : <LoginScreen username={this.state.username} password={this.state.password} onChange={this.handleInputChange} onSubmit={this.handleSubmit}/> }
			</div>
		);
	}	
}