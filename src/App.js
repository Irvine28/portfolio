import React,{Component} from 'react';
import { Switch,Route } from 'react-router-dom'
import './App.css';

import  Navbar  from './components/Navbar'
import Default from './components/Default'
import Main from './components/Main'
import Project from './components/Project'
import Contact from './components/Contact'
import Footer from './components/Footer'


class App extends Component {
    
    constructor(props){
        super(props)
      
    }
    
    
    render(){
        console.log(window.location.href)
    return (
        
        <React.Fragment>
            <Navbar />
                
                <Switch>
                    <Route exact path='/' component={Main}/>
                    <Route exact path='/Project' component={Project}/>
                    <Route exact path='/Contact' component={Contact}/>
                    <Route component={Default}/>
                </Switch>
                
            <Footer/>
        </React.Fragment>  
  );
    }
}

export default App;
