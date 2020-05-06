import React,{Component} from 'react';
import background from '../assets/2681852.jpg'

class Project extends Component {

    render(){
        return(
           <div className='main'>
            <div className="card">
                <img src={background} class="card-img" alt='background'/>
                <h1 class="card-text">
                    Need more example?
                </h1>
                <p className="card-text">
                    This is it again, another bullshit!
                </p>
                
            </div>
            </div>
        )
    }
    
}
    
export default Project