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
        
       
        borderColor:'#051C60',
        borderWidth: 1,
        borderRadius: 20,

        paddingHorizontal: 15,
        marginVertical: 7,
    },

    input: {
        marginTop: 4,
    },
});

export default CustomInput