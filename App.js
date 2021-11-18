import React, { Component } from "react";
import BottomTabNavigator from "./components/BottomTabNavigator";
import { Rajdhani_600SemiBold } from "@expo-google-fonts/rajdhani";
import * as Font from "expo-font"

export default class App extends Component {
  constructor(){
    super();
    this.state = {
      fontsLoaded : false
    }
  }

  async loadFonts() {
    await Font.loadAsync({
      Rajdhani_600SemiBold : Rajdhani_600SemiBold
    })
    this.setState({fontsLoaded : true})
  }

  componentDidMount(){
    this.loadFonts();
  }

  render() {
    const { fontsLoaded } = this.state
    if(fontsLoaded){
      return <BottomTabNavigator />;
    }
    return null;
    
  }
}
