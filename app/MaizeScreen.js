import React from 'react';
import {
    StyleSheet ,
    Text,
    View,
} from 'react-native';

import { Actions } from 'react-native-router-flux';

export default MaizeScreen = () =>{
    return(
        <View style={styles.container} >
            <Text 
            style={styles.welcome}
            onPress={()=>Actions.blue()}
            >
                MaizeScreen
            </Text>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#D8A838',
    },
    welcome: {
      fontSize: 20,
      textAlign: 'center',
      margin: 10,
      backgroundColor: '#D8A838',
      flex:1,
  },
})