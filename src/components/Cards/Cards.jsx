import Card from '../Card/Card';
import style from "./Cards.module.css"

export default function Cards(props) {
   const { characters } = props;
   return (
        <div className={style.div}>
          {characters.map((e, i) =>{ 
          //console.log(e)
          return (
            
           <Card 
           key={i}
           id={e.id}
           name={e.name}
           gender={e.gender}
           species={e.species}
           image={e.image}
           onClose={() => props.onClose(e.id)}
           />)})}
        </div>
   );
}
