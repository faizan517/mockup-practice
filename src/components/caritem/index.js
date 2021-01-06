import React from 'react'
import { View, ImageBackground, Text } from 'react-native'

import styles from './styles';
import StyledButton from '../StyledButton';


export default function Caritem(props) {

    const {name,tagline,image}=props.car

    return (

        <View style={styles.carContainer}>
            <ImageBackground
                source={image}
                style={styles.image}
            />
            <View style={styles.titles}>
                <Text style={styles.title}>
                    {name}
                </Text>
                <Text style={styles.subTitle}>
                    {tagline}
                </Text>
            </View>

            <View style={styles.buttonContainer}>

                <StyledButton type="pimary" contant='coustom Order'
                    onPress={() => (
                        console.warn('Coustom Order')
                    )} />

                <StyledButton type="Secondary" contant='Exisiting Inventory'
                    onPress={() => (
                        console.warn('Exisiting Inventory')
                    )} />
            </View>

        </View>
    )
}