import {React, useState,} from 'react';
import { StyleSheet , View, Text, Image, TextInput, TouchableOpacity} from 'react-native';
import OutlinedInput from '../components/OutlinedInput';
import ButtonComponent from '../components/BottonComponent';
import { Button } from 'react-native-paper';


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
 
  inputView: {
    width: '100%',
    marginBottom: 30,
    alignItems:'center',
    justifyContent:'center',
  },

  welcomeView:{
    width:'100%',
    justifyContent:'center',
    marginBottom:10,
  },
  welcomeText:{
     fontSize: 27,
     color:'#161616',
     marginLeft: 30,
  },
  signinText:{
    fontSize: 27,
    color:'#5E9959',
    marginLeft: 30,
  },
  forgetText:{marginLeft:270, marginBottom:20},
  buttonView:{alignItems:'center'},
  mainIconView:{alignItems:'center', marginTop:20},
  iconView:{flexDirection:'row', marginTop: 5},
  iconStyle: {
    width: 30,
    height: 30,
    margin: 5,
  },
  textView:{height: '20%',justifyContent:'center', alignItems:'center'},
  textStyle:{fontSize:18, color:'#161616', fontWeight:'500'},
})

const Signup = ({navigation}) => {
    const [email, setEmail] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

  return (
    <View style={styles.container}>
      <View style={{height:'25%',width:'100%', alignItems:'flex-end'}}>
      <View style={{height:'100%',width:'58%', backgroundColor:'#9CFE93', borderBottomLeftRadius:180,alignItems:'flex-end',}}>
      </View>
      </View>
      <View style={styles.welcomeView}>
        <Text style={styles.welcomeText}>Welcome Back!!</Text>
        <Text style={styles.signinText}>Sign Up</Text>
      </View>
      <View style={styles.inputView}>
      <OutlinedInput
        label="Username"
        value={username}
        onChangeText={(value) => setText(value)}
      />
      </View>
      <View style={styles.inputView}>
      <OutlinedInput
        label="Email"
        value={email}
        onChangeText={(value) => setText(value)}
      />
      </View>
      <View style={styles.inputView}>
      <OutlinedInput
        label="Password"
        value={password}
        onChangeText={(value) => setText(value)}
      />
      </View>
       <View style={styles.buttonView}>
       <ButtonComponent
        title={"Sign Up"}
        onPress={()=> navigation.navigate('ForgetPassword')}
      />
       </View>
       <TouchableOpacity style={styles.textView} onPress={()=> navigation.navigate('SignIn')}>
        <Text style={styles.textStyle}>Already have an account ? Sign Up</Text>
       </TouchableOpacity>
    </View>
  );
};

export default Signup;