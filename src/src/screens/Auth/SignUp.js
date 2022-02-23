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

//components
import TextInputComponent from "../../components/TextInputComponent"
import Button from '../../components/Button'

//firebase
import auth from '@react-native-firebase/auth'
import database from '@react-native-firebase/database';

//redux
import { connect, useDispatch } from 'react-redux'

//icons
import Icon from 'react-native-vector-icons/Ionicons'

//style
import styles from "./Login.style.js"
import { ScrollView } from 'react-native-gesture-handler'
import axios from 'axios'

const SignUp = ({ navigation }) => {

  
  const [email, setemail] = useState("")
  const [password, setpassword] = useState("")
  
  //loader
  const [load, setload] = useState(false)

  const emptyfields = () =>{
    setemail("")
    setpassword("")
  }      

  const checkerror = (e) =>{

  }


    const signUp = () => { 
  
      // setload(true)

      auth().createUserWithEmailAndPassword(email,password)
      .then((e) => {
        // setload(false)
        storeinDatabase(e)
        console.log('User account created & signed in!');


        navigation.navigate("Login")
      })
      .catch(error => {
        // setload(false)
        if (error.code === 'auth/email-already-in-use') {
          console.log('That email address is already in use!');
        }
    
        if (error.code === 'auth/invalid-email') {
          console.log('That email address is invalid!');
        }
    
        console.error(error);
      });
    
    }



    const storeinDatabase = (e) =>{

      const newReference = database().ref('/users').push()
      // console.log('Auto generated key: ', newReference.key)
      // newReference
      .set({
        name: email,
        id: e.user._user.uid
      })
      .then(() => console.log('Data updated.'));
      
      }


  
  // useEffect(() => {
  //   getdatabaseData()
  // }, [])
  

  // const getdatabaseData = () =>{
  //   database()
  //   .ref('/users')
  //   .once('value')
  //   .then(snapshot => {
  //     console.log('User data: ', snapshot.val());
  //   });
  // }





  return (
    <>
  <StatusBar barStyle="dark-content" backgroundColor={'#f9f9f9'} />
      <SafeAreaView style={styles.SafeAreaView1} />
      <SafeAreaView style={styles.SafeAreaView2}>

        <View style={[styles.outerWrapper,{padding: 20 }]}>

        {load &&
        <View style={{ position: 'absolute', flex: 1, justifyContent: 'center', backgroundColor: 'rgba(0,0,0,0.2)', zIndex: 999, top: 0, right: 0, left: 0, bottom: 0, alignItems: 'center' }}>
          <ActivityIndicator size="large" color="#000" />
          </View>}

        <ScrollView>
         <View>

         <Icon name={'arrow-back-sharp'} size={25} color="#7C7C7D" />

         <View>
           <Text style={{ fontSize: 30, marginTop: 30 }} >Signup</Text>
         </View>

         <View  style={{ marginTop: 40 }} >


          <View style={{ marginTop: 20 }} >
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
            TextChange={setpassword}
            value={password}
            />
          </View>

          

          <View style={{ alignItems: 'center', marginTop: 60 }} >
            <Text>Already Exist</Text>
            <TouchableOpacity onPress={()=> navigation.navigate("Login") }>
             <Text style={{ fontWeight: 'bold', marginTop: 5,  }} >Go For Login?</Text>
            </TouchableOpacity>
          </View>

        </View>


        
         </View>
        </ScrollView>
        <TouchableOpacity onPress={() =>{ signUp()}}>
           <Button buttonName="Sign Up" />
         </TouchableOpacity>
        </View>
      </SafeAreaView>
      </>
  )
}

export default (SignUp)
