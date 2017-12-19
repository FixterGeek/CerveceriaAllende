import {combineReducers} from 'redux';
import PedidoReducer from './PedidoReducer';
import ListaReducer from './Lista';
import productsReducer from './productsReducer';
import orderReducer from './orderReducer';

const rootReducer = combineReducers({
    pedidoForm: PedidoReducer,
    lista:ListaReducer,
    product:productsReducer,
    cart : orderReducer
});

export default rootReducer;
