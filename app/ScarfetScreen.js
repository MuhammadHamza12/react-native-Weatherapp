import React from 'react';
import {
    StyleSheet ,
    Text,
    View,
} from 'react-native';

import { Actions } from 'react-native-router-flux';

export default ScarfetScreen = () =>{
    return(
        <View style={styles.container} >
            <Text 
            style={styles.welcome}
            onPress={()=>Actions.gray()}
            >
                ScarfetScreen
            </Text>
            <Text 
            style={styles.welcome}
            onPress={()=>Actions.modal()}
            >
                openModal
            </Text>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#bb0000',
    },
    welcome: {
      fontSize: 20,
      textAlign: 'center',
      margin: 10,
      backgroundColor: '#bb0000',
      flex:1,
  },
})