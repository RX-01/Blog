import React, { Component } from 'react';
import { ProjectItem } from './project_item'
// import { ProjectPost } from './project_post'
import client from '../ult/API'
import { Redirect } from 'react-router-dom'

// import {createClient} from 'contentful'
// import 'bulma/css/bulma.css'


  export class ProjectList extends Component {
        
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

        shouldComponentUpdate(nextProps, nextState) {
            console.log(nextState);
            // console.log(this.props, this.state);
            if(this.state.selectedPost){
                console.log(nextState.selectedPost);

               
            }
        
            return true;  
          }


          
        
          render() {
            // const posts = [];
            //   GENRATE RANDOM POST
            //   for (let index = 0; index < 10; index++) {
            //         posts.push(<ProjectItem id = {index} key = {index}/> )
                
            //   }
            const Posts = this.state.entries.map((posts,index) => <ProjectItem 
            id = {index} key = {index} 
            posts = {posts} 
            OnSelectedPost = {post => this.setState({selectedPost: post})}/>)


            if (this.state.selectedPost) {
                return (
                //   <Redirect to="/post"/>
                <Redirect push to={{
                    pathname: `/project/${this.state.selectedPost.slug}`,
                    the_post: this.state.selectedPost,
                  }}/>
                ) 
              } 
          

            return (
              <div className = 'section columns is-multiline' >  {Posts} </div>
            );
          }
        }
        
        export default ProjectList;




//   export const ProjectList = (props) => {
    
//       const Posts = props.entries.map((posts,index) => <ProjectItem id = {index} key = {index} posts = {posts}  OnPost = {props.OnSelectedPost}/>)
//       return (
//                 <div className = 'section columns is-multiline' >  {Posts} </div>
//             );     
//       }
    
      