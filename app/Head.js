// import Icon from 'react-native-vector-icons/FontAwesome'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import React from 'react';
import {
    StyleSheet ,
    Text,
    View,
} from 'react-native';

import { Actions } from 'react-native-router-flux';

export default Head = () =>{
    return(
      <View style={styles.mainhead}>
        <Text style={styles.toolbar}> <Icon name='weather-windy' style={{color:'white',fontSize:30}} /> Weather App</Text>
        
         </View>
    );
}
const styles = StyleSheet.create({
  mainhead:{
    flex:1,
    alignItems:'center', 
  },
  toolbar: {
    backgroundColor: '#577ae4',
    color: '#fff',
    fontSize: 22,
    padding: 20,
    textAlign: 'center',
    width:700,

  }
})