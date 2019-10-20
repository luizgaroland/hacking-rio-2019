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
const { width, height } = Dimensions.get('window');

class Menu extends React.Component {
    render () {
        return (
            <View>
                <View style={{ flexDirection: 'row'}}>
                    <Text style={{ textAlign: 'center', borderColor: '#fff', borderRightWidth: 1, flex: 1, padding: 10, color: '#fff', backgroundColor: '#007D3C' }}>
                        Combustivel
                    </Text>
                    <Text style={{ textAlign: 'center', borderColor: '#fff', borderRightWidth: 1, flex: 1, padding: 10, color: '#fff', backgroundColor: '#034021' }}>
                        Comidas
                    </Text>
                    <Text style={{ textAlign: 'center', borderColor: '#fff', borderRightWidth: 1, flex: 1, padding: 10, color: '#fff', backgroundColor: '#007D3C' }}>
                        Utilitarios
                    </Text>
                    <Text style={{ textAlign: 'center', flex: 1, padding: 10, color: '#fff', backgroundColor: '#007D3C' }}>
                        Servicos
                    </Text>
                </View>
                <View style={{ flexDirection: 'row', paddingTop: 20, paddingBottom: 20 }}>
                    <Image
                        source={require('./miolo.jpg')}
                        style={{ flex: 1}}/>
                </View>
                <View style={{ backgroundColor: '#007D3C', flexDirection: 'row', height: 200, paddingTop: 30}}>
                    <Image
                        source={require('./local_grocery_store-24px.png')}
                        style={{ marginLeft: 30, width:30, height:30}}/>
                    <Text style={{ color: '#fff', marginLeft: 30, fontSize: 20 }}>
                        Total: R$ 18,00
                    </Text>
                    <View style={{paddingLeft:20}}>
                    <TouchableOpacity style = {{
            backgroundColor:'white',
              height:30,
              borderRadius:30,
                }}
                            onPress={() => { this.props.navigation.navigate('Pagamento') } }
                    >
                        <View style = {{
                            alignItems: 'center',
                            justifyContent: 'center',
                            height: 10,
                            width:150,
                            alignSelf:'center',
                            paddingTop:15
                        }}
                    >
                        <Text style = {{color: '#008543'}}>Continuar</Text>
                    </View>
                </TouchableOpacity>

                </View>
                </View>
            </View>
        );
    }
};

export default Menu;
