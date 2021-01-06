import React from 'react';
import {View,Text,Pressable} from 'react-native';

import styles from './styles'

export default function StyledButton(props){

    const { type,contant,onPress } =props;
    const background = type === 'pimary' ? '#171A20CC' : '#FFFFFFA6';
    const titleColor = type === 'pimary' ? '#FFFFFF' :'#171A20';

return(

    <View style={styles.buttonContainer}>

        <Pressable 
        style={[styles.button,{backgroundColor: background}]}
        onPress={()=> onPress()}>
            <Text style={[styles.text,{color:titleColor}]}>{contant}</Text>
        </Pressable>
        
    </View>
)   
}