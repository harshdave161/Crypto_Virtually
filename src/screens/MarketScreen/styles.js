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
    label:{
        fontSize: 18,
        fontWeight: 'bold',
    },
    balance:{
        fontSize: 36,
        fontWeight: 'bold',
    }

});

export default styles;