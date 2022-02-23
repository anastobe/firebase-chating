import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { TextInput,  ActivityIndicator } from 'react-native'
import { View,Text, StatusBar,SafeAreaView, ScrollView, Modal,StyleSheet, Pressable } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import Button from '../../components/Button'
import DateTimePicker from '@react-native-community/datetimepicker'
import TextInputComponent from '../../components/TextInputComponent'
import MaskInput from 'react-native-mask-input';
import { BaseUrl } from '../../utils/BaseUrl'

//firebase
import database from '@react-native-firebase/database';

//icons
import Icon from 'react-native-vector-icons/Ionicons'

//styles
import styles from './screensStyle'

//redux
import { connect, useDispatch } from 'react-redux'

const ChatMessage = ({token,route}) => {

     const  {id,name}  = route.params

     console.log("==>",id)
    
     //loader
    const [load, setload] = useState(false)
    const [message, setmessage] = useState(false)


    //update message
    const sendMessage = () =>{

      database()
      .ref(`/${id}/chatMessages/`)
      // .ref(`/chat/message/${id}/`)
      .push().update(
        {
         id:{
           "send by" : "anas",
           "recieve by" : "asad",
           "messageDate" : "10/10/2019",
           "messageTime" : "10:17pm",
         } 
        }
       )

      .then(() => console.log('Data set updated.'));
    
    }


 //chat member added

 useEffect(() => {
  getspecificchatmember()
}, [])

 const getspecificchatmember = () =>{
  database()
  .ref(`${id}/Chats/members`)
  .once('value')
  .then((snapshot) => {

    if (snapshot.val().map((v)=>{ if(v == id){ console.log(" no render plz ") } else{ console.log("render plz "),addmember()   } })) {
      
    } else {
      
    }
    
      console.log("get==>",snapshot.val());
    
  });
 }

 const addmember =() =>{
  database()
  .ref(`${id}/Chats/members/`)
  .push().set(id)
  
  .then(() => 
  console.log('id added')
  );
}

















  
  return (
    <>
      <StatusBar barStyle="dark-content" backgroundColor={'#f4f4f4'} />
      <SafeAreaView style={styles.SafeAreaView1} />
      <SafeAreaView style={styles.SafeAreaView2}>

      {load &&
        <View style={{ position: 'absolute', flex: 1, justifyContent: 'center', backgroundColor: 'rgba(0,0,0,0.2)', zIndex: 999, top: 0, right: 0, left: 0, bottom: 0, alignItems: 'center' }}>
          <ActivityIndicator size="large" color="#000" />
          </View>}

        <View style={[styles.outerWrapper,{padding: 5}]}>
          <ScrollView>
            <View>
            
             <View>
                 <Text>{name}</Text>
             </View>
            
            </View>
          </ScrollView>



  <View style={{ borderWidth: 1, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }} > 
    <TextInput
      placeholder="  Enter Message"
      onChangeText={setmessage}
      value={message}       
    />
    <TouchableOpacity onPress={()=>{sendMessage(),addmember()} } >
      <Icon style={{ marginRight: 10 }} name={'send-outline'} size={22} color="#000" />
    </TouchableOpacity>
  </View>
  

        
        </View>
      </SafeAreaView>
    </>
  )
}


const stylesm = StyleSheet.create({
    centeredView: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      // marginTop: 22
    },
    modalView: {
      margin: 20,
      backgroundColor: "white",
      borderRadius: 20,
      padding: 35,
      alignItems: "center",
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 2
      },
      shadowOpacity: 0.25,
      shadowRadius: 4,
      elevation: 5
    },
    button: {
      borderRadius: 20,
      padding: 10,
      elevation: 2
    },
    buttonOpen: {
      backgroundColor: "#F194FF",
    },
    buttonClose: {
      backgroundColor: "#2196F3",
    },
    textStyle: {
      color: "white",
      fontWeight: "bold",
      textAlign: "center"
    },
    modalText: {
      marginBottom: 15,
      textAlign: "center"
    }
  });

//data laata ha
const mapStateToProps = state => {

  return {
    token: state.userReducer.data
  }
}

//data action ma save krwata ha
const mapDispatchToProps = {
  // setValue
}


export default connect(mapStateToProps, mapDispatchToProps)(ChatMessage)

