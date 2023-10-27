import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Image } from 'react-native';
import OutlinedInput from '../components/OutlinedInput';
import ButtonComponent from '../components/BottonComponent';

const ForgetPassword = () => {
  const [email, setEmail] = useState('');

  const handleSendEmail = () => {
    // Send an email to the user with instructions on how to reset their password.
  };

  return (
    <View style={styles.container}>
      <View style={styles.ImageView}>
      <Image
        source={require('../assets/forgetImage.png')}
      />
      </View>
      <View>
      <View style={styles.textView}>
        <Text style={styles.titleStyle}>Forget Password</Text>
        <Text style={styles.describeStyle}>Don’t worry! It happens, Please enter 
              the  email address associated with
          your account.</Text>
      </View>
      <View>
      <View style={styles.inputView}>
      <OutlinedInput
        label="Email"
        value={email}
        onChangeText={(value) => setText(value)}
      />
      </View>
      </View>
       <View style={styles.buttonView}>
       <ButtonComponent
        title={"Next"}
        onPress={()=> navigation.navigate('ForgetPassword')}
      />
       </View>
      </View>
    </View>
  );
};

export default ForgetPassword;

const styles = StyleSheet.create({
  container:{flex: 1, backgroundColor:'white'},
  ImageView:{height:'40%', alignItems:'center', justifyContent:'center'},
  titleStyle:{fontSize:30, color:'#161616'},
  describeStyle:{fontSize:18, color:'#6B6B6B'},
  textView:{justifyContent:'center' , margin:25},
  inputView: {
    width: '100%',
    marginBottom: 30,
    alignItems:'center',
    justifyContent:'center',
  },
  buttonView:{
    alignItems:'center',
    justifyContent:'center',
    marginTop:20,
  }
});