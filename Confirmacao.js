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
class Confirmacao extends React.Component {
    render () {
        return (
            <View style ={{backgroundColor: '#008543', height:height}}>
                <View style={{height:height2,
                    backgroundColor:'white',
                    marginTop:50,
                    marginLeft:30,
                    marginRight:30,
                    borderRadius:50,}} >
                        <View style={{paddingLeft: 30, paddingTop:80}}>                 
        <Image
            source={require('./comunismoehbom.png')}
            style={{paddingLeft: 10, width:300, height:160}}/>
        </View>
        <Text style={{paddingLeft:42, paddingRight:42, color:'#919191', textAlign:'center', paddingTop:10}}>
*Confirme os valores antes de concluir o pedido. Se houver divergencias de valores, comunicar o atendente.
        </Text>
        <View style={{flexDirection:'row'}}>
                     <TouchableOpacity style = {{
                        paddingRight: 40,
                        paddingLeft: 50,
                         paddingTop: 20,
                    }}
                    onPress={() => { this.props.navigation.navigate('Home') } }
                 >
                    <View style = {{
                        backgroundColor: '#008543',
                        alignItems: 'center',
                        justifyContent: 'center',
                        borderRadius: 30,
                        height: 40,
                        width:100,
                        alignSelf:'center'
                    }}
                >
                    <Text style = {{color: 'white'}}>Sim</Text>
                </View>
            </TouchableOpacity>
            <TouchableOpacity style = {{
                        paddingRight: 10,
                        paddingLeft: 5,
                         paddingTop: 20,
                    }}
                 >
                    <View style = {{
                        backgroundColor: '#D51818',
                        alignItems: 'center',
                        justifyContent: 'center',
                        borderRadius: 30,
                        height: 40,
                        width:100,
                        alignSelf:'center'
                    }}
                >
                    <Text style = {{color: 'white'}}>Nao</Text>
                </View>
            </TouchableOpacity>
            </View>
            </View>
        </View>
        );
    }
};

export default Confirmacao;
