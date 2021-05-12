import { useRoute } from '@react-navigation/core';
import React, { useEffect, useState } from 'react';
import {View, Text, Image, TextInput, Pressable, Alert, KeyboardAvoidingView, Platform} from 'react-native';
import { API, graphqlOperation } from 'aws-amplify';
import { exchangeCoins } from '../../graphql/mutations';
import styles from './styles';
const image = require('../../../assets/images/Saly-31.png');

const CoinExchangeScreen = () => {
   const [coinAmount, setCoinAmount] = useState('')
   const [coinUSDValue, setCoinUSDValue] = useState('')

   const maxUsd = 100000; // fetch from api 

   const route = useRoute();
   // Main Logic
   useEffect(() => {
      const amount = parseFloat(coinAmount);
      if(!amount && amount !== 0) {
         setCoinAmount("");
         setCoinUSDValue("");
         return;
      }
      setCoinUSDValue((amount * coin?.currentPrice).toString());
   }, [coinAmount]);
   // Main Logic
   useEffect(() => {
      const amount = parseFloat(coinUSDValue);
      if(!amount && amount !== 0) {
         setCoinAmount("");
         setCoinUSDValue("");
         return;
      }
      setCoinAmount((amount / coin?.currentPrice).toString());
   }, [coinUSDValue]);

   const isBuy = route?.params?.isBuy;
   const coin = route?.params?.coin;
   const portFolioCoin = route?.params?.portFolioCoin;

   const placeOrder = async () => {
      try{
         const response = await API.graphql(
            graphqlOperation(
               exchangeCoins, {
            coinId: coin.id,
            isBuy,
            amount: parseFloat(coinAmount),
         }))
      } catch (e){
         console.error(e);
      }
   }


   const onPlaceOrder = () => {

      if (isBuy && (parseFloat(coinUSDValue) > maxUsd)) {
         console.log(`Not Enough Mac USD Coins. Max: ${maxUsd}`);
         Alert.alert('Error', `Not Enough Mac USD Coins. Max: ${maxUsd}`);
         return;
      }
      if(!isBuy && (!portFolioCoin || parseFloat(coinAmount) > portFolioCoin.amount)){
         Alert.alert('Error', `Not Enough ${coin.symbol} Coins. Max: ${coin.amount || 0}`);
         return;
      }

      PlaceOrder()
   } 

     return (
        <KeyboardAvoidingView style={styles.root} behavior={Platform.OS === "ios" ? "padding" : "height"} >
            <Text style={styles.title}>
               {isBuy ? 'Buy ' : 'Sell' } 
               {coin.name}
            </Text>
            <Text style={styles.subTitle}>
               1 {coin?.symbol} {'='} ${coin?.currentPrice}
            </Text>
            <Image style={styles.image} source={image} />

            <View style={styles.inputsContainer}>
               <View style={styles.inputContainer}>
                  <TextInput placeholder="0" keyboardType="decimal-pad" value={coinAmount} onChangeText={setCoinAmount}/> 
                  <Text>{coin?.symbol}</Text>
               </View>
               <Text style={styles.equals}>=</Text>
               <View style={styles.inputContainer}>
                  <TextInput placeholder="0"  keyboardType="decimal-pad" value={coinUSDValue} onChangeText={setCoinUSDValue} />
                  <Text>USD</Text>
               </View>
            </View>
            <Pressable style={styles.button} onPress={onPlaceOrder}>
            <Text style={styles.buttonText}>Place Order</Text>
            </Pressable>
        </KeyboardAvoidingView>   
     )
}

export default CoinExchangeScreen;