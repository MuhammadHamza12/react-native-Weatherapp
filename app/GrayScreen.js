import React from 'react';
import {
    StyleSheet ,
    Text,
    View,
} from 'react-native';

import { Actions } from 'react-native-router-flux';

export default GrayScreen = () =>{
    handleRoute = () =>{
        Actions.scarlet()
    }
    return(
        <View style={styles.welcome} >
            <Text style={styles.welcome} 
                onPress={this.handleRoute}
           >
                GrayScreen
            </Text>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#F5FCFF',
    },
    welcome: {
      fontSize: 20,
      textAlign: 'center',
      margin: 10,
      backgroundColor: 'gray',
  },
})