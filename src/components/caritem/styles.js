import { StyleSheet,Dimensions } from 'react-native'

const styles = StyleSheet.create({

    carContainer: {
        height: Dimensions.get('screen').height,
        width: '100%',
    },
    titles: {
        marginTop: '30%',
        width: '100%',
        alignItems: 'center'
    },

    title: {
        fontSize: 40,
        fontWeight: '500'
    },

    subTitle: {
        fontSize: 16,
        fontWeight: '500',
        color: '#5c5e62'
    },

    image: {
        height: '100%',
        width: '100%',
        resizeMode: 'cover',
        position: 'absolute'
    },

    buttonContainer:{
        bottom:50,
        position:'absolute',
        width:'100%',
    },

})

export default styles;