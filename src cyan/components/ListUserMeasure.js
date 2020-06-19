import React, {Component} from 'react';
import axios from 'axios';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {getSpecPatient} from '../actions/assessActions';
import {Link,NavLink} from 'react-router-dom';
import patient from '../reducers/patient';
import '../App.css'
import { PatientComponent } from './PatientComponent';
import { CreatePatient } from './CreatePatient';
import Assess from './Assess';
import Pagination from './Pagination';
import Graph from './Graph';
import RiskGraph from './RiskGraph';
import Description from './Description';
import { CSSTransitionGroup } from 'react-transition-group';
import {Line} from 'react-chartjs-2';
import {getUserMeasure,addPatients} from '../actions/patientActions';
import {logout} from '../actions/auth';

export class ListUserMeasure extends Component{
 
    state = {
        patientOne:[],
        systolic:[],
        all:{},
        risk:{},
        sys:{},
        dia:{},
        weight:{},
        cholesterol:{},
        truesys:{},
        cholesterol2:{},
        displayrisk:"",
        desc:{},
        refresh:false,
        currentPage: 1,
      todosPerPage: 5,
      bgColor:'green',
      activeIndex:1,
        
        

    }

  
 
    static propTypes = {
        measures: PropTypes.array.isRequired,
        logout:PropTypes.func.isRequired
      
      
    }
 
    renderSuggestions(){
        const {suggestions} = this.state;
        if(suggestions.length==0){
            return null;
        }
        return (
            <ul>
                {suggestions.map(item=><li onClick={()=>this.suggestionSelected(item)}>{item}</li>)}
            </ul>
    
        )
      }

  componentDidMount(){
      this.props.getUserMeasure();

    
  }
  handleClick(event) {
    this.setState({
      currentPage: Number(event.target.id) ,
      activeIndex: event.target.id
    });
  }

  render(){
    const created_at = [this.props.measures.sort((a,b)=>(-1*(a.id-b.id))).map(data=>data.created_at)]
    const { todos, currentPage, todosPerPage } = this.state;
    const indexOfLastTodo = currentPage * todosPerPage;
    const indexOfFirstTodo = indexOfLastTodo - todosPerPage;
    const currentTodos = this.props.measures.sort((a,b)=>(-1*(a.id-b.id))).slice(indexOfFirstTodo, indexOfLastTodo);
    const pageNumbers = [];
    for (let i = 1; i <= Math.ceil(this.props.measures.length / todosPerPage); i++) {
      pageNumbers.push(i);
    }
    const renderPageNumbers = pageNumbers.map(number => {
        return (
          <li style={{display:"inline",marginLeft:"5px"}}
            key={number}
            id={number}
            onClick={this.handleClick.bind(this)}
            className={number==this.state.activeIndex?"btn cyan white-text":"btn white black-text"}
          >
            {number}
          </li>
        );
      });

        return (
            <div className="background  ">
            
            

             <div class="navbar-fixed">
             <nav class="nav-wrapper white darken-1">
                             <div class="container">
                                 <a href="#" class="brand-logo cyan-text">iCHARM</a>
                                 <a href="#" class="sidenav-trigger" data-target="mobile-links">
                                 <i class="material-icons">menu</i>
                                 </a>
                                 <ul class="right hide-on-med-and-down">
                                 <li><NavLink to ="/userpatient" className="cyan-text"  ><span className="glyphicon glyphicon-home cyan-text"></span> Home</NavLink></li>
             			<li> <Link to ="/listusermeasure" className="btn cyan white-text"><span className="glyphicon glyphicon-th-list white-text"></span> Measures</Link></li>
                   
                   <li> <Link to ="/userprofile" className="cyan-text"><span className="	glyphicon glyphicon-user cyan-text"></span> Profile</Link></li>
                                 <li><a onClick = {this.props.logout.bind(this)} href="/login" class="cyan-text"><span className="glyphicon glyphicon-log-out"></span> Logout</a></li>
                                 </ul>
                             </div>
                             </nav>
                         </div>
                        <ul class="sidenav" id="mobile-links">
                          <li><Link to ="/patient">Patient Records</Link></li>
            			<li> <Link to ="/admin">Admin</Link></li>
                                 <li><a onClick={this.props.logout.bind(this)} href="/" class="btn white red-text text-lighten-2">Logout</a></li>
                         </ul>           
                         <div className="row">
         <div className=" white col-lg-1 cold-md-12 col-sm-12 col-6  date-time-card" >
               <span className="cyan-text glyphicon glyphicon-calendar"></span>
                <label className="cyan-text">Last Updated:</label>
               <label className="grey-text">{created_at[0][0]}</label>
               <label className="grey-text">-9:15 AM</label>
               <div className="list-graph right col" style={{marginRight:"0px"}} ><button id = "padright" className="list btn cyan lighten-3"><i className=" white-text glyphicon glyphicon-th-list"></i>{'  '}
        <Link to ="/listusermeasure">List</Link></button>
        <button className="chart btn cyan lighten-3"id = "padright"><i className=" white-text glyphicon glyphicon-signal"></i>{'  '}<Link to="/usermeasures">Graph </Link></button>
        <button style={{marginLeft:"5px",paddingTop:"-px"}} onClick={this.props.getUserMeasure.bind(this)}
        className="btn cyan lighten-3 white-text  right"><span className="glyphicon glyphicon-refresh"></span></button>
             
        </div>


               </div>
              <div className="col-lg-12 col-md-12 col-sm-12">
                <div className="inline">
              
               
            
          
               </div>
              
               </div>
               <br></br>
              
               <br></br><br></br><br></br>
             <div className="col-lg-10 col-md-12 col-sm-12 col-12 " style={{marginLeft:"20px "}}>
             <table className="table2">
                 {this.state.displayrisk}
                <tr>
                    <th className="cyan white-text"> Date</th>
                    <th className="cyan white-text" >Systolic</th>
                    <th className="cyan white-text">Diastolic</th>
                    <th className="cyan white-text">Cholesterol</th>
                    <th className="cyan white-text">Weight</th>
                    <th className="cyan white-text">BMI</th>
                    <th className="cyan white-text">HIGH RISK PROBABILITY</th>
                    <th className="cyan white-text">LOW RISK PROBABILITY</th>
                    <th className= "cyan white-text">RISK</th>
                </tr>
                
        {currentTodos.map(data=>(<tr>
            <td>{data.created_at}</td>
            <td className="grey-text text-darken-2">{data.systolic}</td>
            <td className="grey-text text-darken-2">{data.diastolic}</td>
            <td className="grey-text text-darken-2">{data.cholesterol}</td>
            <td className="grey-text text-darken-2">{data.weight}</td>
            <td  className="grey-text text-darken-2">{data.BMI}</td>
            <td className="red-text text-lighten-2">{data.risk_proba1}</td>
            <td className="green-text ">{data.risk_proba0}</td>
        <td className="cyan-text">{data.risk=='1'?"HIGH":"LOW"}</td>


            </tr>
        ))}
                    {/* <td className="green-text">120</td>
                    <td className="blue-text">80</td>
                    <td className="red-text text-lighten-2">80</td>
                    <td className="orange-text text-lighten-1">200</td>
                    <td className="pink-text text-lighten-2">65</td>
                    <td className="grey text-lighten-2">25</td>
                    <td className="red-text text-lighten-1">50%</td> */}
            

             </table>
             <ul id="page-numbers" style={{float:"right"}}>
             {renderPageNumbers}
         </ul>
            
             </div>
             <div className = "graph-small">
          
             </div>
           </div>


                            {/* ---------------------FOOTER */}

                        <div class = "foot cyan">
                                <footer id = "footerdiv">
                        <div class="footer-copyright cyan">
                        <div class="container white-text center">
                    <b class = "copy">© iCHARM 2020</b>
                        </div>
                </div></footer></div>
        
                
      </div>
        );


    }




}

const mapStateToProps = state =>({
    measures :state.measurereducer.measure

});

export default connect(mapStateToProps,{getUserMeasure,logout})(ListUserMeasure);
/**
  */