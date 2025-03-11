import React ,{ useState }from 'react'
import {View, Text, Image, StyleSheet, useWindowDimensions, ScrollView } from 'react-native'
import { getAssetByID } from 'react-native-web/dist/cjs/modules/AssetRegistry'
import Logo from '../../../assets/Image/Books.png'
import CustomInput from '../../components/CustomInput'
import CustomButton from '../../components/CustomButton'
import SocialSignInButtons from '../../components/SocialSignInButtons'
import { useNavigation } from '@react-navigation/native';

const SignInScreen = () => {
    const [username, setUsername] = useState();
    const [password, setPassword] = useState();
  
  const {height} = useWindowDimensions();
  const navigation = useNavigation();

  const onSignInPressed = () => {
    // console.warn("onSignInPressed");
      navigation.navigate('Home');
  }

  const onForgotPasswordPressed = () => {
     // console.warn("onForgotPasswordPressed");
    navigation.navigate('ForgotPassword')
  }

  const onSignUp = () => {
    // console.warn("Clicked Sign Up");
    navigation.navigate('SignUp')
  }

  
  
  return (
      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{ flexGrow: 1 }} >
        <View style={Styles.root}>
            <Image 
                source={Logo} 
                style = {[Styles.logo, {height: height * 0.3} ]} 
                resizeMode="contain"
            />

            <CustomInput 
                placeholder="Username" 
                value={username} 
                setValue={setUsername} 
                style={Styles.usernameInput}
            />

            <CustomInput 
                placeholder="Password" 
                value={password} 
                setValue={setPassword} 
                secureTextEntry={true}
                style={Styles.passwordInput}
            />

            <CustomButton text="Sign In" onPress={onSignInPressed}/>

            <CustomButton 
                text="Forgot password" 
                onPress={onForgotPasswordPressed} 
                type="TERTIARY"
            />

           <SocialSignInButtons/>

            <CustomButton 
                text="Don't have a account? create one" 
                onPress={onSignUp}
                type="TERTIARY"
            />
        </View>
        </ScrollView>
    );

};

const Styles = StyleSheet.create({
    root: {
        alignItems: 'center', // Aligns items vertically in the center
        justifyContent: 'flex-start', // Aligns items at the top of the container
        padding: 30,
        marginTop: 40,
        backgroundColor: 'white',
        flex: 1,
        display: 'flex',
    },

    logo: {
        width: '80%',
        maxWidth: 300,
        maxHeight: 300,
    },
});

export default SignInScreen