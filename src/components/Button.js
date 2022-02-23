import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput } from 'react-native';

//icons
import Icon from 'react-native-vector-icons/Ionicons'

//color
import { lightFerozee } from './Color';

const Button = (
  props
) => {

  return (
    <View style={{ alignItems: 'center', backgroundColor: "#f2aa4c", height: 50 }} >
        <Text style={{ lineHeight: 50, fontWeight: 'bold', fontSize: 20 }} >{props.buttonName}</Text>
    </View>
    );
};


const styles = StyleSheet.create({
  view: {
    borderColor: lightFerozee,
    borderWidth: 1,
    
  },
});

export default Button;
