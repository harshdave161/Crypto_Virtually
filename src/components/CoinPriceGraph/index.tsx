import React from 'react';
import {View, Text, Image, Dimensions} from 'react-native';
import style from './styles';
import {LineChart} from "react-native-chart-kit"

interface CoinPriceGraphProps {
    dataString : string;
}

const CoinPrizeGraph = ({ dataString }: CoinPriceGraphProps) => {

    const data = JSON.parse(dataString);

     return (
       <View style={style.root}>
            <LineChart
            data={{
            labels: ["-7D", "-6D","-5D", "-4D", "-3D", "-2D", "-1D", "now"],
            datasets: [
                {
                    data
                }
            ]
            }}
            width={Dimensions.get("window").width - 30} // from react-native
            height={220}
            yAxisLabel="$"
            yAxisSuffix="k"
            withInnerLines={false}
            withOuterLines={false}
            yAxisInterval={1} // optional, defaults to 1
            chartConfig={{
            backgroundColor: "#e26a00",
            backgroundGradientFrom: "#fff",
            backgroundGradientTo: "#ffffff",
            decimalPlaces: 2, // optional, defaults to 2dp
            color: (opacity = 1) => `rgba(18, 85, 255, ${opacity})`,
            labelColor: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
            style: {
                borderRadius: 16
            },
            propsForDots: {
                r: "0",
                strokeWidth: "1",
                stroke: "#fafafa"
            }
            }}
            style={{
            marginVertical: 8,
            borderRadius: 16
            }}
        />
        </View>
     )
}

export default CoinPrizeGraph;