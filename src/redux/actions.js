export const FAVORITO_CARD= "FAVORITO";
export const ELIMINAR_CARD= "ELIMINAR";
export const FILTER = "FILTER";
export const ORDER = "ORDER";

//{type:FAVORITOCARD, payload:{recibe los datos de la cartas}}
export const addFavorite = (card) => {
   return {
    type: FAVORITO_CARD,
    payload: card
  }
}
//{type:ELIMINAR_CARD, payload:{recibe el id de las cartas}}
export const deleteFavorite = (id) => {
  return {
    type: ELIMINAR_CARD,
    payload: id
  }
}
//FILTRA EL GENERO
export const filterCards = (status) => {
  return{
    type: FILTER,
    payload: status
  }
}
//ORDENA
export const orderCards = (id) =>{
  return{
    type: ORDER,
    payload: id
  }
}