import React from 'react'
import {View, Text, StyleSheet, TextInput } from 'react-native'


const CustomInput = ({value, setValue, placeholder, secureTextEntry}) => {

    return (
        <View style={Styles.container}>
           <TextInput 
            value={value}
            onChangeText={setValue}
            style={Styles.input}
            placeholder={placeholder} 
            secureTextEntry={secureTextEntry}
            />
        </View>
    );

};

const Styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        width: '100%',
        height: 40,
        
       
        borderColor:'#ced6e0',
        borderWidth: 1,
        borderRadius: 6,

        
        paddingHorizontal: 11,
        marginVertical: 7,
    },

    input: {
        marginTop: 4,
        padding: 10,
        color: 'black'
    },
});

export default CustomInput