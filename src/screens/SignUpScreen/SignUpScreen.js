import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, KeyboardAvoidingView, Platform } from 'react-native';
import CustomInput from '../../components/CustomInput';
import CustomButton from '../../components/CustomButton';
import SocialSignInButtons from '../../components/SocialSignInButtons';
import { useNavigation } from '@react-navigation/native';

const ConfirmEmailScreen = () => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [passwordRepeat, setpasswordRepeat] = useState('');

    const navigation = useNavigation();

    const onRegisterPressed = () => {
        navigation.navigate('ConfirmEmail');
    };

    const onSignInPress = () => {
        navigation.navigate('SignIn');
    };

    const onTermsOfUsePressed = () => {
        console.warn('On Terms Of Use Pressed');
    };

    const onPrivacyPressed = () => {
        console.warn('On Privacy Pressed');
    };

    return (
        <KeyboardAvoidingView
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
            style={{ flex: 1 }}
        >
            <ScrollView
                contentContainerStyle={{ flexGrow: 1 }} // Ensures the ScrollView takes up the full height
                showsVerticalScrollIndicator={false}
                keyboardShouldPersistTaps="handled"
            >
                <View style={Styles.root}>
                    <Text style={Styles.title}>Create Account</Text>

                    <CustomInput
                        placeholder="Username"
                        value={username}
                        setValue={setUsername}
                    />

                    <CustomInput
                        placeholder="Email"
                        value={email}
                        setValue={setEmail}
                    />

                    <CustomInput
                        placeholder="Password"
                        value={password}
                        setValue={setPassword}
                        secureTextEntry={true}
                    />

                    <CustomInput
                        placeholder="Repeat Password"
                        value={passwordRepeat}
                        setValue={setpasswordRepeat}
                        secureTextEntry={true}
                    />

                    <CustomButton text="Register" onPress={onRegisterPressed} />

                    <Text style={Styles.text}>
                        By registering, you confirm that you accept our{' '}
                        <Text style={Styles.link} onPress={onTermsOfUsePressed}>
                            Terms of Use
                        </Text>{' '}
                        and{' '}
                        <Text style={Styles.link} onPress={onPrivacyPressed}>
                            Privacy Policy
                        </Text>
                    </Text>

                    <SocialSignInButtons />

                    <CustomButton
                        text="Don't have an account? Sign in"
                        onPress={onSignInPress}
                        type="TERTIARY"
                    />
                </View>
            </ScrollView>
        </KeyboardAvoidingView>
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

    title: {
        fontSize: 28,
        fontWeight: 'bold',
        color: '#051C60',
        margin: 10,
    },

    text: {
        color: 'gray',
        marginVertical: 10,
        marginBottom: 50    ,
    },

    link: {
        color: '#FDB075',
    },
});

export default ConfirmEmailScreen;
