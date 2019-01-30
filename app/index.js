import React, { Component } from "react";
import { StyleSheet, Text , View } from "react-native";

import { Router, Scene } from "react-native-router-flux";

import ScarfetScreen from "./ScarfetScreen";
import GrayScreen from "./GrayScreen";
import BlackScreen from "./BlackScreen";
import MaizeScreen from "./MaizeScreen";

import GlodScreen from "./GlodScreen";
import BlueScreen from "./BlueScreen";

import ModalScreen from './ModalScreen';
import Head from './Head';
import Main from './main';
import { createStore, applyMiddleware } from 'redux';
import { Provider, connect } from 'react-redux';
import axios from 'axios';
import thunk from 'redux-thunk';
import * as reducer from './reducer/reducers';
reducer.reducer
import axiosMiddleware from 'redux-axios-middleware';
const TabIcon = ({ selected, title }) => {
  return <Text style={{ color: selected ? "red" : "black" }}>{title}</Text>;
};


const store = createStore(reducer.reducer,applyMiddleware(thunk));
class App extends Component {
  getNetStatus = (status) =>{
    console.log('netStatus comming from main',status);
    return status;
  }
  render(){

    return (
      <Provider store={store}>
    <Router>
      <Scene key="root">
        <Scene
          key="tabbar"
          renderTitle={Head}
          tab={true}
          >
            <Scene initial key="main" component={(props)=> <Main getNetStatus={this.getNetStatus} {...props} />} hideNavBar={true}  />

            <Scene key="gray" component={GrayScreen} hideNavBar={true} title="Gray" />
            <Scene key="gold" component={GlodScreen} hideNavBar={true} title="Gold"  />

            <Scene key="black" component={BlackScreen} hideNavBar={true} title="Black" />
            <Scene key="blue" component={BlueScreen} hideNavBar={true} title="Blue"  />

            <Scene key="maize" component={MaizeScreen} hideNavBar={true} title="Maize" />
           </Scene>
        <Scene
            key="modal"
            direction="horizontal"
            component={(props)=> <ModalScreen getNetStatus={this.getNetStatus} {...props} />}
            renderTitle={Head}
             headerBackTitle={null}
            // hideNavBar
            />
      </Scene>
    </Router>
      </Provider>
  );
}
}
export default App;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF"
  },
  welcome: {
    fontSize: 20,
    textAlign: "center",
    margin: 10
  },
});
