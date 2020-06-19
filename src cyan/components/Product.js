import React, {Component} from 'react';
import {Link,NavLink} from 'react-router-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
export class Product extends Component{

    render(){
       
            return (
                    <div className="background-home">
                        
                        <div class="navbar-fixed">
                        <nav class="nav-wrapper white">
                            <div class="container">
                                <a href="#" class="brand-logo cyan-text">iCHARM</a>
                                <a href="#" class="sidenav-trigger" data-target="mobile-links">
                                <i class="material-icons">menu</i>
                                </a>
                                <ul class="right hide-on-med-and-down">
                                <li><Link to ="/" className="cyan-text">Home</Link></li>
                                    <li><Link to ="/product" className="cyan-text"><b>Product</b></Link></li>
                                    <li><Link to ="/aboutus"className="cyan-text">About Us</Link></li>
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
                        


                        <div class = "center"><h3>Products</h3></div>

                        <div class = "productsz white">

                        <div class = "produkto center">
                        <div><img src = "https://scontent.fmnl10-1.fna.fbcdn.net/v/t1.15752-9/86695771_223188988849425_8224317559533469696_n.png?_nc_cat=104&_nc_ohc=oZ5mn6K6-1sAX9ukAuI&_nc_ht=scontent.fmnl10-1.fna&oh=4feed2cd8400ebc108cb6b23bc1b81db&oe=5EB8801B" alt = "iCHARM Web" id = "webimg"></img></div>
                            <h5>Web Application</h5>
                            <p>
                                The perfect application Doctors and other Medical Professionals to help them with decision making regarding Cardiovascular Diseases
                            </p>
                                </div>
                        <div class = "produkto center">
                        <div><img src = "https://scontent.fmnl10-1.fna.fbcdn.net/v/t1.15752-9/86831278_481392709405340_5840443060500037632_n.png?_nc_cat=105&_nc_ohc=-h_mLLmbC08AX9K6HOZ&_nc_ht=scontent.fmnl10-1.fna&oh=a6b21e4724ff97887d7cb03963c121e3&oe=5EFA34B1" alt = "iCHARM Mobile"></img></div>
                            <h5>iCHARM Device</h5>
                            <p>
                                Consisted of a Blood Pressure Monitor, Seated Weighing Scale, and a Glucometer to take the health measurements that are important for determing a patients CVD Risk
                            </p>
                            </div>
                        <div class = "produkto center">
                            <div><img src = "https://scontent.fmnl10-1.fna.fbcdn.net/v/t1.15752-9/86831278_481392709405340_5840443060500037632_n.png?_nc_cat=105&_nc_ohc=-h_mLLmbC08AX9K6HOZ&_nc_ht=scontent.fmnl10-1.fna&oh=a6b21e4724ff97887d7cb03963c121e3&oe=5EFA34B1" alt = "iCHARM Mobile"></img></div>
                            <h5>Mobile Application</h5>
                            <p>
                                Monitor your Cardiovascular Disease risk factors anywhere you go with the iCHARM Mobile App!
                            </p>
                            <a href = "" class = "blue-text">Download Now!</a>
                            </div>


                        </div>


                        {/* ---------------------FOOTER */}

               <div class = "foot white">
                                <footer id = "footerdiv">
                        <div class="footer-copyright whhite">
            <div class="container cyan-text center">
            <b class = "copy">© iCHARM 2020</b>
            </div>
                </div></footer></div>


                    </div>
                )
                        


                    

            }
}

export default Product;
