import React,{Component} from 'react';
import background from '../assets/1349.jpg'

class About extends Component {

    render(){
        return(
            <React.Fragment>
            <div className="card">
                <img src={background} class="card-img" alt='background'/>
                <h1 class="card-text">
                    What is bullshit
                </h1>
                <p className="card-text">
                    This is it, i am bullshiting!
                </p>
                
            </div>
            </React.Fragment>
        )
    }
    
}

export default About