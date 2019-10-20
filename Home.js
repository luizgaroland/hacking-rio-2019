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
    Image
} from 'react-native';

import { SearchB } from './SearchB';

import QRCode from 'react-native-qrcode-svg';
import {white} from 'ansi-colors';


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
};



class Home extends React.Component {
    render () {
    return (
        <>
            <View style={{
                    flex: 1
                }}>
                <View style={{
                    backgroundColor: '#008543',
                    flex: 1
                }}>
                <View style={{
                        position: 'absolute',
                        width: '80%',
                        alignSelf: 'center',
                        top: 0,
                    }}>
                        <Text style={{
                            fontSize: 36,
                            color: '#fff'
                        }}>
                            Ola Luiz,
                        </Text>
                    </View>
                    <View style={{
                        backgroundColor: '#fff',
                        position: 'absolute',
                        width: '80%',
                        height: '60%',
                        alignSelf: 'center',
                        bottom: 0,
                        borderTopLeftRadius: 19,
                        borderTopRightRadius:19, 
                        paddingTop: 20,
                        paddingLeft: 20
                    }}>


                        <Text style={{
                            fontSize: 36,
                            color: '#ffa257'
                        }}>
                           3,600 Pontos
                        </Text>
                        <Text style={{
                            fontSize: 12,
                            color: '#858585'
                        }}
                        >
                        ultima atualizacao de pontos 19/10/2019
                        </Text>
                        <Text style = {{
                            fontSize: 12,
                            color: '#008543',
                            textDecorationLine: 'underline',
                            lineHeight: 20
                        }}>
                        Exibir historico de pontos
                        </Text>

                    </View>
                </View>

                <View style={{
                    backgroundColor: '#fff',
                    flex: 1,
                    paddingLeft: 50,
                    paddingRight: 50,
                        }}>
                    <SearchB/>
                <TouchableOpacity style = {{
                    paddingRight: 40,
                    paddingLeft: 40,
                    paddingTop: 20
                        }}
                onPress={() => { this.props.navigation.navigate('Pagamento') } }
                    >
            <View style = {{
                backgroundColor: '#008543', 
                alignItems: 'center', 
                justifyContent: 'center', 
                borderRadius: 30,
                            height: 40
            }}
            >
                    <Text style = {{color: 'white'}}>Vouchers</Text>
                </View>
            </TouchableOpacity>
            <TouchableOpacity style= {{
                paddingTop: 20,
                paddingRight: 40,
                paddingLeft: 40
            }}
                onPress={() => { this.props.navigation.navigate('Map') } }
            >
            <View style = {{
                backgroundColor: '#008543',
                alignItems: 'center',
                justifyContent: 'center',
                borderRadius: 30,
                height: 40
            }}
        >
        <Text style = {{color: 'white'}}>
            Compra Expressa
        </Text>
    </View>
</TouchableOpacity>
                        </View>
            <View style={{
                    backgroundColor: '#fff',
                    flex: 1
            }}>
                <Text style = {{
                    color: '#008543',
                    paddingLeft:45,
                    fontSize: 25
                }}
                    >
                    Destaques
                </Text>
                <View style = {{paddingLeft: 20}}>
                <Image source = { require('./component.png')}/>
                </View>
            </View>
            </View>
        </>
    );
    }
};


const styles = StyleSheet.create({
    body: {
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
    },
});

export default Home;
