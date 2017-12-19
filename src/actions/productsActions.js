import firebase from '../components/firebase/Firebase'
import {PRODUCT_FETCH_SUCCESS} from './types';

export const productFetch = () => {
    return(dispatch) => {
        firebase.database().ref(`/productos`).on('value', snapshot => {
            dispatch({type: PRODUCT_FETCH_SUCCESS, payload: snapshot.val()})
        });
    }
};