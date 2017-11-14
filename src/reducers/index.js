import {combineReducers} from 'redux';
import productosReducer from './productosReducer';
import PedidoReducer from "./PedidoReducer";
import ListaReducer from "./ListaReducer";

const rootReducer = combineReducers({
    productos: productosReducer,
    pedidoForm: PedidoReducer,
    lista:ListaReducer
});

export default rootReducer;