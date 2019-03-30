import React from 'react'

class Signup extends React.Component {
    state = {
        email:'',
        postalcode:'',
        name:''
    }
    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }
    handleSubmit = (e) => {
        e.preventDefault();
        console.log(this.state)
    }
    render(){
        return(
            <div>
            <h2>This is the Signup Page</h2>
                <div>
                <div className='container'>
                <form onSubmit={this.handleSubmit} className='white'>
                    <h5 className='grey-text text-darken-3'>Sign Up</h5>
                    <div className="input-field">
                        <label htmlFor='name'>Name</label>
                        <input type='name' id='name' onChange={this.handleChange}></input>
                    </div>
                    <div className="input-field">
                        <label htmlFor='postalcode'>Postal Code</label>
                        <input type='postalcode' id='postalcode' onChange={this.handleChange}></input>
                    </div>
                    <div className="input-field">
                        <label htmlFor='email'>Email</label>
                        <input type='email' id='email' onChange={this.handleChange}></input>
                    </div>
                    <div className='input-field'>
                        <button className='btn pink lighten-1 z-depth-0'>SignUp</button>
                    </div>
                </form>
                </div>
            </div>
            </div>
        )
    }
}

export default Signup