import React from 'react';
import {View, Text, Image, FlatList } from 'react-native';
import MarketCoin from '../../components/MarketCoin/Index';
import styles from './styles';
const image = require('../../../assets/images/Saly-17.png');

const MarketCoins = [
    {
        id: '1',
        name: 'virtual Dollars',
        symbol: 'USD',
        valueChange24H: 69.420,
        valueUSD: 69.420,
        image: 'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/avatars/1.jpg'
    },
    {
        id: '2',
        name: 'BitCoin',
        symbol: 'USD',
        valueChange24H: -1.12,
        valueUSD: 59.420,
        image: 'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/avatars/1.jpg'
    },
    {
        id: '3',
        name: 'Etherium',
        symbol: 'ETH',
        valueChange24H: 30,
        valueUSD: 30.150,
        image: 'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/avatars/1.jpg'
    },


]

const MarketScreen = () => {
    return (
        <View style={styles.root}>
       
           <FlatList 
           style={{width: '100%'}}
               data={MarketCoins} 
               renderItem={({item}) => <MarketCoin marketCoin= {item}/>}
               showsVerticalScrollIndicator={false}
               ListHeaderComponentStyle={{alignItems: 'center'}}
               ListHeaderComponent={()=> (
                   <>
                       <Image style={styles.image} source={image} />
                       <Text style={styles.label}>Market</Text>
                   </>
               )}
           />

        </View>
    )
}

export default MarketScreen;