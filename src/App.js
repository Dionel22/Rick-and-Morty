import './App.css'
import Nav from "./components/Nav/Nav"
import Cards from './components/Cards/Cards.jsx'
import About from "./components/About/About"
import Detail from "./components/Detail/Detail"
import Form from  "./components/Form/Form"
import Favorites from "./components/Favorites/Favorites"
import { useState, useEffect } from 'react'
import { Routes, Route ,useNavigate , useLocation} from "react-router-dom"

function App () {
//API
  const URL_BASE = "https://be-a-rym.up.railway.app/api";
  const API_KEY = "8891a0ac4317.ac7bf70551924bcf56ab"
//-----------------------------

  const [characters, setCharacters] = useState([]);
  const navigate = useNavigate();
  const location = useLocation()
  const [access, setAccess] = useState(false)
  const username = "dion1@Gamepad.com";
  const password =  "123456";
  
  function login(userData) {
     if (userData.password === password && userData.username === username) {
        setAccess(true);
        navigate('/home');
     }
  }

  useEffect(() => {
    !access && navigate('/');
  }, [access]);


  function onSearch(character) {
    fetch(`${URL_BASE}/character/${character}?key=${API_KEY}`)
       .then((response) => response.json())
       .then((data) => {
          if (data.name) {
             setCharacters((oldChars) => [...oldChars, data]);
          } else {
             window.alert('No hay personajes con ese ID');
          }
       });
 }

 const onClose = id =>{setCharacters(characters.filter((card)=> card.id !== id))}

  return (
    <div className='App' style={{ padding: '25px' }}>    
        <Routes>
          <Route exact path='/' element={<Form login={login}/>} />
          <Route path='/home' element={<Cards characters={characters} onClose={onClose}/> }/>
          <Route path='/about' element={<About />} />
          <Route path='/detail/:detailId' element={<Detail />} />
          <Route path='/favorites' element={<Favorites />} />
      </Routes>
         {location.pathname !== "/" && <Nav onSearch={onSearch}/>}
    </div>
  )
}

export default App
