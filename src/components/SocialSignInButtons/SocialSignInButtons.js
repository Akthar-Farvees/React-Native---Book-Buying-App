import React from 'react'
import {View, ScrollView } from 'react-native'
import CustomButton from '../CustomButton';


const SocialSignInButtons = () => {
  

  const onSignInApple = () => {
    console.warn("Clicked Apple");
  }

  const onSignInFacebok = () => {
    console.warn("Clicked Facebook");
  }

  const onSignInGoogle = () => {
    console.warn("Clicked Google");
  }

  
  
  return (
     
        <>
           
        <CustomButton 
                text="Sign In with facebook" 
                onPress={onSignInFacebok}
                bgColor="#E7EAF4"
                fgColor="#4765A9"
            />
            <CustomButton 
                text="Sign In with Google" 
                onPress={onSignInGoogle}
                bgColor="#FAE9EA"
                fgColor="#DD4D44"
            />
            <CustomButton 
                text="Sign In with Apple" 
                onPress={onSignInApple}
                bgColor="#e3e3e3"
                fgColor="#363636"
            />

        </>
        
    );

};

export default SocialSignInButtons