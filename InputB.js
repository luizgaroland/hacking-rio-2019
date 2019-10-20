import React, { Component } from 'react';
import { TextInput } from 'react-native';

export default function InputB() {
  const [value, onChangeText] = React.useState('Posto escolhido');

  return (
    <TextInput
      style={{ height: 40, borderColor: 'white',backgroundColor:'white', borderWidth: 1 }}
      onChangeText={text => onChangeText(text)}
      value={value}
    />
  );
}
