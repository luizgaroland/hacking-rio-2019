/**
 * Sample React Native App
 * https://github.com/facebooTk/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import QRCode from 'react-native-qrcode-svg';
import {
    View,
    StatusBar,
    StyleSheet,
    Text,
    TouchableOpacity,
    Image,
    Dimensions
} from 'react-native';
const { width, height } = Dimensions.get('window');
const height2 = (height - 150);
let testList = {
    budega: [
        {
            id: 12341,
            quantity: 123123123
        },
        {
            id: 12341,
            quantity: 123123123
        },
        {
            id: 12341,
            quantity: 123123123
        },
        {
            id: 12341,
            quantity: 123123123
        },
        {
            id: 12341,
            quantity: 123123123
        }
    ],
    budegaOption: [ 'Tanque'],
};class QRcompra extends React.Component {
    render () {
        return (
                    <View style ={{backgroundColor: '#008543', height:height}}>
                        <View style={{height:height2,
                            backgroundColor:'white', 
                            marginTop:50, 
                            marginLeft:30,
                            marginRight:30, 
                            borderRadius:50,}} >
            <View style={{paddingTop: 20, alignItems:'center'}}>
                        <Text style={{color:'#008543', fontSize:24}}>
                            Aguardando informacao
                        </Text>
                        </View>
            <View style={{paddingTop: 20, alignItems:'center', paddingLeft:20, paddingRight:20}}>
                        <Text style={{color:'#008543', fontSize:20}}>
                            ID:35129777510001
                        </Text>
                    </View>
<View style={{paddingTop: 10, alignItems:'center', paddingLeft:20, paddingRight:20}}>
                        <Text style={{color:'#008543', fontSize:50}}>
                            R$14,00
                        </Text>
                    </View>
         <View style={{paddingTop: 10, alignItems:'center', paddingLeft:20, paddingRight:20}}>
             <Text style={{color:'#919191', fontSize:16, textAlign:'center'}}>
                        Apresente o QR Code ao Frentista para realizar o pagamento
                        </Text>
                    </View>
                    <View style={{backgroundColor:'white', alignItems:'center', paddingTop:20}}>
                    <QRCode size={200}
          bgColor='purple'
          fgColor='white'/>        
      </View>
            <TouchableOpacity style = {{
                    paddingRight: 40,
                    paddingLeft: 40,
                    paddingTop: 20
                       }}
                   >
            <View style = {{
                alignItems: 'center', 
                justifyContent: 'center', 
                borderRadius: 30,
                height: 10,
                width:100,
                alignSelf:'center'
            }}
            >
                    <Text style = {{color: '#008543'}}>Seguir</Text>
                </View>
            </TouchableOpacity>
            </View>
                    </View>
        );
    }
};

export default QRcompra;
