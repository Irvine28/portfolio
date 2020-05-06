import React,{Component} from 'react';
import {Link} from 'react-router-dom'
import styled from 'styled-components'
import background from '../assets/quill.svg'

class Navbar extends Component {

    render(){
          let styles = {
            backgroundColor: 'yellow',
          };
        
        return(
        <React.Fragment>
            <div className='navbar navbar-expand-lg bg-dark px-lg-5'>         
            
                <img src={background} style={{backgroundColor: 'azure',margin: '5px'}} width="40" height="40" alt=""/>
                <div className='text-white'>
                    Portfolio
                </div>
            
                <div class="collapse navbar-collapse " id="navbarNavAltMarkup">
                    <div class="navbar-nav ml-auto ">
                        <Link to='/'>
                            <div className='nav-item nav-link text-white'>
                                About
                            </div>
                        </Link>
                        <Link to='/Project'>
                            <div className='nav-item nav-link text-white'>
                                Projects
                            </div>
                        </Link>
                        <Link to='/Contact'>
                            <div className='nav-item nav-link text-white'>
                                Contact
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
            
        </React.Fragment>
        )
    }

    
}

export default Navbar
