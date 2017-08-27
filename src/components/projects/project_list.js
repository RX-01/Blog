import React, { Component } from 'react';
import { ProjectItem } from './project_item'
// import client from '../ult/API'
// import {createClient} from 'contentful'
// import 'bulma/css/bulma.css'


  // export class ProjectList extends Component {
        
    //     //   constructor(props){
    //     //     super(props)
        
    //     //     this.state = {
    //     //       entries: []
    //     //     }
    //     // }
        
          
    //     // componentDidMount(){  
    //     //   client.getEntries({'content_type': 'blogPost'}).then(res => {
    //     //     // console.log(res.items)
    //     //     this.setState({entries: res.items})
    //     //   })
    //     // }
          
        
    //       render() {
    //         // const posts = [];
    //           // GENRATE RANDOM POST
    //           // for (let index = 0; index < 10; index++) {
    //           //       posts.push(<ProjectItem id = {index} key = {index}/> )
                
    //           // }
    //         const Posts = this.state.entries.map((posts,index) => <ProjectItem id = {index} key = {index} posts = {posts}/>)

    //         return (
    //           <div className = 'section columns is-multiline' >  {Posts} </div>
    //         );
    //       }
    //     }
        
        // export default ProjectList;




  export const ProjectList = (props) => {
    
      const Posts = props.entries.map((posts,index) => <ProjectItem id = {index} key = {index} posts = {posts}  OnPost = {props.OnSelectedPost}/>)
      return (
                <div className = 'section columns is-multiline' >  {Posts} </div>
            );     
      }
    
      