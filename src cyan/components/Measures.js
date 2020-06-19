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

export class Measures extends Component{
 
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
        show:false,
        display:true
        
        

    }

    static propTypes = {
        measures: PropTypes.array.isRequired,
        logout:PropTypes.func.isRequired
       
      
    }
 
 loadMeasures(){
    this.props.getUserMeasure();
    this.setState({
      
     risk:{
       labels:this.props.measures.sort((a,b)=>(-1* (b.id-a.id))).map(test=>test.created_at),
   datasets:[
           {
               label:"CVD High Risk Probability",
               borderColor: "rgb(229, 115, 115)",
               fill:false,
               lineTension:0,
               backgroundColor:"rgba(229, 115, 115,0.2)",
             data:this.props.measures.sort((a,b)=>(-1* (b.id-a.id))).map(test=>test.risk_proba1)
           },
           {
              label:"CVD Low Risk Probability",
              borderColor: "#2196f3",
              fill:false,
              lineTension:0,
              
            data:this.props.measures.sort((a,b)=>(-1* (b.id-a.id))).map(test=>test.risk_proba0)
          }]

           },
             
           sys:{
               labels:this.props.measures.sort((a,b)=>(-1* (b.id-a.id))).map(test=>test.created_at),
           datasets:[
                   {
                       label:"Systolic Pressure",
                       borderColor: "#26c6da",
                       fill:false,
                       lineTension:0,
                       data:this.props.measures.sort((a,b)=>(-1* (b.id-a.id))).map(test=>test.systolic)
                   }]
   
         },
         dia:{
           labels:this.props.measures.sort((a,b)=>(-1* (b.id-a.id))).map(test=>test.created_at),
       datasets:[
               {
                   label:"Diastolic Pressure",
                   borderColor: "#26c6da",
                   fill:false,
                   lineTension:0,
                   backgroundColor:"rgba(124, 179, 66,0.2)",
                   data:this.props.measures.sort((a,b)=>(-1* (b.id-a.id))).map(test=>test.diastolic)
               }]
   
     },
     weight:{
       labels:this.props.measures.sort((a,b)=>(-1* (b.id-a.id))).map(test=>test.created_at),
   datasets:[
           {
               label:"Weight",
               borderColor: "#26c6da",
               fill:false,
               lineTension:0,            
               backgroundColor:"rgba(255, 183, 77,0.2)",
               data:this.props.measures.sort((a,b)=>(-1* (b.id-a.id))).map(test=>test.weight)
           }]
   
   },
   
   cholesterol:{
       labels:this.props.measures.sort((a,b)=>(-1* (b.id-a.id))).map(test=>test.created_at),
   datasets:[
           {
               label:"Cholesterol Level",
               borderColor: "#00acc1 ",
               fill:false,
               lineTension:0,
               backgroundColor:"rgba(200, 200, 0,0.2)",
               data:this.props.measures.sort((a,b)=>(-1* (b.id-a.id))).map(test=>test.cholesterol)
           },
           {
             label:"Systolic Pressure",
             borderColor: "#388e3c  ",  
             lineTension:0,
             fill:false,
             data:this.props.measures.sort((a,b)=>(-1* (b.id-a.id))).map(test=>test.systolic)
         },
         {
           label:"Diastolic Pressure",
           borderColor: "#ab47bc ",
           fill:false,
           lineTension:0,
           backgroundColor:"rgba(124, 179, 66,0.2)",
           data:this.props.measures.sort((a,b)=>(-1* (b.id-a.id))).map(test=>test.diastolic)
       },
       {
         label:"Weight",
         borderColor: "#c0ca33 ",
         fill:false,
         lineTension:0,            
         backgroundColor:"rgba(255, 183, 77,0.2)",
         data:this.props.measures.sort((a,b)=>(-1* (b.id-a.id))).map(test=>test.weight)
     }
         ]
   
   },
   cholesterol2:{
     labels:this.props.measures.map(test=>test.created_at),
 datasets:[
         {
             label:"Cholesterol Level",
             borderColor: "#26c6da",
             fill:false,
             lineTension:0,
             backgroundColor:"rgba(200, 200, 0,0.2)",
             data:this.props.measures.sort((a,b)=>(-1* (b.id-a.id))).map(test=>test.cholesterol)
         }
       ]
 
 }

});}

  componentDidMount(){
    
    this.loadMeasures()
    
  }
  showAll(){
      this.setState({show:!this.state.show,display:!this.state.display})
  }
  
    render(){
      
        const created_at = [this.props.measures.sort((a,b)=>(-1*(a.id-b.id))).map(data=>data.created_at)]

        return (
            <div className="background  white">
            
            

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
                                 <li><a onClick={this.props.logout.bind(this)} href="/login" class="cyan-text"><span className="glyphicon glyphicon-log-out cyan-text"></span> Logout</a></li>
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
         <div className=" white col-lg-10 cold-md-12 col-sm-12 col-6   date-time-card" >
               <span className="cyan-text glyphicon glyphicon-calendar"></span>
                <label className="cyan-text">Last Updated:</label>
               <label className="grey-text">{created_at[0][0]}</label>
               <label className="grey-text">-9:15 AM</label>

               <div className="right col" style={{marginRight:"0px"}} ><button id = "padright" className="list btn cyan lighten-3"><i className=" white-text glyphicon glyphicon-th-list"></i>{'  '}
        <Link to ="/listusermeasure">List </Link></button>
        <button className="chart btn cyan lighten-3"id = "padright"><i className=" white-text glyphicon glyphicon-signal"></i>{'  '}<Link to="/usermeasures">Graph </Link></button>
        <button style={{marginLeft:"5px",paddingTop:"0px"}} onClick={this.loadMeasures.bind(this)}className="btn cyan lighten-3 white-text  right"><span className="glyphicon glyphicon-refresh"></span></button>
             
             <button onClick={this.showAll.bind(this)}className="btn cyan lighten-3 white-text  right">{this.state.show?<u><b>Split</b> </u>:<u><b>MERGE</b></u>}</button>
        </div>
               </div>
              <div className="col-lg-12 col-md-12 col-sm-12">
                <div className="inline">
               
            
          
               </div>
              
               </div>
               <br></br>
                <br></br><br></br><br></br>
             <div className="col-lg-10 col-md-12 col-sm-12 col-12 card-graph-user">
            
            
             <div className=" card-header header-analytics col-lg-12 cyan-text"><span className=" glyphicon glyphicon-signal"></span>{' '}<label className="cyan-text">Analytics</label>{' '}<span className=" glyphicon glyphicon-signal"></span></div>
             <div className="grapher col-lg-7 col-md-12 col-sm-12 col-12"> <div className="backgroundgraph " id="canvas">
            
             <div className="col-lg-12">
            </div>
            <div className={this.state.show?"graphshow":"graph col-lg-6 col-sm-6 col-md-6"}>
                
            <label><h6 className="cyan-text text-lighten-1">SYSTOLIC</h6></label>
                <Line option={{
                    responsive:false
                }}
                data={this.state.sys}
                height='500px'
                width='1100px'
                />
                </div>
                <div className={this.state.show?"graphshow":"graph col-lg-6 col-sm-6 col-md-6"}>
                <label><h6 className="cyan-text ">DIASTOLIC</h6></label>
                <Line option={{
                    responsive:false
                }}
                data={this.state.dia}
                height='500px'
                width='1000px'
                /></div>
                <div className={this.state.show?"graphshow":"graph col-lg-6 col-sm-6 col-md-6"}>
                <label><h6 className="cyan-text text-lighten-2">BMI/WEIGHT</h6></label>
                 <Line option={{
                    responsive:false
                }}
                data={this.state.weight}
                height='500px'
                width='1000px'
                />
                </div>
                <div className={this.state.show?"graphshow":"graph col-lg-6 col-sm-6 col-md-6"}>
                <label><h6 className="cyan-text lighten-3">CHOLESTEROL</h6></label>
                <Line option={{
                    responsive:false
                }}
                data={this.state.cholesterol2}
                height='500px'
                width='1000px'
                />
                </div>
                
           <div className={this.state.show?"col-lg-11 col-sm-12 col-md-12":"graphshow"}>
           <label><h6>RISK FACTORS</h6></label>
           <Line option={{
               responsive:true
           }}
           data={this.state.cholesterol }
           height='700px'
           width='1000px'
           />
           
           </div>       
          
          </div></div>
          <br/>
             <div className=" risk col-lg-5 col-md-12 col-sm-12"> 
                <label className="red-text text-lighten-2">CVD RISK:</label>
                <Line
                data={this.state.risk}
                height='800px'
                width='1000px'
                option={{
                    maintainAspectRatio:false,bezierCurve:true
                }}
                />
                </div>
            
            
             </div>
             <div className = "graph-small">
          
             </div>
           </div>
        
                
      </div>
        );


    }




}

const mapStateToProps = state =>({
    measures :state.measurereducer.measure

});
export default connect(mapStateToProps,{getUserMeasure,logout})(Measures);
/**
  */