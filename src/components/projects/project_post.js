import React, { Component } from 'react';
// import client from '../ult/API'
// import {createClient} from 'contentful'
// import 'bulma/css/bulma.css'
import {  Redirect} from 'react-router-dom'


export class ProjectPost extends Component {
    
      constructor(props){
        super(props)
    
        this.state = {
          post: {}
        }

    }
    
    // componentWillUnmount() {
    //     <Redirect to={{
    //         pathname: '/projects',
    //         past: this.state.selectedPost
    //       }}/>
    // }
  
      
  
    
      render() {

    
         


        if(!this.props.location.the_post){
            return (
                           
                 <Redirect push to="/projects"/> 
               
            );
        } else {
            // () => this.setState({post: {...this.props.selected}})
            const post = this.props.location.the_post;
            const title = post.title;
            const content = post.content;



            // console.log = (`this is `)
            return (
                <div className = 'section'>

                <nav className="breadcrumb has-arrow-separator" aria-label="breadcrumbs">
                <ul>
                  <li><a href="/projects">Projects</a></li>
                
                  <li className="is-active"><a href="/project" aria-current="page">{title}</a></li>
                </ul>
              </nav>

                    <div className = 'content is-medium'>
    
                    <h1 className ="title">{title}</h1>
                    <hr/>
                    <article className ="media">
    
                    <div className ="media-content">
                        <div className ="content">
                            <p>{content}</p>
                        </div>
                    </div>
    
                    </article>
    
                    </div>
                </div>
    
                  
            );
        }

     
      }

    }