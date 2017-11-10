import initialState from '../store/initialState';

export default function listaReducer(state = initialState.lista, action) {
  switch (action.type) {
    case "LOAD_LISTA_SUCCESS":
      return action.lista;

    case "ADD_ITEM_LIST":
      return [
        ...state,
        action.item
      ];

    default:
      return state;
  }
}
