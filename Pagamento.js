/**
 * Sample React Native App
 * https://github.com/facebooTk/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {
    View,
    StatusBar,
    StyleSheet,
    Text,
    TouchableOpacity,
    Image,
    Dimensions
} from 'react-native';

class Pagamento extends React.Component {
    render () {
        return (
            <View>
                <View style ={{backgroundColor: '#008543'}}>
                    <Text style={{color:'white', paddingLeft:15, fontSize: 20}}>
                        Pagamento
                    </Text>
                </View>
                <View style={{backgroundColor:'white'}}>
                    <View style={{flexDirection:'row', paddingLeft:40, paddingTop:30}}>
                        <Image
                            source={require('./payment-24px.png')}
                            style={{flex:1, width:10, height:20}}/>
                        <Text style={{marginLeft:5, flex:1,flexGrow:10, color:'#008543',fontSize:20}}>
                            Formas de pagamento
                        </Text>
                    </View>
                    <View style={{ paddingLeft: 70, paddingTop: 20 }} >
                        <Image
                            source={require('./meio-pagamento.png')}
                            style={{ width:180, height:80}}/>
                    </View>
                    <View style={{ marginTop: 10, marginLeft: 10, marginRight: 10, flexDirection: 'row' , borderColor: '#008543', borderWidth: 1 }}>
                    <View style={{ paddingTop: 20, paddingLeft: 25, paddingBottom: 20}}>
                        <Image
                            source={require('./cartao.png')}
                            style={{ width:120, height:35}}/>
                        </View>
                    <TouchableOpacity style = {{
                        paddingRight: 40,
                        paddingLeft: 30,
                        paddingTop: 20
                    }}
                    onPress={() => { this.props.navigation.navigate('Compras') } }
                >
                    <View style = {{
                        backgroundColor: '#008543',
                        alignItems: 'center',
                        justifyContent: 'center',
                        borderRadius: 30,
                        height: 40,
                        width:200,
                        alignSelf:'center'
                    }}
                >
                    <Text style = {{color: 'white'}}>Gerar Codigo</Text>
                </View>
            </TouchableOpacity>
                    </View>
        </View>
    </View>
        );
    }
};

export default Pagamento;
