import {combineReducers} from 'redux';

function allProductos(state = [], action) {
    switch (action.type) {
        default:
            return state;
    }
}

const productosReducer = combineReducers({allProductos});

export default productosReducer;