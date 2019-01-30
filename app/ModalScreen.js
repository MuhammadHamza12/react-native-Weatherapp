import React ,{ Component } from 'react';
import ProgressCircle from 'react-native-progress-circle'
import {
    StyleSheet ,
    Text,
    View,
    Image,
    ImageBackground,
    ScrollView,
    TouchableOpacity,

} from 'react-native';
import { RkCard , RkButton , RkText   } from 'react-native-ui-kitten';
import { Actions } from 'react-native-router-flux';
import { connect } from 'react-redux';
import NetStatus from './NetStatus';
class ModalScreen extends React.Component {
    constructor(props){
        super(props);
        this.state={
            weatherData:[],
            loading:'Loading!...',
            seconds:null,
        }
    }
    handleRoute = () =>{
        Actions.pop();
    }
    componentWillReceiveProps(nextprops){
        console.log('next props',nextprops.weatherResponse);
        if(!nextprops.weatherResponse.error){
            this.setState({
                weatherData:[nextprops.weatherResponse],
            },()=>{console.log(nextprops.weatherResponse.error)})
        }else{
            this.setState({
                loading:'Sorry, No match Found'
            })
        }   
        }
    render(){
        const { weatherData , loading } =this.state;
        console.log('new modal props',this.props)
        
        const Loading = (
            <View style={{flex: 1,
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                }} >

            <RkText >{loading}</RkText>
              <Image  style={{height:100,width:100,opacity:(this.state.loading == 'Sorry, No match Found' ? 0 : 1)}} source={require('./images/loading.gif')} />
                    </View>
        );
        const renderData = (
            weatherData.map((item,i)=>(
                <View  key={i} style={{paddingBottom:50}} >
     <RkCard   style={{borderRadius:20}} >
      <View rkCardHeader     >
        <RkText rkType='header' >TODAY</RkText>
      </View>
      <RkText style={{fontSize:40}} >{item.location.name}</RkText>
      <RkText>{item.location.country}</RkText> 
      <ImageBackground rkCardImg style={{flex:1,height:360,opacity:0.7}}   source={require('./images/myimage.jpg')}>
        {/* <RkText style={{textAlign:'right',fontSize:25,position:'relative',right:20,top:20}} >{item.conditionText}</RkText>   */}
        {/* <RkText style={{position:'relative',top:30,textAlign:'right',right:20}} >{item.conditionIcon}</RkText> */}
        <Image style={{ position:'relative',left:200,top:40, width: 100, height: 100}}  source={{uri: 'https:'.concat(item.current.condition.icon)}}   
     /> 
        <RkText  style={{fontSize:20,textAlign:'right',position:'relative',right:25,top:45}} >{'Humidity:'+item.current.humidity}</RkText> 
        <RkText style={{fontSize:80,position:'relative',top:50}} >{item.current.temp_c.toString()+"C"}</RkText>
        {/* <RkText style={{fontSize:20,position:'relative',left:10,top:60}} >feelslike:{item.feelslike_c.toString()+"C"}</RkText> */}
      </ImageBackground>
      <View rkCardContent rkType='content' >
      </View>
      <View rkCardFooter style={{backgroundColor:'#f6fbfc',}} >
        <RkText rkType='small outline' style={{color:'#67818a'}} >last_updated:{item.current.last_updated}</RkText>
      
        <RkText rkType='small' style={{color:'#67818a'}} >{new Date().toLocaleTimeString()}</RkText>
      
      </View>
      
    </RkCard>
    </View>
)));
        // console.log('netStatus of modal',netStatus);
        console.log()
        return(
        <ScrollView style={{flexGrow:1,backgroundColor:'#EEF7FA',padding:20,flex:1,width:'100%' }}>
                     
          {    (weatherData.length == 0) ? Loading : renderData}
                 
            </ScrollView>
    );
}
}
function mapStateToProps(state) {
    debugger;
    return{
        weatherResponse:state.dataStore,
    }
}
export default connect(mapStateToProps,null)(ModalScreen);
const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#ffff',
    },
    welcome: {
      fontSize: 20,
      textAlign: 'center',
      marginBottom: 50,
      backgroundColor: 'gray',
  },
})
            {/* //    <View key={i} >
            //     <Image  source={{uri: 'https://cdn.apixu.com/weather/64x64/night/113.png'}}  />
            //     <Text>{'City Name: '+item.location.name}</Text>
            //     <Text>{'Country Name:'+item.location.country}</Text>
            //     <Text>{'Local-Time:'+item.location.localtime}</Text>
            //     <Text>{'Last-Update'+item.current.last_updated}</Text>
            //     <Text>{'Temperature In Calsius:'+item.current.temp_c}</Text>
            //     <Text>{'Temperature In Farenheit:'+item.current.temp_f}</Text>
            //     </View> */}
