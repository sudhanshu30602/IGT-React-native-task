import React, { useState, useRef} from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';

const OTPInput = () => {
  const [otp, setOtp] = useState(['', '', '', '', '']); // Initialize an array of 4 empty strings
  const otpInputRefs = [
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null),
  ];

  const handleOtpChange = (text, index) => {
    if (/^\d+$/.test(text) || text === '') {
      const newOtp = [...otp];
      newOtp[index] = text;
      setOtp(newOtp);
     
      
      if (text === '' && index > 0) {
        otpInputRefs[index - 1].current.focus();
      } else if (text !== '' && index < otp.length - 1) {
        otpInputRefs[index + 1].current.focus();
      }
    }
  };

  // Create an array of refs for TextInput components
 // const otpInputRefs = [];
  for (let i = 0; i < otp.length; i++) {
    otpInputRefs[i] = React.createRef();
  }

  return (
    <View style={styles.container}>
      <View style={styles.otpContainer}>
        {otp.map((digit, index) => (
          <TextInput
            key={index}
            style={styles.otpInput}
            onChangeText={(text) => handleOtpChange(text, index)}
            value={digit}
            keyboardType="numeric"
            maxLength={1}
            ref={otpInputRefs[index]}
          />
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    marginBottom: 20,
  },
  otpContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  otpInput: {
    width: 40,
    borderColor:'#B8FFB2',
    color:'#161616',
    height: 60,
    borderWidth: 2,
    borderRadius: 5,
    textAlign: 'center',
    marginRight: 15,
    fontSize: 18,
  },
});

export default OTPInput;
