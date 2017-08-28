import React from 'react';
// import 'bulma/css/bulma.css'


export const ProjectItem = (props) => {

    const post = props.posts.fields;
    const title = post.title;
    // const slug_path = post.slug;
    
    // const content = post.content;
    const published = post.publishedDate;

    const author = post.author.fields;
    const fullname = author.fullName;
    const avitar = author.avitar.fields.file.url;
    const f_img = post.featuredImg.fields.file.url;

    //funtion call
    const selected_post = props.OnSelectedPost;

    // proptypes

    return (
            <div className ="column is-4">

           
            <div className ="card">
            <div className ="card-image">
                <figure className ="image is-1by1">
                <a onClick = {selected => selected_post(post)}>
                    <img src={f_img} alt="featured_img"/>
                </a>
                </figure>
            </div>
            <div className ="card-content">
                <div className ="media">
                <div className ="media-left">
                
                    <figure className ="image is-48x48">
                    
                        <img src={avitar} alt="avitar"/>
                    
                    
                    </figure>
                  
                </div>
                <div className ="media-content">
                    <p className ="title is-4">{title}</p>
                    <p className ="subtitle is-6">{fullname}</p>
                </div>
                </div>
                <hr/>
                <div className ="content">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Phasellus nec iaculis mauris.
                
                <br/>
                <small><i>{published}</i></small> 
                </div>
            </div>
            </div>

            </div>




    );
}