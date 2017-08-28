import React, { Component } from 'react';
import './App.css';
// import client from './components/ult/API'
import { ProjectList, ProjectPost } from './components/projects'
// import { CSSTransitionGroup } from 'react-transition-group'
import { Navigation, About, Contact, Home, NoMatch} from './components/pages'
import 'bulma/css/bulma.css'


import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom'



class App extends Component {

  constructor(props){
    super(props)

    this.state = {
      something: [],

}
  }

  render() {

    return (
      <div className="container is-fluid">
      
      <Router>
      <div>
  
        <Navigation/> 
        
  
        <Route exact path="/" component={Home}/> 
        <Route strict path="/projects" component={ProjectList}/>
        <Route strict path="/about" component={About}/>
        <Route strict path="/contact" component={Contact}/>
        <Route strict path="/project/:id?" component={ProjectPost}/>
        
       
        
      
      </div>
    </Router>



 
        
      </div>
    );
  }
}

export default App;
  
// <ProjectList entries = {this.state.entries} OnSelectedPost = {post => this.setState({selectedPost: post})}/>
//<Route strict path="/projects" render = {(...props) => <ProjectPost {...props} selected = {this.state.selectedPost} />}/>
// <ProjectPost selected = {this.state.selectedPost}/>