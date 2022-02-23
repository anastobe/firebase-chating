import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, SectionList } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

//icons
import Icon from 'react-native-vector-icons/Ionicons'
import { useDispatch } from 'react-redux';

//color
import { lightFerozee } from './Color';

const TextInputComponent = ({
  // propss,
  TextChange = () => { },
  value = "",


  ...props

  }) => {

  const [iconName, seticonName] = useState(true)    
  
  const [hideKey, sethideKey] = useState(props.hideKey)    
  //seepassword
  const [seepassword, setseepassword] = useState(true)

  return (
    <View>

      <View style={{ flexDirection: 'row', alignItems: 'center' }} >
      <Icon name={props.InputFieldIcons} size={25} color="#7C7C7D" /><Text>{props.PlaceHolderHeading} </Text>
      </View>

      <View style={[styles.view,{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }]}>
        <View style={{ width: '90%' }} > 

        <TextInput
          placeholder={props.PlaceHolderName}
          onChangeText={TextChange}
          value={value}
          secureTextEntry={ hideKey === 'hiddenkey' && seepassword === true ? true : false}        
        />

        </View>
        
        <TouchableOpacity  onPress={ ()=> {setseepassword(!seepassword), seticonName(!iconName)} } >
        { hideKey === 'hiddenkey' ? <Icon style={{ marginRight: 10 }} name={iconName  ? 'eye-off-outline' : 'eye-outline' } size={22} color="#000" /> : <></> }
        </TouchableOpacity> 

        
      
      </View>


    </View>
    );
};


const styles = StyleSheet.create({
  view: {
    borderColor: lightFerozee,
    borderWidth: 1,
    
  },
});

export default TextInputComponent;





// do()
// {
//   //entering
//   choosing[i] = true;

//   number[i] = max(number[0] ,number[1], number[2]  , number[n-1] + 1 );
  
//   choosing[i] = false;

//   for(j=0;j<n;j++){
//     while(choosing[j])
//     while((number[j] != 0) && (number([j],j) < number([i],i) ))
//   }

//   //critical Section

//   number[i] = 0;

//   //reminder section
  
// }









// while(1)

// flag[i] = true;
// turn == j;
// while(flag[j] && turn == [j])

//   //critical Section

//   flag[i] = false;

//   // reminde Section  


// do(){

// }
// while(1)