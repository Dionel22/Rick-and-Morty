import { connect } from "react-redux"
import style from "./Favorites.module.css"

 function Favorites(props) {
    console.log(props)
    return(
        <div className={style.div}>
        {props.myFavorites.map((e,i)=>{
            return(
                <div key={i} className={style.conten}>
                <button className={style.cerrar} onClick={props.onClose}>X</button>
               < h2 className={style.name}>{e.name}</h2>
               < h2 className={style.species}>{e.species}</h2>
               < h2 className={style.gender}>{e.gender}</h2>
               <img className={style.image} src={e.image} alt={e.name} />
               </div>
                )})} 
        </div>
    )
}

export function mapStateToProps(state) {
    return{
        myFavorites: state.myFavorites
    }
}

export default connect(mapStateToProps, null)(Favorites)