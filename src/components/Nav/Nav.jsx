import style from "./Nav.module.css"
import SearchBar from "../SearchBar/SearchBar"

export default function Nav(props) {
    return(
        <div  className={style.nav} >
           <div className={style.contenedor}>
            <SearchBar onSearch={props.onSearch}/>
           </div> 
        </div>
    )
}

// className={locasion.pathname === "/" ? style.desaparece: null}