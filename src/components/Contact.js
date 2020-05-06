import React, {Component} from 'react'


class Contact extends Component {
    
    constructor(){
        super()
        this.state = {
            username:'',
            email:'',
            message:'',
            
        }
    }
    
    handleUserNameChange =(event) => {
        this.setState({
            username: event.target.value
        })
    }
    
    handleEmailChange=(event)=> {
        this.setState({
            email: event.target.value
        }) 
    }
    
    handleUserMessageChange=(event)=> {
        this.setState({
            message: event.target.value
        }) 
    }
    
    handleSubmit =(event) => {
        alert(`${this.state.username} ${this.state.email} ${this.state.message}`)
  
    }
    
    render() {
        return (
        
        <div className='contact'>
            <div className='contact-title'>
                <h1>Contact-us</h1>
            </div>
            
            <div className='contact-card'>
                
                <form className='contact-form' onSubmit={this.handleSubmit}>
                <div>
                    <label>Username</label><br/>
                    <input className='form-control justify-content-center' type='text' value={this.state.username} onChange={this.handleUserNameChange} placeholder='name' required/>
                </div>    
                <div>    
                    <label>Email</label><br/>
                    <input className='form-control' type='text' value={this.state.email} onChange={this.handleEmailChange} placeholder='email' required/>
                </div>    
                <div>    
                    <label>Message</label><br/>
                    <textarea className='form-control' type='text' value={this.state.message} onChange={this.handleUserMessageChange} placeholder='message' row='4' required></textarea>                    
                </div>        
                   

                <button className='btn btn-primary' type='submit'>Submit</button>

                </form>
                
            </div>    
        </div>
        )
    }
}


export default Contact