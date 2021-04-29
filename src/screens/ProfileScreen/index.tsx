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

        const signOut = ()=>{
            console.warn('sign out');
        }
     return (
         <View style={styles.root}>
         <Image style={styles.image} source={image} />
            <View>
                <View style={styles.userContainer}>
                <View style={styles.left}>
                    <Image style={styles.userImage} source={{ uri: image}} />
                    <View>
                        <Text style={styles.name}>{user.name}</Text>
                        <Text style={styles.email}>{user.email}</Text>
                    </View>
                </View>
                <View style={{alignItems: 'flex-end'}}>
                        <Text style={styles.value}>${user.netWorth}</Text>
                </View>
            </View>
            </View>
            <Pressable onPress={signOut} style={{marginTop: 'auto'}}>
                <Text>Sign Out</Text>
            </Pressable>
         </View>
     )
}

export default ProfileScreen;