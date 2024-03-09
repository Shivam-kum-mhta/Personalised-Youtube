import React from 'react';

function About() {
  return (
    <div className="container" style={{minHeight:"70vh"}}>
      <p><h2>Personalised YT</h2>
       <h3> A web application that allows you to search for and watch YouTube videos 
        related to programming and technology.</h3> The application uses the YouTube Data API to fetch video search results and display them in a grid layout.
      </p>
     
      <h4>
        The application is built using the following technologies:
      </h4>
      <h3><ul  style={{listStyle:'none'}}>
        <li>React for the user interface</li>
        <li>Redux for state management</li>
        <li>YouTube Data API for video search and playback</li>
        <li>CSS for styling and responsiveness</li>
      </ul>
      </h3>
      <div style={{ position:"absolute", bottom:'20px'}}>  Created by : SHIVAM KUMAR A  on  27 Feb 2024 </div>
     <i class="fa fa-copyright" aria-hidden="true" high> Thank you for using this application! If you have any feedback or suggestions, please let us know.
    
    </i>
    </div>

    
  );
}

export default About;