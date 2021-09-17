import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

const Landing = ({ navigation }) => {
    return (
        <View style={styles.screen}>
            <Button 
                title='Register'
                onPress={() => navigation.navigate('register')}
            />
            <Button 
                title='Log In'
                onPress={() => navigation.navigate('login')}
            />
        </View>
    );
};

export default Landing;

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
    }
});
