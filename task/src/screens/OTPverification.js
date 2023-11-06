import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Image } from 'react-native';
import OutlinedTextInput from '../components/OutlinedTextInput ';
import ButtonComponent from '../components/BottonComponent';
import OTPInput from '../components/OTPinput';

const OTPverification = ({navigation}) => {
  

  const handleSendEmail = () =>   {};

  return (
    <View style={styles.container}>
      <View style={styles.ImageView}>
      <Image
        source={require('../assets/password.png')}
      />
      </View>
      <View>
      <View style={styles.textView}>
        <Text style={styles.titleStyle}>Enter OTP</Text>
        <Text style={styles.describeStyle}>Please enter your 5 digit verification code for password.</Text>
      </View>
      <View>
      <View style={styles.inputView}>
        <OTPInput/>
      </View>
       <View style={styles.buttonView}>
       <ButtonComponent
        title={"Next"}
        onPress={()=> navigation.navigate('OTPverification')}
      />
      </View>
       </View>
      </View>
    </View>
  );
};

export default OTPverification;

const styles = StyleSheet.create({
  container:{flex: 1, backgroundColor:'white'},

  ImageView:{height:'40%', alignItems:'center', justifyContent:'center'},
  titleStyle:{fontSize:30, color:'#161616'},
  describeStyle:{fontSize:18, color:'#6B6B6B'},
  textView:{justifyContent:'center' ,marginLeft:25},
  inputView: {
    width: '100%',
    marginTop:90,
    height:'33%',
    alignItems:'center',
    justifyContent:'center',
  },
  buttonView:{
    marginTop: 25,
    alignItems:'center',
    justifyContent:'center',
  }
});