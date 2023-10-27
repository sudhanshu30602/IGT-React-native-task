import React, { useState } from 'react';
import { View, Text } from 'react-native';
import { TextInput } from 'react-native-paper';

const OutlinedInput = ({ label, value, onChangeText }) => {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <View>
      <CustomOutlinedTextInput
        label={label}
        value={value}
        onChangeText={onChangeText}
        //onFocus={() => setIsFocused(true)}
       // onBlur={() => setIsFocused(true)}
        style={{
          backgroundColor:  'transparent',
          width:340,
          //height:'18%',
          borderRadius:25
           // Set the background color to make it transparent  'transparent',
        }}
        theme={{
          colors: {
            primary: isFocused ? '#B8FFB2' : '#B8FFB2', // Adjust the label color when focused or not
          },
        }}
        
      />
    </View>
  );
};


const CustomOutlinedTextInput = (props) => {
  return (
    <TextInput
      {...props}
      mode="outlined" // Force the outlined mode
    />
  );
};

export default OutlinedInput;