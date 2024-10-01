import { useEffect, useRef, useState } from 'react'
import './App.css'
import Nav from './components/Nav'
import Features from './components/Features'
import Alert from './components/Alert'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import About from './components/About'
import Home from './components/Home'
import History from './components/History'



function App() {


  const [Histor, setHistor]=useState([])
  const [hamberger, setHamberger] = useState(false);
  function showHamberger(){
    if(hamberger==false)
    setHamberger(true)
    else
    setHamberger(false)
  }
  const [luv, setluv]=useState("")
  
  function showluv(message,type){
    setluv({message:message,type:1})
  setTimeout(() => {
    setluv({"" : 0})
  }, 3500);}

  const [searchInput, setSearchInput] = useState('');
  
  const handleSearchChange = (e) => {
    let ser=e.target.value
    setSearchInput(ser);
    setluv({"searching":1})
  };

  function showmode(){
    if(mode==false){
    setMode(true)
    setAntimode(false)}
    else{
      setMode(false)
      setAntimode(true)
    }
  }


  
  const [mode, setMode]=useState(true)
  const [antimode,setAntimode]=useState(false)

  const router= createBrowserRouter([
    {path:"/About" ,
  element: <><Nav showmode={showmode} /><About/></>},
    {path:"/" ,
  element: <><Nav  showHamberger={showHamberger} showluv={showluv} showmode={showmode}  handleSearchChange={handleSearchChange} searchInput={searchInput} />
  <Home Histor={Histor} setHistor={setHistor} hamberger={hamberger} searchInput={searchInput} setSearchInput={setSearchInput}  showluv={showluv} /></>},
 
  {path:"/Features" ,
  element: <><Nav  showmode={showmode} /><Features /></>},
 
  {path:"/Saved" ,
  element: <><Nav  showmode={showmode}   setHistory={setHistor}/><History  Histor={Histor} /></>},
 
  ])

  

 

  useEffect(() => {
    alert("PERSONALISED YOUTUBE INITIATED!")
  }, [])



  return (<>
  { !(mode) &&
  <div style={{backgroundImage: 'linear-gradient(to right, rgb(211, 173, 173),rgba(255, 0, 242, 0.393))', color:'black'}}>
      <Alert luv={luv}/>
      <RouterProvider router={router}/>
    </div>
}
{!antimode &&  <div >
      <Alert luv={luv}/>
      <RouterProvider router={router}/>
    </div>}
    </>
  )
}

export default App
