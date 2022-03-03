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
import { setSignupPageData } from "../../stores/actions/user.action.js"

//icons
import Icon from 'react-native-vector-icons/Ionicons'

//style
import styles from "./Login.style.js"
import { ScrollView } from 'react-native-gesture-handler'
// import axios from 'axios'

const SignUp = ({ navigation, route, ...props }) => {

  const [name, setname] = useState("")  
  const [email, setemail] = useState("")
  const [password, setpassword] = useState("")

  console.log("props2==>",props.data)
  
  //loader
  const [load, setload] = useState(false)
  

  const saveSignupInputData = () =>{
    props.setSignupPageData("signupname", name)
    props.setSignupPageData("signupemail", email)
    props.setSignupPageData("signuppassword", password)
  }

    const signUp = () => {   
      // setload(true)
      auth().createUserWithEmailAndPassword(email,password)
      .then((e) => {
        // setload(false)
        console.log('id==>',e.user);
        console.log('signed up==>',e.user.uid);
        AddMember(e)
        console.log('User account created & signed in!');
        // navigation.navigate("Login")
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


      const AddMember = (e) =>{

        console.log(" props.data.signup_pics==>", props.data.signup_pics)

        if ( props.data.signup_pics !== "") {
          
          const newReference = database()
        .ref('/users')
        newReference
        .push({
          'id': e.user.uid,
          'name': name,
          'email': email,
            'pics': props.data.signup_pics,

      }        
      )
      .then(() => console.log('AddMember set.'));

    } else {
      alert("plz fill all input field")
      }
    }

  //f(check person) to anas
  //ff(anas) to check person


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

          <TouchableOpacity style={{ marginTop: 20 }}  onPress={()=>{ navigation.navigate("Camera") }} >
           <Button buttonName="Choose Image" />
           {props.data.signup_pics? <Text style={{ alignSelf: 'flex-end', fontWeight: 'bold' }} >Image.jpg</Text> : <Text  style={{ alignSelf: 'flex-end', fontWeight: 'bold' }}>Select Image</Text>}
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

