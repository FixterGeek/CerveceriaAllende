import {PEDIDO_UPDATE, PEDIDO_CREATE} from './types';
import firebase, {firebaseAuth} from '../components/firebase/Firebase';
import {Actions} from 'react-native-router-flux';

export const pedidoUpdate = ({prop, value}) => {
  return {
    type: PEDIDO_UPDATE,
    payload: {
      prop,
      value
    }
  };
};

export const pedidoCreate = ({
  cliente,
  crojai,
  crojas,
  crojac,
  camarillai,
  camarillas,
  camarillac,
  cnaranjai,
  cnaranjas,
  cnaranjac,
  cverdei,
  cverdes,
  cverdec
}) => {
  /*const {currentUser} = firebaseAuth;
    firebase.database().ref(`/users/${currentUser.uid}/pedidos`)*/

  return(dispatch) => {
    firebase.database().ref(`/pedidosPrueba`).push({
      cliente,
      crojai,
      crojas,
      crojac,
      camarillai,
      camarillas,
      camarillac,
      cnaranjai,
      cnaranjas,
      cnaranjac,
      cverdei,
      cverdes,
      cverdec
    }).then(() => {
      dispatch({type: PEDIDO_CREATE});
      Actions.Principal()
    });
  };
};
