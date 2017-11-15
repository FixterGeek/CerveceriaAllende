import {combineReducers} from 'redux';
import PedidoReducer from './PedidoReducer';
import ListaReducer from './Lista';

const rootReducer = combineReducers({
    pedidoForm: PedidoReducer,
    lista:ListaReducer
});

export default rootReducer;
