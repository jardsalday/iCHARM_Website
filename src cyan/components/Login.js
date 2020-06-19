import React, {Component} from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {login} from '../actions/auth'; 
import {Redirect} from 'react-router-dom';  
import {Link} from 'react-router-dom';

import  '../App.css';  
export class Login extends Component{
    state = {
        username:"",
        password:""
    };
    static propTypes={
        login:PropTypes.func.isRequired,
        isAuthenticated:PropTypes.bool,
        isDoctor:PropTypes.bool,
        isAdmin:PropTypes.bool,
        login_fail:PropTypes.bool.isRequired
    }
    onSubmit =e=>{
        e.preventDefault();
        this.props.login(this.state.username,this.state.password);
    };
    onChange =e=>this.setState({
        [e.target.name]:e.target.value
    });
    render(){
        if(this.props.isAuthenticated){
            return <Redirect to="/userpatient"/>
        }
        if(this.props.isDoctor){
            return <Redirect to="/patient"/>
        }
        if(this.props.isAdmin){
            return <Redirect to="/adminhome"/>
        }
    console.log(this.props.isDoctor)
        const {username,email,password,password2}=this.state;
    console.log(this.props.login_fail)
       
        return (
            <div className="background-login">

<div class="navbar-fixed">
                            <nav class="nav-wrapper white ">
                            <div class="container cyan-text">
                                <a href="#" class="brand-logo cyan-text">iCHARM</a>
                                <a href="#" class="sidenav-trigger" data-target="mobile-links">
                                <i class="material-icons">menu</i>
                                </a>
                                <ul class="right hide-on-med-and-down">
                                <li><Link to ="/" className="cyan-text"><b>Home</b></Link></li>
                                    <li><Link to ="/product" className="cyan-text">Product</Link></li>
                                    <li><Link to ="/aboutus" className="cyan-text">About Us</Link></li>
                                    <li><Link to ="/contactus" className="cyan-text">Contact Us</Link></li>
                                    <li><Link to="/login" className="cyan-text">Login</Link></li>  
                                </ul>
                            </div>
                            </nav>
                        </div>
                        <ul class="sidenav" id="mobile-links">
                            <li><Link to ="/">Home</Link></li>
                            <li><Link to ="/product">Product</Link></li>
                            <li><Link to ="/aboutus">About Us</Link></li>
                            <li><Link to ="/contactus">Contact Us</Link></li>
                            <li><Link to ="/login">Login</Link></li>
                        </ul>




            <div className="form1" style={{position:"relative"}}>
                {this.props.login_fail?<div style={{position:"absolute",backgroundColor:"white  ",width:"100%",height:"50px"}}>
                    <h6 className=" cyan-text text-darken-2">Invalid Credentials</h6>
                    </div>:null}
            <h5 id = "logi" className="grey-text text-darken-3"><b>Sign In</b></h5>
                <form class="form2" onSubmit={this.onSubmit}>
                    
                    <input id = "inputslogin" className="cyan-text" type = "text" placeholder="Username" name="username" onChange={this.onChange} value={username} ></input><br></br>
                    <input id = "inputslogin" className="cyan-text" type ="password" placeholder = "Password" name ="password" onChange={this.onChange} value={password}></input>
                    <div className="center-align">
                    <button  class="btn btn-med grey darken-3 white-text" type="submit" value="submit">Sign In</button>
                    </div>
                </form>
               
          
               
            </div>




                         {/* ---------------------FOOTER */}

                    <div class = "foot white">
                                <footer id = "footerdiv">
                        <div class="footer-copyright white">
            <div class="container cyan-text center">
            <b class = "copy">© iCHARM 2020</b>
            </div>
                </div></footer></div>


            </div>
        );


    }




}
const mapStateToProps = state=>({
    isAuthenticated: state.auth.isAuthenticated,
    isDoctor:state.auth.isDoctor,
    isAdmin:state.auth.isAdmin,
    login_fail:state.auth.login_fail
})

export default connect(mapStateToProps,{login})(Login);