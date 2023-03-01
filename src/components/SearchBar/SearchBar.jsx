import style from "./SearchBar.module.css"
import { useState } from "react";

export default function SearchBar(props) {
    const [character, setCharacter] = useState("");
     
     const nombre = (event)=>{
      const {value} = event.target
      setCharacter(value)
     }

    return (
       <div className={style.contenedor}>
           <input placeholder=" numero del personaje"  type='search'  onChange={nombre}/>
       <button  onClick={()=>props.onSearch(character)}>Agregar</button> 
       </div>
    );
 }
 