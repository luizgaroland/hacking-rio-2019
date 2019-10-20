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
export default class Combustiveis extends React.Component {
    static navigationOptions = {
        tabBarLabel: 'Tab1';
    }
    render () {
        return (
            <View style={{
                flex:1,
                justifyContent: 'center',
                alignItems: 'center'
            }}
        >
        <Text style={{fontSize:30}}>
            fodase
        </Text>
                    </View>
        );
    }
};

export Combustiveis;
