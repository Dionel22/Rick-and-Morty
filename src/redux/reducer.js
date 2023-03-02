import { FAVORITO_CARD, ELIMINAR_CARD } from "./actions"

const  initialState = {
    myFavorites: [],
    allCharacters: []
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case FAVORITO_CARD:
         // console.log("aña",state)
      return{
        ...state,
        myFavorites: [...state.myFavorites, action.payload]
       }
       
       case ELIMINAR_CARD:{
        console.log("Elin", action.payload)
        const eliminar = state.myFavorites.filter((e)=> e.id !== action.payload)
        return{
          ...state,
          myFavorites: eliminar
        }
        
       }
        default:
        return {...state};
    }
}


export default reducer;