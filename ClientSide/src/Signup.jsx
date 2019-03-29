import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
class Signup extends React.Component {

    render(){
        return(
            <Router>
            <div>
            <h2>This is the Signup Page</h2>
            <Route exact path='/'>

                <div className='FormCenter'>
                    <form className='FormFields' onSubmit={this.handleSubmit}>
                        <div class='FormField'>
                            <label className='FormField_Label' htmlFor='name'>Full Name</label>
                            <input type='text' id='name' className='FormField_Input' placeholder='Enter your full name' name='name' />
                        </div>
                        <div class='FormField'>
                            <label className='FormField_Label' htmlFor='name'>Postal Code</label>
                            <input type='text' id='name' className='FormField_Input' placeholder='Enter your Postal Code' name='postalcode' />
                        </div>
                        <div class='FormField'>
                            <label className='FormField_Label' htmlFor='name'>Email</label>
                            <input type='text' id='name' className='FormField_Input' placeholder='Enter your Email' name='email' />
                        </div>
                        <label className='FormField_CheckboxLabel'>
                            <input className='FormField_Checkbox' type='checkbox' name='hasAgreed' /> I agree all statments in <a href='' className='FormField_TermsLink'>terms of service</a>
                        </label>

                        <div className='FormField'>
                            <button className='FormField_Button'>Sign Up</button><a href='/' className='FormField_Link'>I'm already a memeber</a>
                        </div>
                    </form>
                </div>
                </Route>          
            </div>
            </Router>
            
        )
    }
}

export default Signup
