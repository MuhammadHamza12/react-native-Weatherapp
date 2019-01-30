import React, {Component} from 'react';
import { Image , ScrollView ,Platform, TouchableOpacity  ,StyleSheet,  NetInfo , N ,Text, View} from 'react-native';
import {RkCard,RkTheme,RkButton,RkText } from 'react-native-ui-kitten';
import {  connect } from 'react-redux';
import Icon from 'react-native-vector-icons/EvilIcons';

import { bindActionCreators } from 'redux';
import t from 'tcomb-form-native';
import NetStatus from './NetStatus';
import storeActions from './Actions/actionCreators';
import { Actions } from 'react-native-router-flux';
import Orientation from 'react-native-orientation';

const Udata=t.struct({
    Enter_City_Name:t.String,
  });
  
const Form = t.form.Form;

const options ={
    help:'myhelp',
    auto:'none',
    fields : {
      Enter_City_Name:{    
        placeholder:'Enter City Name',
        underlineAndroid:'transparent',
        error: 'Feild must be required?'
      },
    },
  };
class Main extends Component {
    constructor(props){
        super(props);
        this.state={
            netStatus:false,
            loading:false,
        }

        
        this.props.getNetStatus(this.state.netStatus);
        NetInfo.isConnected.fetch().then(isConnected => {
            console.log('First, is ' + (isConnected ? 'online' : 'offline'));
          })
          NetInfo.addEventListener(
          'connectionChange',
          this.handleFirstConnectivityChange
        );
        NetInfo.isConnected.addEventListener(
          'connectionChange',
          this.handleChangeConnection
        );
        
        // this.renderStatus();
        
    }
                handleChangeConnection = (Connectioninfo)=>{
                    console.log('type of connection!: '+Connectioninfo);
                }
                handleFirstConnectivityChange=(connectionInfo)=> {
                    console.log('First change, type: ' + connectionInfo.type + ', effectiveType: ' + connectionInfo.effectiveType);
                    if(connectionInfo.type == 'cellular'){
                    this.setState({
                        netStatus:true,
                    });
                    this.renderStatus();
                    }
                    else if(connectionInfo.type =='wifi'){
                    this.setState({
                        netStatus:true,
                    });
                    
                    this.renderStatus();
                    
                    }
                    else if(connectionInfo.type == 'none'){
                    console.log('working!');
                    this.setState({
                        netStatus:false,
                    });
                    
                    this.renderStatus();
                    }
                    else if(connectionInfo.type !== 'cellular'){
                    console.log('working!');
                    this.setState({
                        netStatus:false,
                    });
                    this.renderStatus();
                    
                    }
                    else if(connectionInfo.type !== 'wifi'){
                    console.log('working!');
                    this.setState({
                        netStatus:false,
                    });
                    this.renderStatus();
                    
                    }
                    else if(connectionInfo.type == 'unknown'){
                    console.log('working!');
                    this.setState({
                        netStatus:false,
                    });
                    this.renderStatus();
                    }   
                }
                handleConnectionChange = (isConnected) => {
                console.log("CHECK STATUS :"+isConnected);
                
                this.setState({ 
                netStatus: isConnected 
                });
                this.renderStatus();
                console.log(`is connected: ${this.state.netStatus}`);
                
            } 
        renderStatus=()=>{
            console.log('working render')
            if(this.state.netStatus)
            {
            console.log("render: "+this.state.netStatus);
            this.setState({
                status:'online',
            });
            }
            else{
            this.setState({
                status:'offline',
            })
            }
        }
        componentWillMount(){
            const initial = Orientation.getInitialOrientation();
    if (initial === 'PORTRAIT') {
     console.log('PORTRAIT')    } else {
        console.log('Other')
    }
        }
   componentDidMount(){
     Orientation.lockToPortrait();

     Orientation.addOrientationListener(this._orientationDidChange)
   }
   _orientationDidChange =( orientation ) =>{
       if(orientation == 'LANDSCAPE'){
           console.log('Landscapte')
       }
       else{
           console.log('portrat');
       }
   }
   componentWillUnmount(){
 Orientation.getOrientation((err, orientation) => {
      console.log(`Current Device Orientation: ${orientation}`);
    });
 
 
    // Remember to remove listener
    Orientation.removeOrientationListener(this._orientationDidChange);

   }
        handleSubmit= ()=>{

            const value = this._form.getValue(); // use that ref to get the form value
            try{
             
                let Cname= value.Enter_City_Name.replace(/\s/g, '');
                console.log('city name: ',Cname);
                this.props.getResponseData.getDataFromWeatherApi(Cname);
                Actions.modal();
                value.Enter_City_Name = "";
            }
            catch(e){
                console.log('catch value',e);
            }
            // this.onLoad(value.Enter_City_Name)
            // .then( async ()=>{
            //   console.log('running!')
            //   this.onLLoad()
            //   .then(()=>{
            //   console.log('completed')
            //   console.log(this.state.responData)
            //     this.setState({
            //     //   wCrdCmp:true,
            //     //   mainCom:false,
            //     })
            //   })
              
            // })
          }    

    render() {
    return (
      <ScrollView>

      <View style={styles.mainhead}>

        <NetStatus netStatus={this.state.netStatus} />
        <Image style={styles.headimg}  source={require('./images/iconweather.png') } />   
        <RkText rkType='info large' style={{marginBottom:20,backgroundColor:'#ff311112', borderRadius:20,borderColor:'#fffddd'}} >Hope would you like to know about weather conditions!!</RkText>
        <Form 
          type={Udata}
          ref={c => this._form = c} 
          options={options}
          />
          <View style={{flexDirection:'row'}} >
           

           <RkButton 
            rkType='info rounded'
            onPress={this.handleSubmit}
            >
             See Weather
            <Icon style={{fontSize:20}} name='search' />
           </RkButton>
            </View>
      </View>
            </ScrollView>
    );
  }
}
function mapDispatchToProps(dispatch) {
    return{
    getResponseData:bindActionCreators(storeActions,dispatch),
    }
}
export default connect(null,mapDispatchToProps)(Main);

const styles = StyleSheet.create({
    mainhead:{
        flexDirection:'column',
        justifyContent:'space-between',
        marginTop:40,
        alignItems:'center', 
      },
      toolbar: {
        backgroundColor: '#577ae4',
        color: '#fff',
        fontSize: 22,
        padding: 20,
        textAlign: 'center',
        width:700,
      },
      headimg:{
        width:300,
        opacity:0.5, 
      },
});