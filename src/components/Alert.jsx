import React from "react";
import { useState } from "react";

function Alert({luv}){
   
return(
    <> 
   {luv.type && <div className="dis">{luv.message}</div>}
    </>
)
}
export default Alert;