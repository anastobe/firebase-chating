// import React, { useState } from 'react';
// import { View, ScrollView, StyleSheet } from 'react-native';
// import { Button, ButtonGroup, withTheme, Text } from 'react-native-elements';

// type ButtonsComponentProps = {};

// const Buttons: React.FunctionComponent<ButtonsComponentProps> = () => {
//   const [selectedIndex, setSelectedIndex] = useState(0);
//   const [selectedIndexes, setSelectedIndexes] = useState([0, 2, 3]);

//   return (
//     <>
//       <ScrollView>
//         <View style={styles.contentView}>
//           <Text style={styles.subHeader}>Basic Buttons</Text>
//             <View style={styles.buttonsContainer}>
//               <Button
//                 title={'React Native Elements'}
//                 containerStyle={{
//                   width: 200,
//                   marginHorizontal: 50,
//                   marginVertical: 10,
//                 }}
//               />
//               <Button
//                 title="Basic Button"
//                 buttonStyle={{
//                   backgroundColor: 'rgba(78, 116, 289, 1)',
//                   borderRadius: 3,
//                 }}
//                 containerStyle={{
//                   width: 200,
//                   marginHorizontal: 50,
//                   marginVertical: 10,
//                 }}
//               />
//               <Button
//                 title="Dark"
//                 buttonStyle={{ backgroundColor: 'rgba(39, 39, 39, 1)' }}
//                 containerStyle={{
//                   width: 200,
//                   marginHorizontal: 50,
//                   marginVertical: 10,
//                 }}
//                 titleStyle={{ color: 'white', marginHorizontal: 20 }}
//               />

//               <Button
//                 title="Log in"
//                 loading={false}
//                 loadingProps={{ size: 'small', color: 'white' }}
//                 buttonStyle={{
//                   backgroundColor: 'rgba(111, 202, 186, 1)',
//                   borderRadius: 5,
//                 }}
//                 titleStyle={{ fontWeight: 'bold', fontSize: 23 }}
//                 containerStyle={{
//                   marginHorizontal: 50,
//                   height: 50,
//                   width: 200,
//                   marginVertical: 10,
//                 }}
//                 onPress={() => console.log('aye')}
//               />
//               <Button
//                 title="Secondary"
//                 buttonStyle={{ backgroundColor: 'rgba(127, 220, 103, 1)' }}
//                 containerStyle={{
//                   height: 40,
//                   width: 200,
//                   marginHorizontal: 50,
//                   marginVertical: 10,
//                 }}
//                 titleStyle={{
//                   color: 'white',
//                   marginHorizontal: 20,
//                 }}
//               />
//               <Button
//                 title="Warning"
//                 containerStyle={{
//                   height: 40,
//                   width: 200,
//                   marginHorizontal: 50,
//                   marginVertical: 10,
//                 }}
//                 buttonStyle={{ backgroundColor: 'rgba(255, 193, 7, 1)' }}
//                 titleStyle={{
//                   color: 'white',
//                   marginHorizontal: 20,
//                 }}
//               />
//               <Button
//                 title="Danger"
//                 buttonStyle={{ backgroundColor: 'rgba(214, 61, 57, 1)' }}
//                 containerStyle={{
//                   height: 40,
//                   width: 200,
//                   marginHorizontal: 50,
//                   marginVertical: 10,
//                 }}
//                 titleStyle={{ color: 'white', marginHorizontal: 20 }}
//               />
//               <Button
//                 title="Request an agent"
//                 titleStyle={{ fontWeight: '500' }}
//                 buttonStyle={{
//                   backgroundColor: 'rgba(199, 43, 98, 1)',
//                   borderColor: 'transparent',
//                   borderWidth: 0,
//                 }}
//                 containerStyle={{
//                   width: 200,
//                   height: 45,
//                   marginHorizontal: 50,
//                   marginVertical: 10,
//                 }}
//               />
//             </View>

//             <Text style={styles.subHeader}>Rounded Buttons</Text>
//             <View style={styles.buttonsContainer}>
//               <Button
//                 title="LOG IN"
//                 buttonStyle={{
//                   backgroundColor: 'black',
//                   borderWidth: 2,
//                   borderColor: 'white',
//                   borderRadius: 30,
//                 }}
//                 containerStyle={{
//                   width: 200,
//                   marginHorizontal: 50,
//                   marginVertical: 10,
//                 }}
//                 titleStyle={{ fontWeight: 'bold' }}
//               />
//               <Button
//                 title="HOME"
//                 icon={{
//                   name: 'home',
//                   type: 'font-awesome',
//                   size: 15,
//                   color: 'white',
//                 }}
//                 iconContainerStyle={{ marginRight: 10 }}
//                 titleStyle={{ fontWeight: '700' }}
//                 buttonStyle={{
//                   backgroundColor: 'rgba(90, 154, 230, 1)',
//                   borderColor: 'transparent',
//                   borderWidth: 0,
//                   borderRadius: 30,
//                 }}
//                 containerStyle={{
//                   width: 200,
//                   marginHorizontal: 50,
//                   marginVertical: 10,
//                 }}
//               />
//               <Button
//                 title="PROFILE"
//                 icon={{
//                   name: 'user',
//                   type: 'font-awesome',
//                   size: 15,
//                   color: 'white',
//                 }}
//                 iconRight
//                 iconContainerStyle={{ marginLeft: 10 }}
//                 titleStyle={{ fontWeight: '700' }}
//                 buttonStyle={{
//                   backgroundColor: 'rgba(199, 43, 98, 1)',
//                   borderColor: 'transparent',
//                   borderWidth: 0,
//                   borderRadius: 30,
//                 }}
//                 containerStyle={{
//                   width: 200,
//                   marginHorizontal: 50,
//                   marginVertical: 10,
//                 }}
//               />
//               <Button
//                 title={<CustomTitle />}
//                 titleStyle={{ fontWeight: 'bold', fontSize: 18 }}
//                 linearGradientProps={{
//                   colors: ['#FF9800', '#F44336'],
//                   start: [1, 0],
//                   end: [0.2, 0],
//                 }}
//                 buttonStyle={{
//                   borderWidth: 0,
//                   borderColor: 'transparent',
//                   borderRadius: 20,
//                 }}
//                 containerStyle={{
//                   width: 200,
//                   marginHorizontal: 50,
//                   marginVertical: 10,
//                 }}
//                 icon={{
//                   name: 'arrow-right',
//                   type: 'font-awesome',
//                   size: 15,
//                   color: 'white',
//                 }}
//                 iconRight
//                 iconContainerStyle={{ marginLeft: 10, marginRight: -10 }}
//               />
//             </View>

//             <Text style={styles.subHeader}>Light Buttons</Text>
//             <View style={styles.buttonsContainer}>
//               <Button
//                 title="SIGN UP"
//                 disabled={true}
//                 titleStyle={{ fontWeight: '700' }}
//                 buttonStyle={{
//                   backgroundColor: 'rgba(92, 99,216, 1)',
//                   borderColor: 'transparent',
//                   borderWidth: 0,
//                   borderRadius: 5,
//                 }}
//                 containerStyle={{
//                   width: 200,
//                   height: 45,
//                   marginHorizontal: 50,
//                   marginVertical: 10,
//                 }}
//               />
//               <Button
//                 title="Outline Button"
//                 buttonStyle={{
//                   borderColor: 'rgba(78, 116, 289, 1)',
//                 }}
//                 type="outline"
//                 titleStyle={{ color: 'rgba(78, 116, 289, 1)' }}
//                 containerStyle={{
//                   width: 200,
//                   marginHorizontal: 50,
//                   marginVertical: 10,
//                 }}
//               />
//               <Button
//                 title="Raised Button"
//                 buttonStyle={{
//                   borderColor: 'rgba(78, 116, 289, 1)',
//                 }}
//                 type="outline"
//                 raised
//                 titleStyle={{ color: 'rgba(78, 116, 289, 1)' }}
//                 containerStyle={{
//                   width: 200,
//                   marginHorizontal: 50,
//                   marginVertical: 10,
//                 }}
//               />
//               <Button
//                 containerStyle={{
//                   width: 200,
//                   marginHorizontal: 50,
//                   marginVertical: 10,
//                 }}
//                 title="Clear Button"
//                 type="clear"
//                 titleStyle={{ color: 'rgba(78, 116, 289, 1)' }}
//               />
//               <Button
//                 title="Light"
//                 buttonStyle={{
//                   backgroundColor: 'rgba(244, 244, 244, 1)',
//                   borderRadius: 3,
//                 }}
//                 containerStyle={{
//                   height: 40,
//                   width: 200,
//                   marginHorizontal: 50,
//                   marginVertical: 10,
//                 }}
//                 titleStyle={{ marginHorizontal: 20, color: 'black' }}
//               />
//             </View>
//             <Text style={styles.subHeader}>Loading Buttons</Text>
//             <View style={styles.buttonsContainer}>
//               <Button
//                 title="HOME"
//                 loading
//                 titleStyle={{ fontWeight: '700' }}
//                 buttonStyle={{
//                   backgroundColor: 'rgba(111, 202, 186, 1)',
//                   borderColor: 'transparent',
//                   borderWidth: 0,
//                   borderRadius: 5,
//                   paddingVertical: 5,
//                 }}
//                 containerStyle={{
//                   width: 200,
//                   height: 40,
//                   marginHorizontal: 50,
//                   marginVertical: 10,
//                 }}
//               />
//               <Button
//                 title="SIGN UP"
//                 loading={true}
//                 loadingProps={{
//                   size: 'small',
//                   color: 'rgba(111, 202, 186, 1)',
//                 }}
//                 titleStyle={{ fontWeight: '700' }}
//                 buttonStyle={{
//                   backgroundColor: 'rgba(92, 99,216, 1)',
//                   borderColor: 'transparent',
//                   borderWidth: 0,
//                   borderRadius: 5,
//                   paddingVertical: 10,
//                 }}
//                 containerStyle={{
//                   width: 200,
//                   marginHorizontal: 50,
//                   marginVertical: 10,
//                 }}
//               />
//             </View>
//         </View>
//       </ScrollView>
//     </>
//   );
// };

// const CustomTitle = () => {
//   return (
//     <View style={{ flexDirection: 'column' }}>
//       <Text style={{ fontWeight: 'bold', fontSize: 18 }}>John Doe</Text>
//       <Text style={{ fontStyle: 'italic', fontSize: 12 }}>
//         Minister of Magic
//       </Text>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   contentView: {
//     flex: 1,
//   },
//   buttonsContainer: {
//     flexDirection: 'row',
//     flexWrap: 'wrap',
//     justifyContent: 'center',
//     alignItems: 'center',
//     width: '100%',
//     marginVertical: 20,
//   },
//   subHeader: {
//     backgroundColor : "#2089dc",
//     color : "white",
//     textAlign : "center",
//     paddingVertical : 5,
//     marginBottom : 10
//   }
// });

// export default withTheme(Buttons, '');






























import React from 'react'
import {
  SafeAreaView,
  View,
  Text,
  StatusBar,
  TouchableOpacity,
  Image
} from 'react-native'
import styles from './StartPage.style'
import Icon from 'react-native-vector-icons/Ionicons'

import { Button } from 'react-native-elements';
import LinearGradient from 'react-native-linear-gradient';

//image
import TodoLogo from "../../assets/images/TodoLogo.jpg"

//redux
import { connect, useDispatch } from 'react-redux'
import { fetchDataUser } from '../../stores/actions/user.action'

const Home = ({ navigation, user }) => {
  const dispatch = useDispatch()

 

  return (
    <>
      <StatusBar barStyle="dark-content" backgroundColor={'#f9f9f9'} />
      <SafeAreaView style={styles.SafeAreaView1} />
      <SafeAreaView style={styles.SafeAreaView2}>
        <View style={[styles.outerWrapper,{margin: 20}]}>
         <View>

          <View >
           <Image style={{ width: '100%' , height: 220 }} source={TodoLogo} />
          </View>
         
         <View>
         <Text style={{ textAlign: 'center', fontWeight: 'bold', fontSize: 20,marginTop: 20 }}  >Add What You Have Done</Text>
           <Text style={{ textAlign: 'center' }} >Productivity is never an accident. it is always the result of commitment to excellence, intelligent planning and focused Effor</Text>
         </View>

       


         </View>
        </View>
        
        
        <View style={{ margin: 10 }} >
         <Button
       titleStyle={{ fontWeight: 'bold', fontSize: 23 }}
       title="Get In"
       ViewComponent={LinearGradient} // Don't forget this!
       linearGradientProps={{
       colors: ['#2eae00', '#fff'],
       start: { x: 0.5, y: 1 },
       end: { x: 1, y: 1 },
      }}
      buttonStyle={{
        height: 50,
      }}
      onPress={()=> navigation.navigate("Login") } 
        />
        </View>




      </SafeAreaView>
    </>
  )
}

const mapStateToProps = state => {
  return {
    user: state.userReducer.users
  }
}

export default connect(mapStateToProps, null)(Home)
