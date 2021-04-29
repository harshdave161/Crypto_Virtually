import React, { useState } from 'react';
import {View, Text, Image,  Pressable} from 'react-native';
import styles from './styles';
import { AntDesign } from "@expo/vector-icons";
import PercentageChange from '../../components/PercentageChange';

const CoinDetailsScreen = () => {
    const [coinData, setCoinData] = useState({
        id: '1',
        image: 'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/avatars/1.jpg', 
        symbol: 'ETH',
        valueChange24H: 30,
        valueChange1D: 1.50,
        valueChange7D: -7.0,
        valueUSD: 30.150,
        name: 'BitCoin',
        currentPrice: 254,
        amount: 45
    });

    const onBuy = () => {

    }
    
    const onSell = () => {

    }

     return (
        <View style={styles.root}>
             <View style={styles.topContainer}>
                 <View style={styles.left}>
                     <Image style={styles.image} source={{ uri: coinData.image }} />
                     <View>
                         <Text style={styles.name}>{coinData.name}</Text>
                         <Text style={styles.symbol}>{coinData.symbol}</Text>
                     </View>
                 </View>
                 <View style={{ alignItems: 'flex-end' }}>
                     <AntDesign name={'staro'} size={30} color={'#2f95dc'} />
                 </View>
             </View>

            <View style={styles.row}>
                <View>
                    <Text style={styles.label}>Current Prize</Text>
                    <Text style={styles.value}>{coinData.currentPrice}</Text>
                </View>
                
                <View  style={{flexDirection: 'row'}}>
                    <View style={styles.valueContainer}>
                        <Text style={styles.label}>1 hour</Text>
                        <PercentageChange value={coinData.valueChange24H} />
                    </View>
                    <View style={styles.valueContainer}>
                        <Text style={styles.label}>1 day</Text>
                        <PercentageChange value={coinData.valueChange1D} />
                    </View>
                    <View style={styles.valueContainer}>
                        <Text style={styles.label}>7 days</Text>
                        <PercentageChange value={coinData.valueChange7D} />
                    </View>
                </View>
            </View>

                <View style={styles.row}>
                    <Text>Postion</Text>
                    <Text>
                        {coinData.symbol} {coinData.amount}
                        {' '} 
                        (${coinData.currentPrice * coinData.amount})
                    </Text>
                </View>
                

                <View style={[styles.row, { marginTop: 'auto'}]}>
                    <Pressable
                    style={[styles.button, { backgroundColor: '#20b100' }]}
                    onPress={onBuy}>
                    <Text style={styles.buttonText}>Buy</Text>
                    </Pressable>

                    <Pressable
                    style={[styles.button, { backgroundColor: '#ff0000' }]}
                    onPress={onSell}>
                    <Text style={styles.buttonText}>Sell</Text>
                    </Pressable>
                </View>

        </View>
     )
}

export default CoinDetailsScreen;