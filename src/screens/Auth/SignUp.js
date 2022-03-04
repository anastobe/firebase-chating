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
import storage from '@react-native-firebase/storage';

//redux
import { connect, useDispatch } from 'react-redux'
import { setSignupPageData } from "../../stores/actions/user.action.js"

//icons
import Icon from 'react-native-vector-icons/Ionicons'

//style
import styles from "./Login.style.js"
import { ScrollView } from 'react-native-gesture-handler'
import Sendimage from '../../components/SendImage'
// import axios from 'axios'

const SignUp = ({ navigation, route, ...props }) => {

  const [name, setname] = useState("")  
  const [email, setemail] = useState("")
  const [password, setpassword] = useState("")

  
  //loader
  const [load, setload] = useState(false)
  

  const saveSignupInputData = () =>{
    props.setSignupPageData("signupname", name)
    props.setSignupPageData("signupemail", email)
    props.setSignupPageData("signuppassword", password)
  }

    const signUp = () => {   
      setload(true)
      if (name !== '' && email !== '' && password !== '' &&  props.data.signup_pics !== '' ) {
        
        auth().createUserWithEmailAndPassword(email,password)
        .then((ee) => {
        setload(false)
        Sendimage(ee)
        
        console.log('User account created & signed in!');
        // navigation.navigate("Login")
      })
      .catch(error => {
        setload(false)
        if (error.code === 'auth/email-already-in-use') {
          alert('That email address is already in use!');
        }
        
        if (error.code === 'auth/invalid-email') {
          alert('That email address is invalid!');
        }
    
        console.error(error);
      });
    } else {
      setload(false)
      alert("please fill all input Field")
    }
      
    setload(false)
    
    }


      const AddMember = async (ee) =>{
        setload(true)
        console.log(" props.data.signup_pics==>", props.data.signup_pics.name)
        

          const newReference = database()
        .ref('/users')
        newReference
        .push({
          'id': ee.user.uid,
          'name': name,
          'email': email,
          'pics': await storage().ref((props.data.signup_pics.name).toString()).getDownloadURL(),

            
      }        
      )
      .then(() =>{
        setload(false) 
        alert("Successfully Account Created")
        navigation.navigate("Login")
        console.log('AddMember set.')
        });

    }
    

    const Sendimage = async (ee) => {
      setload(true)
      console.log("Sendimage==>", props.data.signup_pics)

      storage().ref((props.data.signup_pics.name).toString()).putFile(props.data.signup_pics.uri)
      .then((e)=>{
        setload(false)
        if (e.state == 'success') {
          AddMember(ee)
        } else {
          alert("Something Went Wrong in Uploading Picture")
        }


      })
      .catch((e)=>{
        setload(false)
        console.log("catch==>",e)
      })
    
    }

  //   async function getimg() {
  //     const url = await storage().ref('Fri Mar 04 2022 00:48:16 GMT+0500 (Pakistan Standard Time)').getDownloadURL()
  //     console.log("download url==>",url)
  //     return url
  //   }
  // getimg()


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
            PlaceHolderHeading="   Enter Name" 
            InputFieldIcons="create-outline"
            PlaceHolderName="  Enter Your Name"
            TextChange={setname}
            value={name}
            />
          </View>

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

          {/* <Sendimage /> */}

          <TouchableOpacity style={{ marginTop: 20,justifyContent: 'center', height: 50, alignSelf: 'flex-end', }}  onPress={()=>{ navigation.navigate("Camera") }} >
          {props.data.signup_pics? <Text style={{  backgroundColor: "#f2aa4c", lineHeight: 50, borderRadius: 10}} > Image Selected </Text> :  <Text style={{  backgroundColor: "#f2aa4c", lineHeight: 50, borderRadius: 10}} > Choose Image </Text>}
           {props.data.signup_pics? <Text style={{ alignSelf: 'flex-end', fontWeight: 'bold' }} >  Image.jpg</Text> : <Text  style={{ alignSelf: 'flex-end', fontWeight: 'bold' }}>Select Image</Text>}
         </TouchableOpacity>
          

          <View style={{ alignItems: 'center', marginTop: 40, marginBottom: 20 }} >
            <Text>Already Exist</Text>
            <TouchableOpacity onPress={()=>{ navigation.navigate("Login"), saveSignupInputData() }}>
             <Text style={{ fontWeight: 'bold', marginTop: 5,  }} >Go For Login?</Text>
            </TouchableOpacity>
          </View>

        </View>


        
         </View>
        </ScrollView>
        <TouchableOpacity onPress={() =>{ signUp()}}>
        {/* <TouchableOpacity onPress={() =>{ Sendimage()}}> */}
           <Button buttonName="Sign Up" />
         </TouchableOpacity>
        </View>
      </SafeAreaView>
      </>
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

export default connect(mapStateToProps, mapDispatchToProps)(SignUp) 

