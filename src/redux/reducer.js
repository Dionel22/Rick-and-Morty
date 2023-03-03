import { FAVORITO_CARD, ELIMINAR_CARD, FILTER, ORDER } from "./actions"

const  initialState = {
    myFavorites: [],
    allCharacters: []
}

/*Crea un caso con el nombre "ORDER". Haz una copia de tu estado "allCharacters" mediante destructuring. Utiliza el método sort de arreglos para ordenar tus personajes en base al número de su ID. Si el payload es "Ascendiente", entonces de menor a mayor. Si el payload es "Descendiente, entonces de mayor a menor. Retorna tu estado global, pero que la propiedad myFavorites sea igual al ordenamiento que haz hecho. */

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case FAVORITO_CARD:
         // console.log("aña",state)
      return{
        ...state,
         myFavorites: [...state.allCharacters, action.payload],
         allCharacters: [...state.allCharacters, action.payload]
       }
       
       case ELIMINAR_CARD:{
        console.log("Elin", action.payload)
        const eliminar = state.myFavorites.filter((e)=> e.id !== action.payload)
        return{
          ...state,
          myFavorites: eliminar
        }
       }

       case FILTER:
       const filterCopy = [...state.allCharacters]
       const filter = filterCopy.filter((card)=> card.gender === action.payload)
       return{
        ...state,
        myFavorites: filter 
       }
      

      case ORDER:{
      const orderCopy =  [...state.allCharacters]
      const order = orderCopy.sort((a, b)=>{
        if (a.id < b.id) {
          if (action.payload === "Ascendente") {
            return -1
          }
           return 1
        }
        if (a.id > b.id) {
          if (action.payload === "Descendente") {
            return -1
          }
          return 1
          
        }
        })
        return{
          ...state,
          myFavorites: order
        }
      }

        default:
        return {...state};
    }
}


export default reducer;