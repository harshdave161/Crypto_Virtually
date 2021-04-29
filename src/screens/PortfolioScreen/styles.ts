import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    root:{
        padding: 20,
        alignItems: 'center',
        flex: 1,
        backgroundColor: 'white'
    },
    image:{
        height: 200,
        resizeMode: 'contain',
    },
    balanceContainer:{
        marginVertical: 20,
        width: '100%',
    },
    label:{
        fontSize: 18,
        fontWeight: 'bold',
        color: '#777777'
    },
    balance:{
        fontSize: 36,
        fontWeight: 'bold',
    }

});

export default styles;