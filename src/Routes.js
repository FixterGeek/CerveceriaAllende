import React from 'react';
import {Root} from 'native-base';
import {Router, Scene} from 'react-native-router-flux';
import Login from './components/login/Login';
import Log from './components/login/Log';
import Recover from './components/login/Recover';
import Principal from './components/principal/Principal';
import Detalle from './components/detalle/Detalle';
import Detalle2 from './components/detalle/Detalle2';
import ProductosList from "./components/principal/ProductosList";

const Routes = () => {
  return (
    <Root>
    <Router>
      <Scene key="root">
        <Scene key="Log" header={null} component={Log}/>
        <Scene key="Login" header={null} component={Login}/>
        <Scene key="Recover" header={null} component={Recover}/>
        <Scene key="Principal" header={null} component={Principal} initial/>
        <Scene key="ProductosList" header={null} component={ProductosList} />
        <Scene key="Detalle" header={null} component={Detalle}/>
        <Scene key="Detalle2" header={null} component={Detalle2}/>
      </Scene>
    </Router>
  </Root>
  );
}
export default Routes;
