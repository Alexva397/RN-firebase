import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';

const Register = () => {
    const [userEmail, setUserEmail] = useState('');
    const [userPassword, setUserPassword] = useState('');

    const onEmailUpdate = (email) => {
        setUserEmail(email);
        console.log(email);
    };

    const onPwUpdate = (pw) => {
        setUserPassword(pw);
        console.log(pw);
    };

    const handleUserSubmit = () => {

    }

    return (
        <View style={styles.screen}>
            <TextInput 
                placeholder='Email'
                onChangeText={onEmailUpdate}
            />
            <TextInput 
                placeholder='Password'
                secureTextEntry={true}
                onChangeText={onPwUpdate}
            />
            <Button 
                title='Register'
                onPress={() => handleUserSubmit()}
            />

        </View>
    );
};

export default Register;

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
    }
});
