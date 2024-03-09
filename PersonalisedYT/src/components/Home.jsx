import React, { useEffect, useState } from "react";
import techlogo from "./svg/techlogo.png";

import dsalogo from "./svg/dsalogo.png";
import placementlogo from "./svg/placementlogo.png";

import space from "./svg/spacelogo.png";
import gym from "./svg/gymlog.jpg";
import energetic from "./svg/energeticmusiclogo.png";
import programlogo from "./svg/programlogo.png";
const Home = ({ searchInput, setSearchInput, showluv, hamberger }) => {
  const [appi, setAppi] = useState([]);

  
  const Access = async (url) => {
     let data = await fetch(url);
    let pure = await data.json();
    console.log(pure);
     setAppi(pure.items);
  
  }
  useEffect(() => {
    const url = `https://youtube.googleapis.com/youtube/v3/search?part=snippet&q=${searchInput}&key=AIzaSyDADC03zNWfxmMOaBYO223HiNJ8PRG3pRc&maxResults=27`;
    Access(url);
  }, [searchInput]);

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
            <div key={item.id.videoId}>
              <span>
                <div
                  style={{ borderRadius: "10px", border: "1px solid purple " }}
                  onClick={() => addToHistory(item)} // call the function here}
                  dangerouslySetInnerHTML={{
                    __html: `<iframe id="ytplayer" type="text/html" width="100%" height="225" src="https://www.youtube.com/embed/${item.id.videoId}?enablejsapi=1&controls=0" frameborder="0" modestbranding: "1" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>`,
                  }}
                ></div>
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
                    </strong>
                  </div>
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
