import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, ImageBackground, ScrollView } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.coverWrapper}>
        <ImageBackground source={require('./assets/cover.jpg')}
          style={{ width: '100%', height: '100%' }}>
        </ImageBackground>
      </View>
      <View style={styles.phoneDetailWrapper} >

        <View style={styles.profileWrapper}>
        <ImageBackground source={require('./assets/icon.png')}
          style={{ width: '100%', height: '100%' }}>
        </ImageBackground>
        </View>
        <View style={styles.detailWrapper}>
        <Text style={styles.primeryName,{fontSize:20,textAlign:'center'}}>Chris Pinch Hello</Text>
          <Text style={styles.Secondaryname,{fontSize:20,textAlign:'center'}}>0000000000</Text>

        </View>
        <View style={styles.nameWrapper}>
          <Text style={styles.primeryName}>Chris Pinch</Text>
          <Text style={styles.Secondaryname}>Marketer</Text>
        </View>
      </ View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  coverWrapper: {
    height: '25%',
    width: '100%',
  },
  profileWrapper: {
    height: '100%',
    width: '30%',
    backgroundColor: 'red',
    position: 'absolute',
    bottom: '50%',
    left: '10%',
  },
  phoneDetailWrapper:{
    height: '13%',
    width: '100%',
    backgroundColor: 'orange',   
  },
  detailWrapper:{
    height:'70%',
    width:'55%',
    backgroundColor:'white',
    alignSelf:'flex-end',
  },
  nameWrapper:{
    height:'40%',
    width:'30%',
    // backgroundColor:'skyblue',
    alignSelf:'flex-start',
    left:'10%',
    bottom:'10%',
    justifyContent:'space-around'
  },
  primeryName:{
    fontSize:20.5,
    fontWeight:'bold',
    textAlign:'center'
  },
  Secondaryname:{
    fontSize:15,
    fontWeight:'normal',
    textAlign:'center'
 
  },

});
