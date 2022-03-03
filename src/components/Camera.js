import React, { useEffect, useRef, useState } from 'react'
import {
  ColorPropType,
  style,
  Text,
  View,
  TouchableOpacity
} from 'react-native'
import { RNCamera } from 'react-native-camera'
import Ionicons from 'react-native-vector-icons/Ionicons'


//redux
import { connect, useDispatch } from 'react-redux'
import { setSignupPageData } from "../stores/actions/user.action.js"

const Camera = ({ navigation, route, ...props }) => {
  
  console.log("camera data==>",props.data)
  
  
  const cameraRef = useRef()
  const savedatanadNavigate = (data) =>{
    props.setSignupPageData("signup_pics",{
      uri: data.uri,
      name: 'IMG-20220127-WA0007.jpg',
      type: 'image/jpeg'
    })

    navigation.navigate('SignUp')

  }

  



  const takePicture = async () => {
    try {
      const options = { quality: 0.5 }
      const data = await cameraRef.current.takePictureAsync(options)

      savedatanadNavigate(data)

      console.log(data.uri, '<<<<<<<<<<<<<<<<<<<<<');
    } catch (error) {
      console.log(error, 'ERROR <<<<<<<<<<<<<')
    }
  }


  return (
    <View style={{ flex: 1 }}>
      <RNCamera
        ref={cameraRef}
        style={{ flex: 1 }}
        captureAudio={false}
        type={RNCamera.Constants.Type.back}
        flashMode={RNCamera.Constants.FlashMode.off}
        androidCameraPermissionOptions={{
          title: 'Permission to use camera',
          message: 'We need your permission to use your camera',
          buttonPositive: 'Ok',
          buttonNegative: 'Cancel'
        }}></RNCamera>

      <View style={{ alignItems: 'center', height: 70 }}>
        <TouchableOpacity onPress={() =>{ takePicture() }}>
          <Text style={{ color: '#000', lineHeight: 70 }}>
            <Ionicons
              type="ion-icon"
              size={60}
              color="black"
              name="ellipse-outline"
            />
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  )
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

export default connect(mapStateToProps, mapDispatchToProps)(Camera) 
