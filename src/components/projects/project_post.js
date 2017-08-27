import React, { Component } from 'react';
// import client from '../ult/API'
// import {createClient} from 'contentful'
// import 'bulma/css/bulma.css'


export class ProjectPost extends Component {
    
      constructor(props){
        super(props)
    
        this.state = {
          post: {}
        }

    }
    
      
    // componentDidMount(){  
    //     const post = this.props.selected
    // }
      
    
      render() {
     

        if(!this.props.selected){
            return (
                <h1>Not Found </h1>
            );
        } else {
            // () => this.setState({post: {...this.props.selected}})
            const post = this.props.selected;
            const title = post.title;
            const content = post.content;



            // console.log = (`this is `)
            return (
                <div className = 'section'>
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