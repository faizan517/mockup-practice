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
          <Text style={styles.primeryName, { fontSize: 20, textAlign: 'center' }}>Chris Pinch Hello</Text>
          <Text style={styles.Secondaryname, { fontSize: 20, textAlign: 'center' }}>42584909837</Text>

        </View>
        <View style={styles.nameWrapper}>
          <Text style={styles.primeryName}>Chris Pinch</Text>
          <Text style={styles.Secondaryname}>Marketer</Text>
        </View>
      </ View>

      <View style={styles.containerWrapper}>

        <View style={styles.contantDetailWrapper}>
          <View style={styles.contantHeadingWrapper}>

            <Text style={{ textAlign: 'left', fontSize: 25,color:'green',fontWeight:'bold' }}> My Story</Text>
          </View>
          
          <View style={styles.contantHeadingDetailWrapper}>
            <Text style={styles.primeryName, { textAlign: 'left', fontSize: 18,top:10}}>Karachi is the capital of the Pakistani province of Sindh.
        </Text>
          </View>
        </View>

        <View style={styles.contantDetailWrapper1}>
          <View style={styles.contantHeadingWrapper1}>

            <Text style={{ fontSize: 25,color:'green',fontWeight:'bold' }}>Experience</Text>
          </View>
          
          <View style={styles.contantHeadingDetailWrapper1}>
            <Text style={styles.primeryName,{ fontSize: 21,color:'yellow' }}>Marker</Text>

        <View style={styles.contantHeadingDetailWrapper1}>
            <Text style={styles.primeryName, { fontSize: 18,right:12,top:5 }}>Jan 2016 till  Present
        </Text>
          </View>
          </View>
        </View>

        <View style={styles.contantDetailWrapper}>
          <View style={styles.contantHeadingWrapper}>

            <Text style={{ textAlign: 'left', fontSize: 24,color:'green',fontWeight:'bold' }}>Qualification</Text>
          </View>
          
          <View style={styles.contantHeadingDetailWrapper}>
            <Text style={styles.primeryName, { textAlign: 'left', fontSize: 18,top:3 }}>Bechelor Degree</Text>
          </View>
        </View>

        <View style={styles.contantDetailWrapper1}>
          <View style={styles.contantHeadingWrapper1}>

            <Text style={{ textAlign: 'left', fontSize: 25,color:'green',fontWeight:'bold' }}>Skill</Text>
          </View>
          
          <View style={styles.contantHeadingDetailWrapper1}>
            <Text style={styles.primeryName, { textAlign: 'left', fontSize: 18 }}>Bechelor Degree</Text>
          </View>
        </View>


      </View>



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
    // backgroundColor: 'red',
    position: 'absolute',
    bottom: '50%',
    left: '10%',
    borderWidth:4,
    borderColor:'white'
  },
  phoneDetailWrapper: {
    height: '13%',
    width: '100%',
    // backgroundColor: 'orange',   
  },
  detailWrapper: {
    height: '70%',
    width: '55%',
    alignSelf: 'flex-end',
    justifyContent: 'space-around',
    top:'15%'
  },
  nameWrapper: {
    height: '40%',
    width: '30%',
    alignSelf: 'flex-start',
    left: '10%',
    bottom: '10%',
    justifyContent: 'space-around'
  },
  primeryName: {
    fontSize: 20.5,
    fontWeight: 'bold',
    textAlign: 'center'
  },
  Secondaryname: {
    fontSize: 15,
    fontWeight: 'normal',
    textAlign: 'center',
  },
  containerWrapper: {
    height: '75%',
    width: '100%',
    
  },
  contantDetailWrapper: {
    height: '20%',
    width: '100%',
    backgroundColor: 'lightgray',
    alignSelf:'center',
    justifyContent:'center',
  },
  contantHeadingWrapper: {
    height: '30%',
    width: '100%',
    left: 9,
    justifyContent:'flex-end'
    
    
  },
  contantHeadingDetailWrapper: {
    height: '50%',
    width: '93%',
    alignSelf: 'center',
    
    
  },
  contantDetailWrapper1: {
    height: '20%',
    width: '100%',
    backgroundColor: 'white',
    elevation:1,
    justifyContent:'center'
    
    
  },
  contantHeadingWrapper1: {
    height: '30%',
    width: '100%',
    left: 10,
    justifyContent:'center'
    
    
  },
  contantHeadingDetailWrapper1: {
    height: '48%',
    width: '93%',
    alignSelf: 'center',
  },

});
