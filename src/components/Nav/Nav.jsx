import style from "./Nav.module.css"
import SearchBar from "../SearchBar/SearchBar"
import { Link } from "react-router-dom"

export default function Nav(props) {
    return(
        <div  className={style.nav} >
                     
           <div className={style.contenedor}>
            
            <Link to="/favorites" className={style.link} >
                <button className={style.favorito}>MIS FAVIRITOS</button>
            </Link>
            <Link to="/home" className={style.link}>
                <button className={style.home}>Home</button>
            </Link>

            <Link to="/about" className={style.link}>
            <button className={style.about}>About</button>
            </Link>

            <SearchBar onSearch={props.onSearch}/>
           </div> 
        </div>
    )
}

// className={locasion.pathname === "/" ? style.desaparece: null}