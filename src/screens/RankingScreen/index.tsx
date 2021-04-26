import React from 'react';
import {View, Text, Image, FlatList } from 'react-native';
import UserRankingItem from '../../components/UserRankingItem/Index';
import styles from './styles';
const image = require('../../../assets/images/Saly-20.png');

const MarketCoins = [
    {
        id: '1',
        name: 'virtual Dollars',
        image: 'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/avatars/1.jpg',
        netWorth: 65899,
    },
    {
        id: '2',
        name: 'BitCoin',
        image: 'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/avatars/1.jpg',
        netWorth: 5899,
    },
    {
        id: '3',
        name: 'Etherium',
        image: 'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/avatars/1.jpg',
        netWorth: 99,
    },


]

const RankingScreen = () => {
    return (
        <View style={styles.root}>
       
           <FlatList 
           style={{width: '100%'}}
               data={MarketCoins} 
               renderItem={({item, index}) => <UserRankingItem user={item} place={index + 1}/>}
               showsVerticalScrollIndicator={false}
               ListHeaderComponentStyle={{alignItems: 'center'}}
               ListHeaderComponent={()=> (
                   <>
                       <Image style={styles.image} source={image} />
                       <Text style={styles.label}>Rankings</Text>
                   </>
               )}
           />

        </View>
    )
}

export default RankingScreen;