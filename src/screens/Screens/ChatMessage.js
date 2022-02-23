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

  const{id,loginId} = route.params

     //loader
    const [load, setload] = useState(false)
    const [message, setmessage] = useState(false)
    const [messageData, setmessageData] = useState('')

    const sendMessage = () =>{

      database()
      .ref('/chats/messages')
      .push({
            'senderid' : loginId,
            'recieverid' : id,
            'name': 'asd',
            'message': message,

      })
      .then(() => console.log('Data set.'));

    }


   //show message
   useEffect(()=>{
     getmessages()
   },[])

   const getmessages = () => {
    database()
    .ref('/chats/messages')
    .once('value')
    .then(snapshot => {
    

      const vals = snapshot.val();

      
      let _records = [];
      for(var keys in vals ){
        _records.push({
              ...vals[keys],
              id: keys
          });

      }  
      setmessageData(_records)      
    });
   }

   //specific message

  //  useEffect(()=>{
  //    specificData()
  //  },[messageData])

  //  const specificData = () =>{
  //    console.log("messageData==>",messageData) 

  //   }



  console.log("messageData==>",messageData)

   console.log("loginId==>",loginId)

   console.log("id==>",id)
   




  
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

               

             {/* {messageData && messageData.map((value)=> {
               console.log("map==>",value)
             })} */}

            </View>
          </ScrollView>



  <View style={{ borderWidth: 1, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }} > 
    <TextInput
      placeholder="  Enter Message"
      onChangeText={setmessage}
      value={message}       
    />
    <TouchableOpacity onPress={()=>{sendMessage(),getmessages()} } >
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

