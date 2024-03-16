import React, { useEffect, useState } from 'react';

function History({ Histor}) {

useEffect(() => {

  } ,[Histor])



return(<div className='disp'  style={{
  marginTop: "10px",
  display: "grid",

  gap: "20px",
  overflow: "auto",
  height: "95vh",
  lineThickness: "2px",
  lineColor: "red",
}}>
  {Histor && Histor.map((item) => {
    return (
          <div onClick={()=>{ console.log("trigering"); }}
            style={{ borderRadius: "10px" }}
      
             >
              <div
            dangerouslySetInnerHTML={{
              __html: `<iframe  id="ytplayer" type="text/html" width="100%" height="225" src="https://www.youtube.com/embed/${item}?enablejsapi=1&controls=0" frameborder="0" modestbranding: "1" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>`,
            }} />
          </div>)
         
})}

</div>)

};
      
export default History;