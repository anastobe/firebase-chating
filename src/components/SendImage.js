import React, { useState } from 'react'
import {
  SafeAreaView,
  View,
  Text,
  StatusBar,
  TouchableOpacity,
  ActivityIndicator,
  Image
} from 'react-native'
import { utils } from '@react-native-firebase/app';
import storage from '@react-native-firebase/storage';
import Button from './Button';


//redux
import { connect, useDispatch } from 'react-redux'
import { setSignupPageData } from "../stores/actions/user.action.js"

function Sendimage({...props}) {

    console.log(" props.data.signup_pics==>", props.data.signup_pics)
    
    
    // create bucket storage reference to not yet existing image
    const reference = storage().ref('black-t-shirt-sm.png');
  
    return (
      <View>
         <TouchableOpacity style={{ height: 50, backgroundColor: "#000" }}
          onPress={async () => {
            // path to existing file on filesystem
            const pathToFile = `file:///data/user/0/com.reactnativeboilerplate/cache/Camera/0f96f12f-8e8c-4700-85f2-f78b8eff6ca1.jpg`;
            // uploads file
            await reference.putFile(pathToFile);
          }}
        >
         <Button buttonName="App" />
        </TouchableOpacity>
      </View>
    );
  }


//le k aoo
const mapStateToProps = state => {
    return {
      data: state.userReducer
    }
  
  }
  
  //for set value
  const mapDispatchToProps = {
    setSignupPageData
  }
  
  export default connect(mapStateToProps, mapDispatchToProps)(Sendimage) 
  
  