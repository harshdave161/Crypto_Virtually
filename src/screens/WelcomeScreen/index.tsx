import React, { useEffect} from 'react';
import {View, Text, Image, Pressable} from 'react-native';
import styles from './styles';
import { Auth, Hub } from 'aws-amplify';
import { CognitoHostedUIIdentityProvider } from "@aws-amplify/auth/lib/types";
import { useNavigation,  CommonActions } from '@react-navigation/core';
const image = require('../../../assets/images/Saly-1.png');
const googleButtonImage = require('../../../assets/images/googleButton.png');

const WelcomeScreen = () => {
    const navigation = useNavigation();

    useEffect(() => {
        const fetchUser = async () => {
          const user = await Auth.currentAuthenticatedUser();
          if (user) {
            console.log('user data', user)
            navigation.dispatch(
                CommonActions.reset({
                  index: 0,
                  routes: [
                    { name: 'Root' },
                  ],
                })
              );
           
          }
        }
    
        fetchUser();
      }, [])
    

      useEffect(() => {
        Hub.listen("auth", ({ payload: { event, data } }) => {
          if (event === "signIn") {
            navigation.dispatch(
                CommonActions.reset({
                  index: 0,
                  routes: [
                    { name: 'Root' },
                  ],
                })
              );
          }
        });
      }, [])
    
  const signInGoogle = async () => {
    navigation.navigate('Root');
    await Auth.federatedSignIn({ provider: "Google"});
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