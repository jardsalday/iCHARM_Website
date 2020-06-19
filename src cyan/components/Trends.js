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

export class Trends extends Component{
 

    state = {
        patientOne:[],
        measurements:[],
        systolic:[],
        all:{},
        risk:{},
        sys:{},
        dia:{},
        weight:{},
        cholesterol:{},
        truesys:{},
        cholesterol2:{},
        displayrisk1:"",
        displayrisk0:'',
        displaysys:'',
        displaydia:'',
        displayweight:'',
        displaychol:'',
        latest_id:'',
        desc:{},
        refresh:false,
        show:false,
        display:true,
        currentPage: 1,
      todosPerPage: 5,
      bgColor:'green',
      activeIndex:1,
      smoker:'',
      edit_risk:false,
      risk_proba0:'',
      risk_proba1:''
        
        

    }
    static propTypes ={
      updateRisk:PropTypes.func.isRequired
    }

  test120(){
    const send = {sugar:120}
    axios.post('http://172.20.10.11:8000/api/loglog/',send).then(res=>console.log(res.data));
  }
  test140(){
    const send = {sugar:140}
    axios.post('http://172.20.10.11:8000/api/loglog/',send).then(res=>console.log(res.data));
  }
  test160(){
    const send = {sugar:160}
    axios.post('http://172.20.10.11:8000/api/loglog/',send).then(res=>console.log(res.data));
  }
  test180(){
    const send = {sugar:180}
    axios.post('http://172.20.10.11:8000/api/loglog/',send).then(res=>console.log(res.data));
  }
  test200(){
    const send = {sugar:200}
    axios.post('http://172.20.10.11:8000/api/loglog/',send).then(res=>console.log(res.data));
  }
  test220(){
    const send = {sugar:220}
    axios.post('http://172.20.10.11:8000/api/loglog/',send).then(res=>console.log(res.data));
  }
  test240(){
    const send = {sugar:240}
    axios.post('http://172.20.10.11:8000/api/loglog/',send).then(res=>console.log(res.data));
  }
  refresh1(){
    this.setState({refresh:!this.state.refresh})
      console.log("HIGH");
      const holder ="1";
      const send = {holder};
      axios.post('http://172.20.10.11:8000/api/log/',send).then(res=>console.log(res.data))
    
    // else{
    //   console.log("LOW");
    //   const holder = "0";
    //   const send2 = {holder};
    //   axios.post('http://172.20.10.11:8000/api/log',send2).then(res=>console.log(res.data))
    // }
  }
  refresh2(){
    this.setState({refresh:!this.state.refresh})
      console.log("LOW");
      const holder ="0";
      const send = {holder};
      axios.post('http://172.20.10.11:8000/api/log/',send).then(res=>console.log(res.data))
    
    // else{
    //   console.log("LOW");
    //   const holder = "0";
    //   const send2 = {holder};
    //   axios.post('http://172.20.10.11:8000/api/log',send2).then(res=>console.log(res.data))
    // }
  }
  onChange=e=> this.setState({[e.target.name]:e.target.value})

  componentDidMount(){
    this.getMeasurement();
        
    //     axios.get('http://192.168.43.164:8000/api/risk/').then(res=>{ const array = res.data;this.setState({risk:{
    //         labels:array.map(test=>test.created_at),
    //     datasets:[
    //             {
    //                 label:"CVD Risk",
    //                 borderColor: "rgb(229, 115, 115)",
    //                 fill:true,
    //                 lineTension:0.5,
    //                 backgroundColor:"rgba(229, 115, 115,0.2)",
    //               data:array.map(test=>test.risk_proba)
    //             }]

    //   }
    
    
    // // });});
  }
  getMeasurement(){
    const patientID = this.props.match.params.patientID; 
    //this.props.getSpecPatient(patientID);
    axios.get(`http://127.0.0.1:8000/api/getspecific/?id=${patientID}`).then(res=>{this.setState({patientOne:res.data});console.log(res.data)});
            axios.all([axios.get(`http://127.0.0.1:8000/api/specrisk/?id_number=${patientID}`),
           axios.get(`http://127.0.0.1:8000/api/specmeasure/?id_number=${patientID}`)])
     .then(axios.spread((firstResponse, secondResponse) => {  
         const risk = firstResponse.data
         const measure  =secondResponse.data
         const measure2 = secondResponse.data
         
        //  const measure2 = secondResponse.data;
         console.log(measure);
         console.log(risk)
        // const measure = measure2.map(function(test1){return{systolic:test1.systolic,diastolic:test1.diastolic,weight:test1.weight,
            // cholesterol:test1.cholesterol}});
         const lat_id = measure.sort((a,b)=>(-1* (b.id-a.id))).map(data=>data.id);
         const lat_risk1 = measure.sort((a,b)=>(-1* (b.id-a.id))).map(data=>data.risk_proba1);
         const lat_risk0 = measure.sort((a,b)=>(-1* (b.id-a.id))).map(data=>data.risk_proba0);
         const lat_sys = measure.sort((a,b)=>(-1* (b.id-a.id))).map(data=>data.systolic);
         const lat_dia = measure.sort((a,b)=>(-1* (b.id-a.id))).map(data=>data.diastolic);
         const lat_wei = measure.sort((a,b)=>(-1* (b.id-a.id))).map(data=>data.weight);
         const lat_chol = measure.sort((a,b)=>(-1* (b.id-a.id))).map(data=>data.cholesterol);
         this.setState({
           measurements:secondResponse.data,
           latest_id:lat_id[lat_id.length-1],
           displayrisk1:lat_risk1[lat_id.length-1],
           displayrisk0:lat_risk0[lat_id.length-1],
           displaysys:lat_sys[lat_id.length-1],
           displaydia:lat_dia[lat_id.length-1],
           displayweight:lat_wei[lat_id.length-1],
           displaychol:lat_chol[lat_id.length-1],
           desc:measure[measure.length-1],
          risk:{
            labels:measure.sort((a,b)=>(-1* (b.id-a.id))).map(test=>test.created_at),
        datasets:[
                {
                    label:"CVD High Risk",
                    borderColor: "#e57373",
                    fill:false,
                    lineTension:0.3,
                    backgroundColor:"rgba(124, 179, 66,0.2)",
                  data:measure.sort((a,b)=>(-1* (b.id-a.id))).map(test=>test.risk_proba1)
                },
                {
                  label:"CVD Low Risk",
                  
                  borderColor: "#2196f3",
                          fill:false,
                          lineTension:0.3,
                          backgroundColor:"rgba(124, 179, 66,0.2)",
                data:measure.sort((a,b)=>(-1* (b.id-a.id))).map(test=>test.risk_proba0)
              }]

                },
                  
                sys:{
                    labels:measure.sort((a,b)=>(-1* (b.id-a.id))).map(test=>test.created_at),
                datasets:[
                        {
                            label:"Systolic Pressure",
                            borderColor: "#e57373 ",
                            fill:false,
                            lineTension:0.5,
                            data:measure.sort((a,b)=>(-1* (b.id-a.id))).map(test=>test.systolic)
                        },
                        {
                          label:"Diastolic Pressure",
                          borderColor: "#0288d1",
                          fill:false,
                          lineTension:0.3,
                          backgroundColor:"rgba(124, 179, 66,0.2)",
                          data:measure.sort((a,b)=>(-1* (b.id-a.id))).map(test=>test.diastolic)
                      }]
        
              },
              dia:{
                labels:measure.sort((a,b)=>(-1* (b.id-a.id))).map(test=>test.created_at),
            datasets:[
                    {
                        label:"Diastolic Pressure",
                        borderColor: "#00bcd4 ",
                        fill:false,
                        lineTension:0.5,
                        backgroundColor:"rgba(124, 179, 66,0.2)",
                        data:measure.sort((a,b)=>(-1* (b.id-a.id))).map(test=>test.diastolic)
                    }]
        
          },
          weight:{
            labels:measure.sort((a,b)=>(-1* (b.id-a.id))).map(test=>test.created_at),
        datasets:[
                {
                    label:"Weight",
                    borderColor: "#00bcd4 ",
                    fill:false,
                    lineTension:0.5,            
                    backgroundColor:"rgba(255, 183, 77,0.2)",
                    data:measure.sort((a,b)=>(-1* (b.id-a.id))).map(test=>test.weight)
                }]
        
        },
        
        cholesterol:{
            labels:measure.sort((a,b)=>(-1* (b.id-a.id))).map(test=>test.created_at),
        datasets:[
                {
                    label:"Cholesterol Level",
                    borderColor: "#0288d1",
                    fill:false,
                    lineTension:0.5,
                    backgroundColor:"rgba(200, 200, 0,0.2)",
                    data:measure.sort((a,b)=>(-1* (b.id-a.id))).map(test=>test.cholesterol)
                },
                {
                  label:"Systolic Pressure",
                  borderColor: "rgba(0, 200, 0)",  
                  lineTension:0.4,
                  fill:false,
                  data:measure2.sort((a,b)=>(-1* (b.id-a.id))).map(test=>test.systolic)
              },
              {
                label:"Diastolic Pressure",
                borderColor: "#2196f3",
                fill:false,
                lineTension:0.3,
                backgroundColor:"rgba(124, 179, 66,0.2)",
                data:measure.sort((a,b)=>(-1* (b.id-a.id))).map(test=>test.diastolic)
            },
            {
              label:"Weight",
              borderColor: "#ffb74d",
              fill:false,
              lineTension:0.2,            
              backgroundColor:"rgba(255, 183, 77,0.2)",
              data:measure.sort((a,b)=>(-1* (b.id-a.id))).map(test=>test.weight)
          }
              ]
        
        },
        cholesterol2:{
          labels:measure.sort((a,b)=>(-1* (b.id-a.id))) .map(test=>test.created_at),
      datasets:[
              {
                  label:"Cholesterol Level",
                  borderColor: "#00bcd4 ",
                  fill:false,
                  lineTension:0.5,
                  backgroundColor:"rgba(200, 200, 0,0.2)",
                  data:measure.sort((a,b)=>(-1* (b.id-a.id))).map(test=>test.cholesterol)
              }
            ]
      
      }
    
    });
     }))
     .catch(error => console.log(error));

  }
  saveNewRisk=(e)=>{
    e.preventDefault();
    var risk = ''
    const {risk_proba0,risk_proba1} = this.state;
    if(risk_proba0=='' || risk_proba1==''){
    this.setState({edit_risk:false});
    }
    else if(risk_proba0!='' && risk_proba1!=''){
    if(Number(risk_proba0)>Number(risk_proba1)){
      risk = '0';  
    }
    else{
      risk='1';
    }
    const newRisk = {risk_proba0,risk_proba1,risk};
    console.log(newRisk);
    
    const patientID = this.props.match.params.patientID;
    axios.patch(`http://127.0.0.1:8000/api/measurement/${this.state.latest_id}/`,newRisk).then(res=>
    {
      axios.get(`http://127.0.0.1:8000/api/specmeasure/?id_number=${patientID}`).then(res=>
    { const measure = res.data;
      const lat_risk1 = measure.sort((a,b)=>(-1* (b.id-a.id))).map(data=>data.risk_proba1);
      const lat_risk0 = measure.sort((a,b)=>(-1* (b.id-a.id))).map(data=>data.risk_proba0);
      this.setState({
        displayrisk1:lat_risk1[lat_risk1.length-1],
           displayrisk0:lat_risk0[lat_risk0.length-1],
        risk_proba0:'',risk_proba1:'',
        risk:{
          labels:measure.sort((a,b)=>(-1* (b.id-a.id))).map(test=>test.created_at),
      datasets:[
              {
                  label:"CVD High Risk",
                  borderColor: "#e57373",
                  fill:false,
                  lineTension:0.3,
                  backgroundColor:"rgba(124, 179, 66,0.2)",
                data:measure.sort((a,b)=>(-1* (b.id-a.id))).map(test=>test.risk_proba1)
              },
              {
                label:"CVD Low Risk",
                
                borderColor: "#2196f3",
                        fill:false,
                        lineTension:0.3,
                        backgroundColor:"rgba(124, 179, 66,0.2)",
              data:measure.sort((a,b)=>(-1* (b.id-a.id))).map(test=>test.risk_proba0)
            }]

              },
              edit_risk:false

      });
    }
    
    )
    this.getMeasurement();

    });
    
  }
  
  }
  showAll(){
    this.setState({show:!this.state.show,display:!this.state.display})
}
handleClick(event) {
  this.setState({
    currentPage: Number(event.target.id) ,
    activeIndex: event.target.id
  });
}
    render(){
      const {risk_proba1,risk_proba0} = this.state
      var diabetes = this.state.patientOne.map(data=>data.is_dia);
      var main_diabetes = diabetes[0];
      const { todos, currentPage, todosPerPage } = this.state;
        const indexOfLastTodo = currentPage * todosPerPage;
        const indexOfFirstTodo = indexOfLastTodo - todosPerPage;
        const currentTodos = this.state.measurements.sort((a,b)=>(-1*(a.id-b.id))).slice(indexOfFirstTodo, indexOfLastTodo);
        const test = this.state.measurements.sort((a,b)=>(-1*(a.id-b.id))).map(data=>data.id);
        console.log(test);
        const pageNumbers = [];
        for (let i = 1; i <= Math.ceil(this.state.measurements.length / todosPerPage); i++) {
          pageNumbers.push(i);
        }
        const renderPageNumbers = pageNumbers.map(number => {
            return (
              <li style={{display:"inline",marginLeft:"5px"}}
                key={number}
                id={number}
                onClick={this.handleClick.bind(this)}
                className={number==this.state.activeIndex?"btn green white-text":"btn white black-text"}
              >
                {number}
              </li>
            );
          });
      

        return (
            <div className="background  grey lighten-4">
            
            

             <div class="navbar-fixed">
             <nav class="nav-wrapper cyan darken-1  ">
                             <div class="container">
                                 <a href="#" class="brand-logo">iCHARM</a>
                                 <a href="#" class="sidenav-trigger" data-target="mobile-links">
                                 <i class="material-icons">menu</i>
                                 </a>
                                 <ul class="right hide-on-med-and-down">
                                 <li><NavLink to ="/patient" className="btn white cyan-text text-lighten-2" ><span className="glyphicon glyphicon-align-left"></span>Patient Records</NavLink></li>
             			<li> <Link to ="/medicprofile"><span className="	glyphicon glyphicon-user"></span>Profile</Link></li>
                                 <li><a href="/login" class="white-text"><span className="glyphicon glyphicon-log-out"></span>Logout</a></li>
                                 </ul>
                             </div>
                             </nav>
                         </div>
                        <ul class="sidenav" id="mobile-links">
                          <li><Link to ="/patient">Patient Records</Link></li>
            			<li> <Link to ="/medicprofile">Profile</Link></li>
                                 <li><a href="/" class="btn white cyan-text text-lighten-2">Logout</a></li>
                         </ul>
                         <div className="white header-pat">
              <span className="grey-text text-darken-2 pat_info	glyphicon glyphicon-user"></span><label className="grey-text text-darken-2  ">Name:{this.state.patientOne.map(data=>data.name)}</label>
              <span className="grey-text text-darken-2 pat_info		glyphicon glyphicon-calendar"></span><label className="grey-text text-darken-2  ">Birthdate:{this.state.patientOne.map(data=>data.birthdate)}</label>
              <span className="grey-text text-darken-2 pat_info	glyphicon glyphicon-time"></span><label></label ><i className="grey-text text-darken-2 " >Age:{this.state.patientOne.map(data=>data.age)}</i>
              <span className="grey-text text-darken-2 pat_info	fas fa-venus-mars"></span> <label></label><i className="grey-text text-darken-2">Sex:{this.state.patientOne.map(data=>data.sex)}</i>
              <span className="grey-text text-darken-2 pat_info 	glyphicon glyphicon-tint"></span><i className="grey-text text-darken-2">Diabetic:{main_diabetes=='1'?"YES":"NO"}</i>
              <span className="grey-text text-darken-2 pat_info 	glyphicon glyphicon-alert"></span><i className="grey-text text-darken-2">Smoker:{this.state.patientOne.map(data=>data.smoker)=="1"?"YES":"NO"}</i>
              <button onClick={this.getMeasurement.bind(this)}className="btn cyan right" style={{marginTop:"2px",paddingTop:"2px"}}><span className="	glyphicon glyphicon-refresh white-text"></span></button>
                        </div>
                         <div className="row">
                           
                           <div className="col-lg-2 new_measure_card  white">
        <div className="cyan lighten- " style={{textAlign:"center"}}>
        <label><h6 className="white-text text-darken-2">BP:{this.state.displaysys}/{this.state.displaydia}/hg</h6></label>
        </div>
                <Line option={{
                    responsive:false
                }}
                data={this.state.sys}
                height='900px'
                width='900px'
                />
                </div>
                           <div className="col-lg-2 new_measure_card  white">
                <div className="cyan lighten- " style={{textAlign:"center"}}>          
                 <label><h6 className="white-text text-darken-2">WEIGHT:{this.state.displayweight}/kg </h6></label>
                </div>
                <Line option={{
                    responsive:false
                }}
                data={this.state.weight}
                height='900px'
                width='900px'
                />
                           </div>
                           <div className="col-lg-2 new_measure_card  white">
              <div className="cyan lighten- " style={{textAlign:"center"}}>
              <label><h6 className="white-text text-darken-2">CHOLESTEROL:{this.state.displaychol}/hg</h6></label>
               </div>
                <Line option={{
                    responsive:false
                }}
                data={this.state.cholesterol2}
                height='900px'
                width='900px'
                />
                           </div>
                           <div className="col-lg-4 row new_measure_card_risk  white">
                           <div className={this.state.edit_risk?"col-lg-6":"graphshow"}>
                             <label for="risk_proba1"><span className="glyphicon glyphicon-exclamation-sign grey-text text-lighten-1">HIGH RISK:</span> </label>
                             <input  onChange={this.onChange} type="text" name="risk_proba1" value={risk_proba1} placeholder="HIGH RISK PROBABILITY"/>
                            
                             </div>
                             
                             <div className={this.state.edit_risk?"col-lg-6":"graphshow"}>
                             <label for="risk_proba0"><span className="glyphicon glyphicon-exclamation-sign grey-text text-lighten-1">LOW RISK:</span></label>
                             <input  onChange={this.onChange} type="text" name="risk_proba0" value={risk_proba0} placeholder="LOW RISK PROBABILITY"/>
                             
                             </div>
             <div className="red lighten-2 col-lg-12" style = {{textAlign:"center"}}>
              <label><h6 className="white-text ">RISK PROBABILITY:HI={this.state.displayrisk1}%/LO={this.state.displayrisk0  }%</h6></label>
              <button className="btn white lighten-2 right white-text" style={{marginTop:"0px"}} onClick={this.state.edit_risk?this.saveNewRisk.bind(this):()=>{this.setState({edit_risk:!this.state.edit_risk})}}> <span className="glyphicon glyphicon-pencil red-text text-lighten-2"></span></button>
             </div>
                <Line option={{
                    responsive:false
                }}
                data={this.state.risk}
                height='800px'
                width='1000px'
                />
                           </div>
                         
                           <br/>
                           </div>
                           <div className="row">
                           <div className="col-lg-6 new_list_card  ">
                             <table className="table ">
                 
                <tr>
                    <th className="grey white-text"> Date</th>
                    <th className="grey white-text" >Systolic</th>
                    <th className="grey white-text">Diastolic</th>
                    <th className="grey white-text">Cholesterol</th>
                    <th className="grey white-text">Weight</th>
                    <th className="grey white-text">BMI</th>
                    <th className="grey white-text">LOW RISK</th>
                    <th className="grey white-text">HIGH RISK</th>
                    <th className= "grey white-text">RISK</th>
                </tr>
                
       
                {currentTodos.map(data=>(<tr key={data.id}>
            <td className="white">{data.created_at}</td>
            <td className="white grey-text text-darken-2"><b>{data.systolic}</b></td>
            <td className="white grey-text text-darken-2"><b>{data.diastolic}</b></td>
            <td className="white grey-text text-darken-2"><b>{data.cholesterol}</b></td>
            <td className="white grey-text text-darken-2"><b>{data.weight}</b></td>
            <td  className="white grey-text text-darken-2"><b>{data.BMI}</b></td>
            <td className="white green-text text-lighten-2"><b>{data.risk_proba0}</b></td>
            <td className="white red-text text-lighten-2"><b>{data.risk_proba1}</b></td>
        <td className="white cyan-text tex-lighten-2"><b>{data.risk=='1'?"HIGH":"LOW"}</b></td>


            </tr>
        ))}
            

             </table>
             <ul id="page-numbers" style={{float:"right"}}>
             {renderPageNumbers}
         </ul></div>
                           {/* <div className="col-lg-5 new_risk_card card-panel white">
                           <label><h6 className="blue-text ">RISK PROBABILITY</h6></label>
                <Line option={{
                    responsive:false
                }}
                data={this.state.risk}
                height='500px'
                width='1000px'
                />
                           </div> */}
      
           </div>
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
export default connect(mapStateToProps,{getUserMeasure})(Trends);
/**
  */