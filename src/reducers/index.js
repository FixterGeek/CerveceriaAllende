import {combineReducers} from 'redux';
import productosReducer from './productosReducer';

const rootReducer = combineReducers({
    productos: productosReducer,
});

export default rootReducer;