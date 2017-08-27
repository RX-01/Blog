import React, { Component } from 'react';
import client from '../ult/API'
// import {createClient} from 'contentful'
// import 'bulma/css/bulma.css'


export class ProjectPost extends Component {
    
      constructor(props){
        super(props)
    
        this.state = {
          post: []
        }
    }
    
      
    componentDidMount(){  
        const params = this.props

        if(params && params.slug){
            client.getEntries({'content_type': 'blogPost', 'fields.slug': params }).then(res => {
                // console.log(res.items)
                this.setState({post: res.items})
            })
        }

    }
      
    
      render() {
        const post = this.state.post.fields;
        const title = post.title;
        const content = post.content;

        if(!this.state.post){
            return (
                <h1>Not Found </h1>
            );
        }

        return (
            <div className = 'section'>
                <div className = 'content is-medium'>

                <h1 class="title">{title}</h1>
                <hr/>
                <article class="media">

                <div class="media-content">
                    <div class="content">
                        <p>{content} </p>
                    </div>
                </div>

                </article>

                </div>
            </div>

              
        );
      }

    }