import style from "./Card.module.css"
import { Link } from "react-router-dom";

export default function Card(props) {
   console.log("card", props.onClose)
    return (
       <div className={style.conten}>
         <button className={style.cerrar} onClick={props.onClose}>X</button>
         <img className={style.image} src={props.image} alt="" />
        
         <Link to={`/detail/${props.id}` } className={style.lin} >
          <h2 className={style.name}>{props.name}</h2>
         </Link>
         
          <h2 className={style.species}>{props.species}</h2>
          <h2 className={style.gender}>{props.gender}</h2>        
       </div>
    );
 }
 