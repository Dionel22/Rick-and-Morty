import style from "./Nav.module.css"
import SearchBar from "../SearchBar/SearchBar"
import { Link } from "react-router-dom"

export default function Nav(props) {
    return(
        <div  className={style.nav} >
                     
           <div className={style.contenedor}>
   <Link to="/favorites" ><button className={style.favorito}>MIS FAVIRITOS</button></Link>
            <Link to="/home" ><button className={style.home}>Home</button></Link>
            <SearchBar onSearch={props.onSearch}/>
           </div> 
        </div>
    )
}

// className={locasion.pathname === "/" ? style.desaparece: null}