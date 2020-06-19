import React, {Component} from 'react';
import {Link,NavLink} from 'react-router-dom';

export class AboutUs extends Component{

    render(){
       
            return (
                    <div className="background-about">
                        
                        <div class="navbar-fixed">
                        <nav class="nav-wrapper white">
                            <div class="container">
                                <a href="#" class="brand-logo cyan-text">iCHARM</a>
                                <a href="#" class="sidenav-trigger" data-target="mobile-links">
                                <i class="material-icons">menu</i>
                                </a>
                                <ul class="right hide-on-med-and-down">
                                <li><Link to ="/" className="cyan-text">Home</Link></li>
                                    <li><Link to ="/product" className="cyan-text">Product</Link></li>
                                    <li><Link to ="/aboutus" className="cyan-text"><b>About Us</b></Link></li>
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

                        <div class = "center"><h3>The Team</h3></div>
                        
                        <div id = "slidee">
                        <div class="slider">
                                <ul class="slides">
                                    <li>
                                    <img src="https://scontent.fmnl10-1.fna.fbcdn.net/v/t1.15752-9/86936788_865148423961596_4456686210697396224_n.png?_nc_cat=102&_nc_ohc=5kL-C5JXvfcAX85rLw9&_nc_ht=scontent.fmnl10-1.fna&oh=b81fa9d50a9a09cb9758e1a56efb6cbc&oe=5EB5B250" alt=""/>
                                    <div class="caption right-align">
                                        <h3>Jared Alday</h3>
                                        <h5 class="light grey-text text-lighten-3"><b>Mobile Developer/Lead Designer</b></h5>
                                    </div>
                                    </li>
                                    <li>
                                    <img src="https://scontent.fmnl10-1.fna.fbcdn.net/v/t1.15752-9/87335016_779406989135537_6664208278815244288_n.png?_nc_cat=108&_nc_ohc=b4MD9mExp8kAX9LaP28&_nc_ht=scontent.fmnl10-1.fna&oh=00b7aeba636a99800e24cfcba5742a4e&oe=5EBB72D6" alt=""/>
                                    <div class="caption left-align">
                                        <h3>Vincent Calingasan</h3>
                                        <h5 class="light grey-text text-lighten-3"><b>Machine Learning/Web Developer</b></h5>
                                    </div>
                                    </li>
                                    <li>
                                    <img src="https://scontent.fmnl10-1.fna.fbcdn.net/v/t1.15752-9/87287682_2882805191782906_8037042786265989120_n.png?_nc_cat=106&_nc_ohc=QK29tqU_LtsAX_8ZbTp&_nc_ht=scontent.fmnl10-1.fna&oh=6b0a745e1c8934a4191acbc3523f4cc5&oe=5EFEFBF7" alt=""/>
                                    <div class="caption right-align">
                                        <h3>Mark Matibag</h3>
                                        <h5 class="light grey-text text-lighten-3"><b>Mobile Developer/QA Manager</b></h5>
                                    </div>
                                    </li>
                                </ul>
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

export default AboutUs;
