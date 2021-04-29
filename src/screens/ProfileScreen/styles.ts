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
    userContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        height: 50,
        marginVertical: 10,
        width: '100%'
      },
      userImage: {
        height: 100,
        width: 100,
        marginRight: 10,
        borderRadius: 50,
      },
      left: {
        flexDirection: 'row',
        alignItems: 'center',
      },
      name: {
        fontWeight: 'bold',
        marginBottom: 5,
      },
      email: {
        fontWeight: 'bold',
        marginBottom: 5,
      },
      symbol: {
        color: '#6b6b6b',
      },
      value: {
        fontSize: 18,
        fontWeight: '600',
        marginBottom: 5,
      },

});

export default styles;