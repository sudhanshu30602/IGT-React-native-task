import {React, useState,} from 'react';
import { StyleSheet , View, Text, Image, TextInput, TouchableOpacity} from 'react-native';
import OutlinedTextInput from '../components/OutlinedTextInput ';
import ButtonComponent from '../components/BottonComponent';
import { Button } from 'react-native-paper';


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
 
  inputView: {
    width: '100%',
    height:'10%',
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
  textStyle2:{fontSize:18, color:'#5E9959', fontWeight:'500'},
})

const Signin = ({navigation}) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = () => {
      // Handle the password submission here, e.g., send it to an API
      console.log('Email submitted:', email);
      console.log('Password submitted:', password);
    };

  return (
    <View style={styles.container}>
      <View style={{ height: '23%', width: '100%', alignItems: 'flex-end' }}>
        <View style={{ height: '100%', width: '60%', backgroundColor: '#99E392', borderBottomLeftRadius: 200, alignItems: 'flex-end', }}>   
        <View style={{ height: '85%', width: '85%', backgroundColor: '#9CFE93', borderBottomLeftRadius: 200, alignItems: 'flex-end', }}>   
        </View>
        </View>
      </View>
       <View style={styles.welcomeView}>
        <Text style={styles.welcomeText}>Welcome !!</Text>
        <Text style={styles.signinText}>Sign In</Text>
      </View>
      <View style={styles.inputView}>
        <OutlinedTextInput
          label="Email Id"
          placeholder="Enter your email"
          value={email}
          onChangetext={(value) => {
            setEmail(value);
          }} />
      </View>
      <View style={styles.inputView}>
        <OutlinedTextInput
          label="Password"
          placeholder="Enter your password"
          value={password}
          passwordSecurity={true}
          onChangetext={(value) => setPassword(value)} />
      </View>
      <Text style={styles.forgetText}>Forgot Password</Text>
      <View style={styles.buttonView}>
        <ButtonComponent
          title={"Sign In"}
          onPress={handleSubmit}/>
      </View>
      <View style={styles.mainIconView}>
        <Text>or</Text>
        <View style={styles.iconView}>
          <TouchableOpacity>
            <Image
              source={require('../assets/facebook.png')}
              style={styles.iconStyle} />

          </TouchableOpacity>
          <TouchableOpacity>
            <Image
              source={require('../assets/instagram.png')}
              style={styles.iconStyle} />
          </TouchableOpacity>

          <TouchableOpacity>
            <Image
              source={require('../assets/twitter.png')}
              style={styles.iconStyle} />
          </TouchableOpacity>


        </View>
      </View>
      <View style={{width: '100%', alignContent:'center'}}>
    </View>
      <TouchableOpacity style={styles.textView} onPress={() => navigation.navigate('SignUp')}>
        <Text>
        <Text style={styles.textStyle}>Don't have an account ? </Text>
        <Text style={styles.textStyle2}> Sign In</Text>
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default Signin;