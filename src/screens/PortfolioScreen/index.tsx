import React from 'react';
import {View, Text, Image, FlatList } from 'react-native';
import PortfolioCoin from '../../components/PortfolioCoin/Index';
import styles from './styles';
const image = require('../../../assets/images/Saly-10.png');
const PortfolioCoins = [
    {
        id: '1',
        name: 'virtual Dollars',
        symbol: 'USD',
        amount: 69.420,
        valueUSD: 69.420,
        image: 'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/avatars/1.jpg'
    },
    {
        id: '2',
        name: 'BitCoin',
        symbol: 'USD',
        amount: 1.12,
        valueUSD: 59.420,
        image: 'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/avatars/1.jpg'
    },
    {
        id: '3',
        name: 'Etherium',
        symbol: 'ETH',
        amount: 30,
        valueUSD: 30.150,
        image: 'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/avatars/1.jpg'
    },
    {
        id: '4',
        name: 'Etherium',
        symbol: 'ETH',
        amount: 30,
        valueUSD: 30.150,
        image: 'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/avatars/1.jpg'
    },
    {
        id: '5',
        name: 'Etherium',
        symbol: 'ETH',
        amount: 30,
        valueUSD: 30.150,
        image: 'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/avatars/1.jpg'
    },
    {
        id: '6',
        name: 'Etherium',
        symbol: 'ETH',
        amount: 30,
        valueUSD: 30.150,
        image: 'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/avatars/1.jpg'
    },
    {
        id: '7',
        name: 'Etherium',
        symbol: 'ETH',
        amount: 30,
        valueUSD: 30.150,
        image: 'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/avatars/1.jpg'
    },
    {
        id: '8',
        name: 'Etherium',
        symbol: 'ETH',
        amount: 30,
        valueUSD: 30.150,
        image: 'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/avatars/1.jpg'
    },
    {
        id: '9',
        name: 'Etherium',
        symbol: 'ETH',
        amount: 30,
        valueUSD: 30.150,
        image: 'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/avatars/1.jpg'
    }


]

const PortfolioScreen = () => {
     return (
         <View style={styles.root}>
         <Image style={styles.image} source={image} />
            <View style={styles.balanceContainer}>
                <Text style={styles.label}>Portfolio Balance</Text>
                <Text style={styles.balance}>$69.420</Text>
            </View>

            <FlatList 
            style={{width: '100%'}}
                data={PortfolioCoins} 
                renderItem={({item}) => <PortfolioCoin portfolioCoin= {item}/>}
            />

         </View>
     )
}

export default PortfolioScreen;