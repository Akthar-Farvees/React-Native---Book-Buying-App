import React ,{ useState }from 'react'
import {View, Text, StyleSheet, ScrollView } from 'react-native'
import CustomInput from '../../components/CustomInput'
import CustomButton from '../../components/CustomButton'
import SocialSignInButtons from '../../components/SocialSignInButtons'
import { useNavigation } from '@react-navigation/native'

const ConfirmEmailScreen = () => {
    const [code, setCode] = useState('');
  
    const navigation = useNavigation();

  const onConfirmPressed = () => {
    //   console.warn("Confirm Pressed");
    navigation.navigate('Home')
  }

  const onSignInPress = () => {
    // console.warn("Clicked Sign In");
    navigation.navigate('SignIn')
  }

  const onResendPress = () => {
    console.warn("Resend Pressed");
  }

  
  
  return (
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={Styles.root}>
           
           <Text style={Styles.title}>Confirm your email</Text>

            <CustomInput 
                placeholder="Enter your confirmation code" 
                value={code} 
                setValue={setCode} 
            />
           
            <CustomButton text="Confirm" onPress={onConfirmPressed}/>          

            <CustomButton 
                text="Resend code" 
                onPress={onResendPress}
                type="SECONDARY"
            />

            <CustomButton 
                text="Back to sign" 
                onPress={onSignInPress}
                type="TERTIARY"
            />

        </View>
        </ScrollView>
    );

};

const Styles = StyleSheet.create({
    root: {
        alignItems: 'center',
        padding: 30,
        marginTop: 40,
        
    },

    title: {
        fontSize: 28,
        fontWeight: 'bold',
        color: '#051C60',
        margin: 10,
    },

    text: {
        color: 'gray',
        marginVertical: 10,
    },

    link: {
        color: '#FDB075',
    },
});

export default ConfirmEmailScreen