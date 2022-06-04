import React from 'react'
import {View, Text, StyleSheet, Pressable} from 'react-native'


const CustomButton = ({onPress,text, type = "PRIMARY", bgColor, fgColor}) => {

    return (
        <Pressable 
            onPress={onPress} 
            style={[Styles.container, 
            Styles[`container_${type}`],
            bgColor ? {backgroundColor: bgColor} : {}
        ]}>
        <Text 
             style={[Styles.text, 
             Styles[`text_${type}`],
             fgColor ? {color: fgColor} : {},
        ]}>
            
            {text}
        
        </Text>
        </Pressable>
    );

};

const Styles = StyleSheet.create({
   container: {
    width: '100%',

    padding: 15,
    marginVertical: 15,

    alignItems: 'center',
    borderRadius: 30,
   },

   container_PRIMARY : {
    backgroundColor: '#051C60',
   },

   container_SECONDARY: {
    borderColor: '#051C60',
    borderWidth: 2,
   },

   container_TERTIARY: {},

   text: {
    fontWeight: 'bold',
    color: 'white',
   },

   text_SECONDARY: {
    color: '#051C60',
   },

   text_TERTIARY: {
    color: 'gray',
   },


});

export default CustomButton