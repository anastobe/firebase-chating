import React,{useEffect, useState} from 'react'
import {
  SafeAreaView,
  View,
  Text,
  Alert,
  StatusBar,
  TouchableOpacity,
  ActivityIndicator,
  Image
} from 'react-native'

//icons
import Icon from 'react-native-vector-icons/Ionicons'
import { Darkblue } from '../Constraints/index'


const Header = ( props ) => {
  
  console.log("props==>",props)

    return (
    <View style={{ justifyContent: 'space-around', flexDirection: 'row', height: 80, backgroundColor: Darkblue, alignItems: 'center', borderBottomRightRadius: 25, borderBottomLeftRadius: 25 }} >
        <Text><Icon name={props.iconname} size={35} color="#fff" /></Text>
        <Text style={{ color: "#fff", fontSize: 20 }} >{props.headername}</Text>
      {props.img ? <Image style={{ width: 50, height: 50 }} source={{ uri: props.img}}/> : <Text>.</Text> }
    </View>
  )
}

export default (Header)
