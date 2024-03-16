import React, { useEffect, useRef, useState } from "react";
import techlogo from "./svg/techlogo.png";
import dsalogo from "./svg/dsalogo.png";
import placementlogo from "./svg/placementlogo.png";

import space from "./svg/spacelogo.png";
import gym from "./svg/gymlog.jpg";
import energetic from "./svg/energeticmusiclogo.png";
import programlogo from "./svg/programlogo.png";


 const str=[]
const Home = ({  Histor, setHistor, searchInput, setSearchInput, showluv, hamberger }) => {
  const [appi, setAppi] = useState([]);

  
  const Access = async (url) => {
     let data = await fetch(url);
    let pure = await data.json();
    console.log(pure);
     setAppi(pure.items);

  }





  useEffect(() => {
    const url= `https://youtube.googleapis.com/youtube/v3/search?part=snippet&q=${searchInput}&key=AIzaSyDpho2TEPKy7HQWV56KF8flGC3kztIrKwM&maxResults=27`;
    Access(url);
  }, [searchInput]);


  const saveVideo=(str, item)=>{
    console.log(item)
    if(!str.includes(item))
 str.push(item);
console.log(str, "s ")
setHistor(str)
console.log(Histor)
  }



  return (
    <div
      className="container"
      style={{
        display: "flex",
        position: "fixed",
        minHeight: "100vh",
        color: "white",
      }}
    >
      {hamberger && (
        <>
          <div
            className="sidenav"
            id="khalnayak"
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "8px",
              marginTop: "15px",
              zIndex: "1",
            }}
          >
            <button
              className="categories"
              onClick={() => {
                setSearchInput("Sigma Webdev Next.js code with h"),
                  showluv(`RESULTS for "Sigma Webdev latest"`);
              }}
            >
              {" "}
              <img
                src={dsalogo}
                height={30}
                width={30}
                borderRadius={5}
                alt="tech"
              />{" "}
              <h6> Sigma Webdev latest</h6>
            </button>
            <button
              className="categories"
              onClick={() => {
                setSearchInput("Energetic Music"),
                  showluv(`RESULTS for "Energetic Music"`);
              }}
            >
              <img
                src={energetic}
                height={30}
                width={30}
                borderRadius={5}
                alt="tech"
              />
              <h6>Energetic Music</h6>
            </button>
            <button
              className="categories"
              onClick={() => {
                setSearchInput("GYM Workout"),
                  showluv(`RESULTS for "GYM workout"`);
              }}
            >
              <img
                src={gym}
                height={30}
                width={30}
                borderRadius={5}
                alt="tech"
              />{" "}
              <h6> GYM Workout</h6>
            </button>
            <button
              className="categories"
              onClick={() => {
                setSearchInput("Technology updates"),
                  showluv(`RESULTS for "Technology updates"`);
              }}
            >
              <img
                src={techlogo}
                height={30}
                width={30}
                borderRadius={5}
                alt="tech"
              />
              <h6> Technology Updates</h6>
            </button>
            <button
              className="categories"
              onClick={() => {
                setSearchInput("Space Exploration"),
                  showluv(`RESULTS for "Space Exploration"`);
              }}
            >
              <img
                src={space}
                height={30}
                width={30}
                borderRadius={5}
                alt="tech"
              />
              <h6>Space Exploration</h6>
            </button>
            <button
              className="categories"
              onClick={() => {
                setSearchInput("Programming shorts"),
                  showluv(`RESULTS for "Programming shorts"`);
              }}
            >
              {" "}
              <img
                src={programlogo}
                height={30}
                width={25}
                borderRadius={5}
                alt="tech"
              />
              <h6>Programming shorts</h6>
            </button>
            <button
              className="categories"
              onClick={() => {
                setSearchInput("Placements"),
                  showluv(`RESULTS for "Placements"`);
              }}
            >
              <img
                src={placementlogo}
                height={30}
                width={30}
                borderRadius={5}
                alt="tech"
              />
              <h6> Placements</h6>
            </button>
          </div>
          <div className="seperator"> </div>
        </>
      )}
      <ul>

</ul>
      <div
        className="disp"
        style={{
          marginTop: "10px",
          display: "grid",

          gap: "20px",
          overflow: "auto",
          height: "95vh",
          lineThickness: "2px",
          lineColor: "red",
        }}
      >
        {appi.map((item) => {
          return (
            <div  key={item.id.videoId}>
              <span  >
                <div 
                  style={{ borderRadius: "10px", border: "1px solid purple " }}  
                  dangerouslySetInnerHTML={{
                    __html: `<iframe  id="ytplayer" type="text/html" width="100%" height="225" src="https://www.youtube.com/embed/${item.id.videoId}?enablejsapi=1&controls=0" frameborder="0" modestbranding: "1" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>`,
                  }}
                />
              </span>
     
              <div>
                <h5 key={item.id.channelId}>
                  <div>
                    <strong 
                      className="tittime"
                      style={{
                        backgroundImage:
                          " linear-gradient(to right,  rgb(0, 68, 255,0.4),rgb(255, 0, 242,0.2))",
                        border: "1px solid white",
                        borderRadius: "8px",
                        padding: "0px,3px",
                        marginRight: "3px",
                      }}
                    >
                      {item.snippet.channelTitle}{" "}
                    </strong>{" "}
                    <strong
                      className="tittime"
                      style={{ borderRadius: "8px", border: "1px solid white" }}
                    >
                      {item.snippet.publishTime.slice(0, 10)}{" "}
                   <span ><svg  onClick={()=>{ console.log("trigering");saveVideo(str,item.id.videoId); showluv('Video saved') }} cursor="pointer" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M16 1H4C2.89543 1 2.00009 1.89543 2.00009 3V21C2.00009 22.1046 2.89543 23 4 23H16C17.1046 23 18 22.1046 18 21V3C18 1.89543 17.1046 1 16 1ZM16 17H8V13H16V17Z" fill="currentColor"/>
  <path d="M14 3L10 7L6 3L5 4L10 8L15 4L16 3M15 10H13V12H15V10M11 10H9V12H11V10M7 10H5V12H7V10Z" fill="currentColor"/>
  <title>Save video</title></svg></span>
                    </strong>
                  </div >
                  {item.snippet.title}
                </h5>
              </div>
            </div>
          );
        })}
      </div>

    </div>
  );
};

export default Home;
