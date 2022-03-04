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
import moment from 'moment'
import Header from '../../components/Header'

const ChatMessage = ({token,route}) => {



  const{id,loginId,name,image} = route.params

     //loader
    const [load, setload] = useState(false)
    const [message, setmessage] = useState()
    const [messageData, setmessageData] = useState('')
    const [messageDataSpecific, setmessageDataSpecific] = useState()


    const sendMessage = () =>{

      database()
      .ref('/chats/messages')
      .push({
            'senderid' : loginId,
            'recieverid' : id,
            'name': name,
            'message': message,
            'date': new moment().format('LTS'),

      })
      .then(() =>{
         console.log('Data set.')
         setmessage("")
        });

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
        _records.unshift({
          ...vals[keys],
          id: keys
          });
        }  
        setmessageData(_records)      
    });
   }
   
   console.log("loginId==>",loginId)
   console.log("id==>",id)
   
   useEffect(() => {

   const onChildAdd = database()
   .ref('/chats/messages')
   .on('child_added', snapshot => {
     console.log('A new node has been added', snapshot.val());
     getmessages()
   });

   // Stop listening for updates when no longer required
   return () => database().ref('/chats/messages').off('child_added', onChildAdd);
   }, []);
   

   
   const filter = async () =>{
     
     
     let sortedobj =  messageData.sort(function(a,b){    
       return (a.date) <  (b.date) ? false : true;
      });
      
      const d = await sortedobj.filter((params) => {
              return params
           })
          
           setmessageDataSpecific(d)
          
        }
        
        useEffect(()=>{
          filter()
        },[messageData])
        
        
  console.log("messageDataSpecific==>",messageDataSpecific)


  
  return (
    <>
      <StatusBar barStyle="dark-content" backgroundColor={'#f4f4f4'} />
      <SafeAreaView style={styles.SafeAreaView1} />
      <SafeAreaView style={styles.SafeAreaView2}>

      {load &&
        <View style={{ position: 'absolute', flex: 1, justifyContent: 'center', backgroundColor: 'rgba(0,0,0,0.2)', zIndex: 999, top: 0, right: 0, left: 0, bottom: 0, alignItems: 'center' }}>
          <ActivityIndicator size="large" color="#000" />
          </View>}

          <Header headername={name} iconname="" img={image} />

        <View style={[styles.outerWrapper,{padding: 5}]}>
        <ScrollView>
            <View>
              



 
                {messageDataSpecific && messageDataSpecific.map((v,i)=>{

                  console.log("v.senderid==>",v.senderid)
                  console.log("v.recieverid==>",v.recieverid)
                  console.log("map==>",v)

                  return(
                  ((id === v.senderid || id === v.recieverid) && (loginId === v.senderid || loginId === v.recieverid)) ?
                  
                 <View style={{ width: 200, height: 50, borderRadius: 10, alignItems: 'center', justifyContent: 'center', margin: 5 ,backgroundColor: "#f4f4f4", alignSelf: v.senderid == id ? 'flex-start' : 'flex-end' ,}} >
                   <Text>{v.message}</Text>
                   <View style={{ alignSelf: v.senderid == id ? 'flex-start' : 'flex-end' }} >
                   <Text>{v.date}</Text>
                   </View> 
                 </View> 

                  : null
                  )

                  // <View style={{ margin: 5, }} >
                  //   <Text style={{ alignSelf: v.senderid == id ? 'flex-start' : 'flex-end' , textAlign: 'center' ,backgroundColor: "#f4f4f4", lineHeight: 70, width: 150, borderRadius: 10, borderColor: "#000", borderWidth: 1}} >{v.message}</Text>
                  //   <Text>{v.date}</Text>
                  // </View> 
                  

                })} 

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







// const{id,loginId} = route.params

// //loader
// const [load, setload] = useState(false)
// const [message, setmessage] = useState(false)
// const [messageData, setmessageData] = useState('')
// const [messageDataSpecific, setmessageDataSpecific] = useState()

// const sendMessage = () =>{

//  database()
//  .ref('/chats/messages')
//  .push({
//        'senderid' : loginId,
//        'recieverid' : id,
//        'name': 'names',
//        'message': message,
//        'date': new moment().format('LTS'),

//  })
//  .then(() => console.log('Data set.'));

// }


// //show message
// useEffect(()=>{
// getmessages()
// },[])

// const getmessages = () => {
// database()
// .ref('/chats/messages')
// .once('value')
// .then(snapshot => {

//  const vals = snapshot.val();

 
//  let _records = [];
//  for(var keys in vals ){
//    _records.unshift({
//      ...vals[keys],
//      id: keys
//      });
//    }  
//    setmessageData(_records)      
// });
// }

// console.log("loginId==>",loginId)
// console.log("id==>",id)

// console.log("messageData=======>",messageData)

// const filter = async () =>{
// const d = await messageData.filter((params) => {
//  // if (params.senderid == loginId && params.recieverid == id ) {
//    return params
//  // }  
// })

// setmessageDataSpecific(d)

// }

// useEffect(()=>{
//  filter()
// },[messageData])


// console.log("messageDataSpecific==>",messageDataSpecific)

