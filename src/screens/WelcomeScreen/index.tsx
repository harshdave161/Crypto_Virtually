import React from 'react';
import {View, Text, Image, Pressable} from 'react-native';
import styles from './styles';
const image = require('../../../assets/images/Saly-1.png');
const googleButtonImage = require('../../../assets/images/googleButton.png');

const WelcomeScreen = () => {
    const signInGoogle = () => {

    }
     return (
         <View style={styles.root}>
             <Image style={styles.image} source={image} />
             <Text style={styles.header1}>Welcome to Crypto Virtually</Text>
             <Text style={styles.header2}>Invest Your virtuall $100.000 and compete with others</Text>
             <Pressable style={styles.googleButton} onPress={signInGoogle}>
                 <Image style={styles.buttonImage} source={googleButtonImage}/>
             </Pressable>
         </View>
     )
}

export default WelcomeScreen;