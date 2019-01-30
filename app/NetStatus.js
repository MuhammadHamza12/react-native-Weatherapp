import React from 'react';
import {
    StyleSheet ,
    Text,
    View,
} from 'react-native';

import { Actions } from 'react-native-router-flux';

export default NetStatus = (props) =>{
    console.log(props);
    if(!props.netStatus){
        return(
            <View style={{width:'100%',backgroundColor:'#000000',padding:4,position:'relative',bottom:33}} >
        <Text style={{color:'#FFF',textAlign:'center'}}  >you're offline!</Text>
      </View>
    );
}else{
    return(
      <View>
      </View>  
    );
} 
};
