import style from "./Detail.module.css"
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
//import { Link } from "react-router-dom";

function Detail() {
  const {detailId} = useParams()
  const [character, setCharacter] = useState({})
 
 useEffect(() => {
    fetch(`https://rickandmortyapi.com/api/character/${detailId}`)
      .then((response) => response.json())
      .then((char) => {
        if (char.name) {
          setCharacter(char);
        } else {
          window.alert("No hay personajes con ese ID");
        }
      })
      .catch((err) => {
        window.alert("No hay personajes con ese ID");
      });
    return setCharacter({});
    }, []);

    return(
        
        <div className={style.conten}>
         <img src={character.image} alt={character.name}/>
          <h2 className={style.name}>Nombre: {character.name}</h2>
          <h2>Status: {character.status}</h2>
          <h2>Genero: {character.gender}</h2>
          <h2>Especie: {character.species}</h2>
        </div>
    )
}
export default Detail;

/*
{id: 1, name: 'Rick Sanchez', status: 'Alive', species: 'Human', type: '', …}
created
: 
"2017-11-04T18:48:46.250Z"
episode
: 
(51) ['https://rickandmortyapi.com/api/episode/1', 'https://rickandmortyapi.com/api/episode/2', 'https://rickandmortyapi.com/api/episode/3', 'https://rickandmortyapi.com/api/episode/4', 'https://rickandmortyapi.com/api/episode/5', 'https://rickandmortyapi.com/api/episode/6', 'https://rickandmortyapi.com/api/episode/7', 'https://rickandmortyapi.com/api/episode/8', 'https://rickandmortyapi.com/api/episode/9', 'https://rickandmortyapi.com/api/episode/10', 'https://rickandmortyapi.com/api/episode/11', 'https://rickandmortyapi.com/api/episode/12', 'https://rickandmortyapi.com/api/episode/13', 'https://rickandmortyapi.com/api/episode/14', 'https://rickandmortyapi.com/api/episode/15', 'https://rickandmortyapi.com/api/episode/16', 'https://rickandmortyapi.com/api/episode/17', 'https://rickandmortyapi.com/api/episode/18', 'https://rickandmortyapi.com/api/episode/19', 'https://rickandmortyapi.com/api/episode/20', 'https://rickandmortyapi.com/api/episode/21', 'https://rickandmortyapi.com/api/episode/22', 'https://rickandmortyapi.com/api/episode/23', 'https://rickandmortyapi.com/api/episode/24', 'https://rickandmortyapi.com/api/episode/25', 'https://rickandmortyapi.com/api/episode/26', 'https://rickandmortyapi.com/api/episode/27', 'https://rickandmortyapi.com/api/episode/28', 'https://rickandmortyapi.com/api/episode/29', 'https://rickandmortyapi.com/api/episode/30', 'https://rickandmortyapi.com/api/episode/31', 'https://rickandmortyapi.com/api/episode/32', 'https://rickandmortyapi.com/api/episode/33', 'https://rickandmortyapi.com/api/episode/34', 'https://rickandmortyapi.com/api/episode/35', 'https://rickandmortyapi.com/api/episode/36', 'https://rickandmortyapi.com/api/episode/37', 'https://rickandmortyapi.com/api/episode/38', 'https://rickandmortyapi.com/api/episode/39', 'https://rickandmortyapi.com/api/episode/40', 'https://rickandmortyapi.com/api/episode/41', 'https://rickandmortyapi.com/api/episode/42', 'https://rickandmortyapi.com/api/episode/43', 'https://rickandmortyapi.com/api/episode/44', 'https://rickandmortyapi.com/api/episode/45', 'https://rickandmortyapi.com/api/episode/46', 'https://rickandmortyapi.com/api/episode/47', 'https://rickandmortyapi.com/api/episode/48', 'https://rickandmortyapi.com/api/episode/49', 'https://rickandmortyapi.com/api/episode/50', 'https://rickandmortyapi.com/api/episode/51']
gender
: 
"Male"
id
: 
1
image
: 
"https://rickandmortyapi.com/api/character/avatar/1.jpeg"
location
: 
{name: 'Citadel of Ricks', url: 'https://rickandmortyapi.com/api/location/3'}
name
: 
"Rick Sanchez"
origin
: 
name
: 
"Earth (C-137)"
url
: 
"https://rickandmortyapi.com/api/location/1"
[[Prototype]]
: 
Object
species
: 
"Human"
status
: 
"Alive"
type
: 
""
url
: 
"https://rickandmortyapi.com/api/character/1"
*/