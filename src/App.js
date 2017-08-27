import React, { Component } from 'react';
import './App.css';
import { ProjectList } from './components/projects'
import { Navigation } from './components/pages'
import 'bulma/css/bulma.css'



class App extends Component {

  constructor(props){
    super(props)


    this.state = {
      something :[]
    }
  }  

  render() {

    return (
      <div className="container is-fluid">
      
        <Navigation/>
        <ProjectList/>
      </div>
    );
  }
}

export default App;
