import React from 'react';
import {View, Text, Image} from 'react-native';

export interface PercentageChangeProps {
    value: number,
    style?: object
}

const PercentageChange = ({value, style = {}}: PercentageChangeProps) => {
     return (
       <Text style={{color: value > 0 ? '#398f0a' : '#f10000'}}>
           {value > 0 && '+'} {value} %
        </Text>
     )
}

export default PercentageChange;