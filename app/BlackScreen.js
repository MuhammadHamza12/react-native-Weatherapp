import React from 'react';
import {
    StyleSheet ,
    Text,
    View,
} from 'react-native';

import { Actions } from 'react-native-router-flux';

export default BlackScreen = () =>{
    return(
        <View style={styles.container} >
            <Text 
            style={styles.welcome}
            onPress={()=>Actions.gold()}
            >
                BlackScreen
            </Text>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#000000',
    },
    welcome: {
      fontSize: 20,
      textAlign: 'center',
      margin: 10,
      backgroundColor: '#000000',
      flex:1,
  },
})