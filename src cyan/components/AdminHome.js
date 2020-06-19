import React, {Component} from 'react';
import axios from 'axios';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {getPatients,addPatients} from '../actions/patientActions';
import {logout} from '../actions/auth';
import CreatePatient from './CreatePatient';
import {Link,NavLink} from 'react-router-dom';
import {Button,ButtonToolbar} from 'react-bootstrap';
import AdminModal from './AdminModal';
import AdminCreatePatient from './AdminCreatePatient';


export class AdminPatients extends Component{
  
    render(){
        
        return (
            <div className=" background grey lighten-4">
                <div class="navbar-fixed">
                            <nav class="nav-wrapper white darken-1" style={{borderBottom:"3px solid #00bcd4"}}>
                            <div class="container">
                                <a href="#" class="brand-logo cyan-text">iCHARM (Admin)</a>
                                <a href="#" class="sidenav-trigger" data-target="mobile-links">
                                <i class="material-icons">menu</i>
                                </a>
                                <ul class="right hide-on-med-and-down">
                                <li><NavLink to ="/adminhome" className="btn cyan white-text text-darken-1" ><span className="glyphicon glyphicon-home"></span>Home</NavLink></li>
             			<li> <Link to ="/adminpatients" className="cyan-text" ><span className=" cyan-text glyphicon glyphicon-th-list"></span>Patients Records</Link></li>
                   <li> <Link to ="/adminmedics" className="cyan-text"  ><span className="glyphicon glyphicon-globe cyan-text"></span>Medics Records</Link></li>
                   <li><NavLink to ="/medicprofile" className="cyan-text" ><span className=" cyan-text glyphicon glyphicon-user"></span> Profile</NavLink></li>
<li><a onClick={this.props.logout.bind(this)} href="/login" class="cyan-text"><span className="glyphicon glyphicon-log-out"></span> Logout</a></li>
                                </ul>
                            </div>
                            </nav>
                        </div>

                        <ul class="sidenav" id="mobile-links">
                            <li><Link to ="/adminpatients">Patient Records</Link></li>
            			<li> <Link to ="/adminmedics">Medical Workers</Link></li>
                                <li><a onClick={this.props.logout.bind(this)} href="/login" class="btn white red-text"> Logout</a></li>
                        </ul>
                <br></br>
                         
                         
                

            

         
               
            </div>
        );


    }




}

export default connect(null,{logout})(AdminPatients);
