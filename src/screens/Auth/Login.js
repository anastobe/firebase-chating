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

import auth from '@react-native-firebase/auth'

//components
import TextInputComponent from "../../components/TextInputComponent"
import Button from '../../components/Button'


//icons
import Icon from 'react-native-vector-icons/Ionicons'

//style
import styles from "./Login.style.js"
import { ScrollView } from 'react-native-gesture-handler'

// pakage
import axios from "axios"

//redux
import { connect, useDispatch } from 'react-redux'
import {setValue} from "../../stores/actions/user.action"


const Login = ({ navigation, user, ...props }) => {


  const [email, setemail] = useState("")
  const [password, setpassword] = useState("")

  console.log("email==>",email)
  console.log("password==>",password)

  //loader
  const [load, setload] = useState(false)


  
  const emptyfields = () =>{
    setemail("") 
    setpassword("")
  }      

  const checkerror = (e) =>{
   
  }


  const signIn = () => { 
    setload(true)
    auth()
    .signInWithEmailAndPassword(email, password)
    .then((response) => {
      setload(false)
      console.log("response==>",response)
      alert('Login Successfull!');
      navigation.navigate('chatscreen',{ id: response.user._user.uid }) 
    })
    .catch(error => {  
      setload(false)
      if ( error.code === 'auth/user-not-found') {
        alert(error.code)
      } else {
        alert(error.code);
      }

    });

  }


  return (
    <>
      <StatusBar barStyle="dark-content" backgroundColor={'#f9f9f9'} />
      <SafeAreaView style={styles.SafeAreaView1} />
      <SafeAreaView style={styles.SafeAreaView2}>

        <View style={[styles.outerWrapper, { padding: 20 }]}>

        {load &&
        <View style={{ position: 'absolute', flex: 1, justifyContent: 'center', backgroundColor: 'rgba(0,0,0,0.2)', zIndex: 999, top: 0, right: 0, left: 0, bottom: 0, alignItems: 'center' }}>
          <ActivityIndicator size="large" color="#000" />
          </View>
          }

          <ScrollView>
            <View>

              <TouchableOpacity onPress={()=> navigation.goBack() } >
               <Icon name={'arrow-back-sharp'} size={25} color="#7C7C7D" />
              </TouchableOpacity>

              <View>
                <Text style={{ fontSize: 30, marginTop: 30 }} > Login</Text>
              </View>

              <View style={{ marginTop: 60 }} >

                <View>
                  <TextInputComponent
                    PlaceHolderHeading="   Enter Email"
                    InputFieldIcons="mail-outline"
                    PlaceHolderName="  Enter Your Email"
                    TextChange={setemail}
                    value={email}
                  />
                </View>

                <View style={{ marginTop: 20 }} >
                  <TextInputComponent
                    PlaceHolderHeading="   Enter Password"
                    InputFieldIcons="lock-closed-outline"
                    PlaceHolderName="  Enter Your Password"
                    hideKey="hiddenkey"
                    TextChange={setpassword}
                    value={password}
                    />
                </View>



                <View style={{ alignItems: 'center', marginTop: 60 }} >
                  <Text>Don't Have an Account</Text>
                  <TouchableOpacity onPress={() => navigation.navigate("SignUp")}>
                    <Text style={{ fontWeight: 'bold', marginTop: 5, }} >Create Account?</Text>
                  </TouchableOpacity>
                </View>

              </View>


            </View>
          </ScrollView>
          <TouchableOpacity onPress={() => signIn()} >
            <Button buttonName="Log In" />
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </>
  )
}

//data laata ha
const mapStateToProps = state => {

  return {
    user: state.userReducer.data
  }
}

//data action ma save krwata ha
const mapDispatchToProps = {
  setValue
}

export default connect(mapStateToProps, mapDispatchToProps)(Login)
