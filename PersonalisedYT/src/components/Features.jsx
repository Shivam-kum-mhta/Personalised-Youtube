import React from "react";
import { useState } from "react";

function Features({setluv}){
    
    return(
        
     <div style={{minHeight:"70vh"}}>     
    
     <h2>
        The application includes features such as:
      </h2>
      <h3><ul style={{listStyle:'none'}}>
        <li>Search for videos by keyword</li>
        <li>Watch videos in a responsive grid layout</li>
        <li>View video details such as title, description, and uploader</li>
        <li>Switch between light and dark themes</li>
      </ul>
      </h3>
      <div style={{ position:"absolute", bottom:'20px'}}>  Created by : SHIVAM KUMAR A  on  27 Feb 2024 </div>
      <h2> Privacy </h2>
     <h2> No Adds</h2>
     <h2> No bing Watching Loop</h2>
     <h2> Goal Oriented</h2>
      </div>
    )
}

export default Features;