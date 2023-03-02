import style from "./Card.module.css"
import { Link } from "react-router-dom";
import { addFavorite, deleteFavorite } from "../../redux/actions";
import { connect} from "react-redux";
import { useState, useEffect } from "react";


function Card(props) {
  
   const [isFav, setIsFav] = useState(false);
   
 useEffect(() => {
      props.myFavorites.forEach((fav) => {
         if (fav.id === props.id) {
            setIsFav(true);
         }
      });
   }, [props.myFavorites]);


   const handleFavorite = ()=>{
     if (isFav === true) {
      setIsFav(false)
      props.deleteFavorite(props.id)
     }else{
      setIsFav(true)
      props.addFavorite(props)
     }
   }


    return (
       <div className={style.conten}>
         {isFav ? (
          <button onClick={handleFavorite}>❤️</button>
         ) : (
          <button onClick={handleFavorite}>🤍</button>
         )
         }

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
 
export function mapStateToProps(state) {
   return{
      myFavorites: state.myFavorites
   }
}

export function mapDispatchToProps (dispatch){
   return{
      addFavorite: (props) =>{ dispatch(addFavorite(props))},
      deleteFavorite: (id) =>{ dispatch(deleteFavorite(id))}
   }
 }

 export default connect(mapStateToProps, mapDispatchToProps)(Card)