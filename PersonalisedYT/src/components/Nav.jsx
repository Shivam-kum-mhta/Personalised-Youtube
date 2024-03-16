import React from "react"
import { useState, useRef } from "react"
import { NavLink, redirect } from "react-router-dom"
import './svg/hamberger.svg'
import SearchBar from "./Searchbar"
function Nav ({searchInput, showHamberger ,showmode , handleSearchChange}){
 const btn1 =useRef('.red')
 const btn2 =useRef(null)
 const btn3 =useRef(null)
 
    
   function handlevent3(){
    btn3.current.style.backgroundColor="red"
    btn2.current.style.backgroundColor=null
    btn1.current.style.backgroundColor=null
   }
   function handlevent2(){
    btn3.current.style.backgroundColor=null
    btn2.current.style.backgroundColor="red"
    btn1.current.style.backgroundColor=null
   }
   function handlevent1(){
    btn3.current.style.backgroundColor=null
    btn2.current.style.backgroundColor=null
    btn1.current.style.backgroundColor="red"
   }

    return(
        <div className="navbody" >
        <nav style={{borderRadius:"8px" ,display:"flex", zIndex:"1",justifyContent:"center", alignItems:"center", gap:"10px", position:"sticky", top:"20px"}}>
        <svg className="hamberger" style={{ cursor:'pointer'}}onClick={showHamberger} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="35" height="48" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <line x1="3" y1="12" x2="21" y2="12"></line>
        <line x1="3" y1="6" x2="21" y2="6"></line>
        <line x1="3" y1="18" x2="21" y2="18"></line>
    </svg>
        <div className="logo" style={{ padding: "7px", textDecorationStyle: "solid", backgroundImage: "linear-gradient(to right,rgb(255, 0, 242),  rgb(0, 68, 255))", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent",}}><h2>Personalised YT</h2></div>
    <NavLink to="/"><button className="link" style={{backgroundColor:'red'}} ref={btn1} onClick={handlevent1}>Home</button></NavLink>
    <NavLink to="/About"><button className="link" ref={btn2} onClick={handlevent2}>About</button></NavLink>
    <NavLink to="/Features"><button className="link" ref={btn3} onClick={handlevent3} >Features</button></NavLink> 


    <SearchBar searchInput={searchInput} handleSearchChange={handleSearchChange} />
       <div className="mode" onClick={showmode} style={{ right:'40px', cursor:'pointer',  color:'green'}}>Change Mode</div></nav>      
     
        <div className="seperator1" > </div>
        </div>
    )
}

export default Nav