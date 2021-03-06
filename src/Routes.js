import React from 'react';
import {Root} from 'native-base';
import {Router, Scene} from 'react-native-router-flux';
import Login from './components/login/Login';
import Log from './components/login/Log';
import Recover from './components/login/Recover';
import Principal from './components/principal/Principal';
import ProductosList from './components/principal/ProductosList';
import Orden from './components/orden/Orden';
import Inventario from './components/principal/Inventario';
import Carrito from "./components/principal/Carrito";
import {Detalle} from './components/principal/Detalle';
import Qrcode from './components/principal/Qrcode';

const Routes = () => {
  return (
    <Root>
    <Router>
      <Scene key="root">
        <Scene key="Log" header={null} component={Log} initial />
        <Scene key="Login" header={null} component={Login}/>
        <Scene key="Recover" header={null} component={Recover}/>
        <Scene key="Principal" header={null} component={Principal} />
        <Scene key="ProductosList" header={null} component={ProductosList} />
        <Scene key="Orden" header={null} component={Orden}/>
        <Scene key="Inventario" header={null} component={Inventario}/>
        <Scene key="Carrito" header={null} component={Carrito}/>
        <Scene key="Detalle" header={null} component={Detalle}/>
        <Scene key="Qrcode" header={null} component={Qrcode}/>
      </Scene>
    </Router>
  </Root>
  );
}
export default Routes;
