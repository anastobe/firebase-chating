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
import moment from 'moment'
import Header from '../../components/Header'

const chatscreen = ({token, navigation, route}) => {

  const { id } = route.params

  console.log("login id==>",id)

    //loader
    const [load, setload] = useState(false)
    const [Dataarr, setDataarr] = useState()  
    //for login user hide
    const [Dataarr2, setDataarr2] = useState()  


    //display data
    useEffect(() => {
      getdatabaseData()
    }, [])
    
    const getdatabaseData = () =>{
      setload(true)
      database()
      .ref('/users')
      .once('value')
      .then(snapshot => {
        setload(false)
        const vals = snapshot.val();
        
        let _records = [];
        for(var keys in vals ){

          _records.push({
            ...vals[keys],
            idd: keys
          });
          
        }  
        setDataarr(_records)      
      });
      setload(false)
    }
    

    const filter = async () =>{
      const d = await Dataarr.filter((params) => {
        if (params.id != id) {
          return params
        }  
       })
       setDataarr2(d)
      }
  
      useEffect(()=>{
        filter()
      },[Dataarr])
  

   
    



  
  return (
    <>
      <StatusBar barStyle="dark-content" backgroundColor={'#f4f4f4'} />
      <SafeAreaView style={styles.SafeAreaView1} />
      <SafeAreaView style={styles.SafeAreaView2}>

      {load &&
        <View style={{ position: 'absolute', flex: 1, justifyContent: 'center', backgroundColor: 'rgba(0,0,0,0.2)', zIndex: 999, top: 0, right: 0, left: 0, bottom: 0, alignItems: 'center' }}>
          <ActivityIndicator size="large" color="#000" />
          </View>}


          <Header headername="Chat app" iconname="menu-outline" />

        <View style={[styles.outerWrapper,{padding: 5}]}>
          <ScrollView>
            <View>
              
              
             {Dataarr2 && Dataarr2.map((v,i)=>{
               console.log("map==>",v)
               return(
                 <TouchableOpacity key={v.idd} onPress={()=>{ navigation.navigate("ChatMessage", {id: v.id, loginId: id, name: v.name, image: v.pics } )} } >
                <View style={{ alignItems: 'center', height: 50, justifyContent: 'center', borderColor: "#000", borderWidth: 1, marginTop: 10, backgroundColor: "#f4f4f4", flexDirection: 'row', justifyContent: 'space-between' }} >
                  {v?.pics && <Image style={{ width: 50, height: 50 }} source={{ uri : v?.pics}}/>}
                  <Text>{v.name}</Text>
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




// const { id } = route.params

// console.log("login id==>",id)

//   //loader
//   const [load, setload] = useState(false)
//   const [Dataarr, setDataarr] = useState()  
//   //for login user hide
//   const [Dataarr2, setDataarr2] = useState()  


//   //display data
//   useEffect(() => {
//     getdatabaseData()
//   }, [])
  
//   const getdatabaseData = () =>{
//     database()
//     .ref('/users')
//     .once('value')
//     .then(snapshot => {
    

//       const vals = snapshot.val();

//       console.log("get==>",snapshot.val())
      
//       let _records = [];
//       for(var keys in vals ){

//         _records.push({
//           ...vals[keys],
//           idd: keys
//         });
        
//       }  
//       setDataarr(_records)      
//     });
//   }
  

//   const filter = async () =>{
//     const d = await Dataarr.filter((params) => {
//       if (params.id != id) {
//         return params
//       }  
//      })
//      setDataarr2(d)
//     }

//     useEffect(()=>{
//       filter()
//     },[Dataarr])


 
  




