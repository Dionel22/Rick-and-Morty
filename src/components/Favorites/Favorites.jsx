import { connect, useDispatch } from "react-redux"
import style from "./Favorites.module.css"
import { filterCards, orderCards } from "../../redux/actions"
/*FILTER/ORDER COMPONENT
Dirígete al archivo en el que se encuentra tu componente Favorites. Allí deberás:

Dentro de un div, crea dos elementos de HTML selector.

Dentro del primero le pasaremos dos opciones: Ascendente y Descendente. Asegúrate de pasarles estos valores en sus atributos value. Por ejemplo:
<option value="Ascendente">Ascendente</option>
Dentro del segundo pásales las opciones: Male, Female, Genderless y unknown. Asegúrate de pasarles estos valores en sus atributos value. Por ejemplo:
2-Cada vez que se seleccione una opción de ordenamiento, despacha la action "orderCards". Recuerda pasarle por parámetro el e.target.value del input. Utiliza el hook useDispatch.

Cada vez que se seleccione una opción de filtrado, despacha la action "filterCards". Recuerda pasarle por parámetro el e.target.value del input. Utiliza el hook useDispatch. */
 function Favorites(props) {
    const dispatch = useDispatch()

    const hendleClick = (event)=>{
        const {name, value} = event.target;
        switch (name) {
            case "orden":
                return dispatch(orderCards(value))
        
            case "filter":
                return dispatch(filterCards(value))
        }
    }

    return(
        <div >
            <div className={style.div}>
                <select className={style.orden} name="orden" onClick={hendleClick}>
                <option value="Ascendente">Ascendente</option>
                <option value="Descendente">Descendiente</option>
                </select>
                <select className={style.orden} name="filter" onClick={hendleClick}>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                    <option value="Genderless">Genderless</option>
                    <option value="unknown">unknown</option>
                </select>
            </div>
      <div className={style.divpadre}>
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
        </div>
    )
}

export function mapStateToProps(state) {
    return{
        myFavorites: state.myFavorites
    }
}

export default connect(mapStateToProps, null)(Favorites)