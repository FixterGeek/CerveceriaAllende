import {combineReducers} from 'redux';
import productosReducer from './productosReducer';
import PedidoReducer from "./PedidoReducer";

const rootReducer = combineReducers({
    productos: productosReducer,
    pedidoForm: PedidoReducer
});

export default rootReducer;