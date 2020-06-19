import React, {Component} from 'react';
import {Link,NavLink} from 'react-router-dom';

export class Home extends Component{

    render(){
       
            return (
                    <div className="background-home">


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
                                    <li><NavLink to ="/contactus" className="cyan-text" activeClassName="btn white red-text text-lighten-2">Contact Us</NavLink></li>
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
                        
                        <div class = "productsz">

                        <div class = "produkto1 center">
                        
                            <h3>The Beat Goes On...</h3>
                            <p id = "homequote">
                                "A machine that supports cardiovascular health decision making by providing insights through technological innovations."
                            </p>
                                </div>
                        <div class = "produkto center">
                        
                        <div class="slider">
                                <ul class="slides">
                                    <li>
                                    <img src="https://scontent.fmnl10-1.fna.fbcdn.net/v/t1.15752-9/67135462_2334770020079208_4047308426466820096_n.png?_nc_cat=109&_nc_sid=b96e70&_nc_ohc=eYMTVoSE4NIAX9IQz0X&_nc_ht=scontent.fmnl10-1.fna&oh=0fb6899ba5d5877cd308c9ecbad8feb9&oe=5E8D795F" alt=""/>
                                    <div class="caption right-align">
                                        <h3></h3>
                                        <h5 class="light grey-text text-lighten-3"><b></b></h5>
                                    </div>
                                    </li>
                                    <li>
                                    <img src="https://scontent.fmnl10-1.fna.fbcdn.net/v/t1.15752-9/87894255_2278550079121357_4844768065310687232_n.png?_nc_cat=106&_nc_sid=b96e70&_nc_ohc=0F7d_gBBjuAAX_zIt6D&_nc_ht=scontent.fmnl10-1.fna&oh=88efe27ef2c11cbb71f73dc156dd762b&oe=5E975589" alt=""/>
                                    <div class="caption left-align">
                                        <h3></h3>
                                        <h5 class="light grey-text text-lighten-3"><b></b></h5>
                                    </div>
                                    </li>
                                    <li>
                                    <img src="" alt=""/>
                                    <div class="caption right-align">
                                        <h3></h3>
                                        <h5 class="light grey-text text-lighten-3"><b></b></h5>
                                    </div>
                                    </li>
                                </ul>
                                </div>
                            </div>
                    


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
                            


                )
                        


                    

            }
}

export default Home;
