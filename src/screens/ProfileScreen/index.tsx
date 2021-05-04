import { useNavigation } from '@react-navigation/core';
import { CommonActions } from '@react-navigation/native';
import { Auth } from 'aws-amplify';
import React, {useState} from 'react';
import {View, Text, Image, Pressable} from 'react-native';
import styles from './styles';
const image = require('../../../assets/images/Saly-16.png');

const ProfileScreen = () => {
    const [user, setUser] = useState({
        id: '1',
        email: 'harshdave161@gmail.com',
        name: 'harsh',
        image: 'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/avatars/1.jpg',
        netWorth: 5145
        });

        const navigation = useNavigation();

        const signOut = async ()=>{
            await Auth.signOut();
            // navigation.dispatch(
            //   CommonActions.reset({
            //     index: 0,
            //     routes: [
            //       { name: 'Welcome' },
            //     ],
            //   })
            // );
        }
     return (
        <View style={styles.root}>
      <Image style={styles.image} source={image} />

      <View style={styles.userContainer}>
        <Image style={styles.userImage} source={{ uri: user.image}} />
        <View>
          <Text style={styles.name}>{user.name}</Text>
          <Text style={styles.email}>{user.email}</Text>
          <Text style={styles.value}>${user.netWorth}</Text>
        </View>
      </View>

      <Pressable onPress={signOut} style={{marginTop: 'auto'}}>
        <Text>Sign out</Text>
      </Pressable>
    </View>
     )
}

export default ProfileScreen;