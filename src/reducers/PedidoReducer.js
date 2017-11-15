import {PEDIDO_UPDATE, PEDIDO_CREATE} from '../actions/types';

const INITIAL_STATE = {
  cliente: '',
  crojai: '',
  crojas: '',
  crojac: '',
  camarillai: '',
  camarillas: '',
  camarillac: '',
  cnaranjai: '',
  cnaranjas: '',
  cnaranjac: '',
  cverdei: '',
  cverdes: '',
  cverdec: ''
};

export default(state = INITIAL_STATE, action) => {
  switch (action.type) {
    case PEDIDO_UPDATE:
      return {
        ...state,
        [action.payload.prop]: action.payload.value
      };
    case PEDIDO_CREATE:
      return INITIAL_STATE;
    default:
      return state;
  }
}
