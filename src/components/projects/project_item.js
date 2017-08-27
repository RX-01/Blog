import React from 'react';
// import 'bulma/css/bulma.css'


export const ProjectItem = (props) => {

    const post = props.posts.fields;
    const title = post.title;
    // const content = post.content;
    const published = post.publishedDate;

    const author = post.author.fields;
    const fullname = author.fullName;
    const avitar = author.avitar.fields.file.url;
    const f_img = post.featuredImg.fields.file.url;

    // proptypes

    return (
            <div className ="column">

           
            <div className ="card">
            <div className ="card-image">
                <figure className ="image is-1by1">
                <img src={f_img} alt="featured_img"/>
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