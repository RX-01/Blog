import React from 'react';


export const Home = () => {


    return (
      <div className = 'section' >  
        <div className="tile is-ancestor">
        <div className="tile is-4 is-vertical is-parent">
          <div className="tile is-child box">
            <p className="title">One</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ornare magna eros, eu pellentesque tortor vestibulum ut. Maecenas non massa sem. Etiam finibus odio quis feugiat facilisis.</p>
          </div>
          <div className="tile is-child box">
            <p className="title">Two</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ornare magna eros, eu pellentesque tortor vestibulum ut. Maecenas non massa sem. Etiam finibus odio quis feugiat facilisis.</p>
          </div>
        </div>
        <div className="tile is-parent">
          <div className="tile is-child box">

          <div className = 'level'>
              <p className ="level-item has-text-centered title"> PROJECTS </p>
          </div>

           
          </div>
        </div>
      </div>
      </div>

    );
}
