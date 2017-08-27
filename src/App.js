import React, { Component } from 'react';
import './App.css';
import client from './components/ult/API'
import { ProjectList, ProjectPost } from './components/projects'
import { Navigation } from './components/pages'
import 'bulma/css/bulma.css'



class App extends Component {

  constructor(props){
    super(props)

    this.state = {
      entries: [],
      selectedPost: null
    }
}

  
componentDidMount(){  
  client.getEntries({'content_type': 'blogPost'}).then(res => {
    // console.log(res.items)
    this.setState({entries: res.items})
  })
}

  render() {

    return (
      <div className="container is-fluid">
      
        <Navigation/>
        <ProjectList entries = {this.state.entries} OnSelectedPost = {post => this.setState({selectedPost: post})}/>
        <ProjectPost selected = {this.state.selectedPost}/>
        
      </div>
    );
  }
}

export default App;
