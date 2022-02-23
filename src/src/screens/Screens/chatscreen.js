import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { TextInput,  ActivityIndicator, Image } from 'react-native'
import { View,Text, StatusBar,SafeAreaView, ScrollView, Modal,StyleSheet, Pressable } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import Button from '../../components/Button'
import DateTimePicker from '@react-native-community/datetimepicker'
import TextInputComponent from '../../components/TextInputComponent'
import MaskInput from 'react-native-mask-input';
import { BaseUrl } from '../../utils/BaseUrl'

//styles
import styles from './screensStyle'

//firebase
import database from '@react-native-firebase/database';

//icons
import Icon from 'react-native-vector-icons/Ionicons'
import { lightFerozee } from '../../components/Color'

//redux
import { connect, useDispatch } from 'react-redux'
import { v5 } from 'uuid'

const chatscreen = ({token, navigation}) => {

    //loader
    const [load, setload] = useState(false)

    const [Data, setData] = useState()
    const [Dataarr, setDataarr] = useState()  


    //display data
    useEffect(() => {
      getdatabaseData()
    }, [])
    
    const getdatabaseData = () =>{
      database()
      .ref('/')
      .once('value')
      .then(snapshot => {
        const vals = snapshot.val();

        console.log("vals==>",vals)
        
        let _records = [];
        for(var keys in vals ){

          _records.push({
                ...vals[keys],
                id: keys
            });

        }  
        setDataarr(_records)      
      });
    }


   

  
  
  return (
    <>
      <StatusBar barStyle="dark-content" backgroundColor={'#f4f4f4'} />
      <SafeAreaView style={styles.SafeAreaView1} />
      <SafeAreaView style={styles.SafeAreaView2}>

      {load &&
        <View style={{ position: 'absolute', flex: 1, justifyContent: 'center', backgroundColor: 'rgba(0,0,0,0.2)', zIndex: 999, top: 0, right: 0, left: 0, bottom: 0, alignItems: 'center' }}>
          <ActivityIndicator size="large" color="#000" />
          </View>
          }

        <View style={[styles.outerWrapper,{padding: 5}]}>
          <ScrollView>
            <View>

             {Dataarr && Dataarr.map((v,i)=>{
              //  console.log("map==>",v.Users.userDisplayName)
               return(
                 <TouchableOpacity onPress={()=>{ navigation.navigate("ChatMessage", {id: v.id, name: v.Users.userDisplayName} )} } >
                <View style={{ alignItems: 'center', height: 50, justifyContent: 'center', borderColor: "#000", borderWidth: 1, marginTop: 10, backgroundColor: "#f4f4f4", flexDirection: 'row', justifyContent: 'space-between' }} >
                  <Image style={{ width: 50, height: 50 }} source={{ uri: 'https://reactnative.dev/img/tiny_logo.png'}}/>
                  <Text>{v.Users.userDisplayName}</Text>
                  <Text>.</Text>
                </View>
                 </TouchableOpacity>
               )

             })}

            </View>
          </ScrollView>
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


export default connect(mapStateToProps, mapDispatchToProps)(chatscreen)

