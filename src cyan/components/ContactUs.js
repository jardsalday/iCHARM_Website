import React, {Component} from 'react';
import {Link,NavLink} from 'react-router-dom';




export class ContactUs extends Component{


    

    render(){
       
            return (
                    <div class = "background-contact">
                        
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
                                    <li><Link to ="/aboutus" className="cyan-text">About Us</Link></li>
                                    <li><Link to ="/contactus" className="cyan-text"><b>Contact Us</b></Link></li>
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

                        
                        
                        
                        
                        
                        
                        <div class = "contactsheet">

                        <div class = "contactslaman blue-grey darken-4 center">

                        <h4 class = "white-text">We'd love to hear from you!</h4>
                            
                            <form onSubmit={this.submitForm}
                                    action="https://formspree.io/xrgkzdvy"
                                    method="POST">
                                <div class = "row"> 

                                <div class="input-field col s6 white-text">
                                <input type="text" id="name" name = "name"/>
                                <label class="active" for="name">Name</label>
                                </div>

                                <div class="input-field col s6 white-text">
                                <input type="email" id="email" class="validate" name = "email"/>
                                <label class="active" for="email">Email</label>
                                </div>

                                </div>

                                <div class = "row"> 

                                <div class="input-field col s6 white-text">
                                <input type="text" id="name" name = "contact"/>
                                <label class="active" for="name">Contact No.</label>
                                </div>

                                <div class="input-field col s6 white-text">
                                <input type="text" id="name" class="validate" name = "company"/>
                                <label class="active" for="email">Company</label>
                                </div>

                                </div>

                                <div class = "row">

                                <div class="input-field col s12 white-text">
                                <textarea type="email" id="textarea" class="materialize-textarea" name = "message"></textarea>
                                <label class="active" for="textarea">Message</label>
                                </div>

                                </div>
                                <button class="btn waves-effect waves-light">Submit</button>

                            </form>
 





                        </div>


                        <div class = "contactslaman1 cyan">

                        <h4 class = "white-text">Contact Information</h4><br/>
                            
                            <div class = "row">
                            <i class="material-icons white-text col">place</i><div class = "white-text col">145 Pearl Lane, Mt. View Park Subd., Batangas City, Batangas 4200</div><br/>
                            </div>

                            <div class = "row">
                            <i class="material-icons white-text col">phone</i><div class = "white-text col">09360568625</div><br/>
                            </div>

                            <div class = "row">
                            <i class="material-icons white-text col">local_post_office</i><div class = "white-text col">contactus.icharm@gmail.com</div><br/>
                            </div>

                            <div class = "row">
                            <img class = "col" src="https://scontent.fmnl10-1.fna.fbcdn.net/v/t1.15752-9/67402535_2301794179889076_6947947850047160320_n.png?_nc_cat=102&_nc_sid=b96e70&_nc_ohc=7AyZ7rFnrQQAX-ieslx&_nc_ht=scontent.fmnl10-1.fna&oh=5769cac9dae86938eecbf65a31f7e7d8&oe=5E96478F" alt=""/>
                            <div class = "white-text col">@iCHARMPH</div><br/>
                            </div>

                            <div class = "row">
                            <img class = "col" src="https://scontent.fmnl10-1.fna.fbcdn.net/v/t1.15752-9/78664717_814474522319811_9217243221602598912_n.png?_nc_cat=102&_nc_sid=b96e70&_nc_ohc=s09vuYFysmEAX_P5Pv4&_nc_ht=scontent.fmnl10-1.fna&oh=86f6c5838d69da258a5be813d8d7eedc&oe=5E989C17" alt=""/>
                            <div class = "white-text col">@iCHARMPH</div><br/>
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





export default ContactUs;


