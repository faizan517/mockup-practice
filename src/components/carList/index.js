import React from 'react';
import {View,FlatList,Dimensions} from 'react-native';

import styles from './styles';
import cars from './cars'
import Caritem from '../caritem';

export default function Carlist(){
    return(
        <View style={styles.container}>
            <FlatList
            data={cars}
            renderItem={({item})=> <Caritem car={item}/>}
            showsVerticalScrollIndicator={false}
            snapToAlignment={'start'}
            decelerationRate={'fast'}
            snapToInterval={Dimensions.get('screen').height}
            />
        </View>
    )
}