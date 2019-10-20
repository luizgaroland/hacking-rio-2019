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
import InputB from './InputB';
const { width, height } = Dimensions.get('window');
class Map extends React.Component {
    render () {
        return (
            <View>
                <View>
                    <Image
                        source = { require('./mapa.jpeg')}
                        style={{ maxWidth: width, maxHeight: 400 }}
                    />
                    <View style ={{height:400,backgroundColor: '#008543'}}>
                        <Text style={{color:'white', paddingLeft:15, fontSize: 20}}>
                        Proximo de voce
                    </Text>

 <View style={{paddingLeft: 20, paddingRight:20, paddingTop:10}}>
                        <InputB style={{borderRadius:30}} />
                        </View>
                       <TouchableOpacity style = {{
                    paddingRight: 40,
                    paddingLeft: 40,
                    paddingTop: 20
                       }}
                    onPress={() => { this.props.navigation.navigate('Menu') } }
                   >
            <View style = {{
                backgroundColor: 'white', 
                alignItems: 'center', 
                justifyContent: 'center', 
                borderRadius: 30,
                            height: 40
            }}
            >
                    <Text style = {{color: '#008543'}}>Avancar</Text>
                </View>
            </TouchableOpacity>
                    </View>
                    </View>
                    </View>
        );
    }
};

export default Map;
