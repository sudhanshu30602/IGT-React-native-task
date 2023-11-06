import React from 'react';
import { TextInput, View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import { IconButton, Provider } from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialIcons';


const OutlinedTextInput = ({
  label,
  placeholder,
  value,
  onChangetext,
  style,
  passwordSecurity,


  ...props
}) => {
  const [showPassword, setShowPassword] = React.useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
  return (
      <View style={styles.mainContainer}>
        <View style={styles.container}>
         <View style={styles.box}>
          <View style={styles.borderView} />
          <View>
          <Text style={styles.labelText}>{label}</Text>
          </View>
          <View style={styles.borderView2} />
          </View>
          <View style={styles.textIconView}>
          <View style={styles.inputView}>
          <TextInput
               style={style, [{ fontSize: 16, marginLeft:15 }]}
               value={value}
               onChangeText={onChangetext}
               placeholder={placeholder}
               secureTextEntry={ passwordSecurity}
               placeholderTextColor={'#B7B6B6'}
                
           />
        </View>
        { passwordSecurity ? (
        <TouchableOpacity style={styles.iconView}>
        <Icon
        name={showPassword ? 'eye' : 'eye-with-line'}
        size={25}
        color="gray"
        onPress={togglePasswordVisibility}
      />
        </TouchableOpacity>
         ) : null
        }
        </View>
      </View>
      </View>
  );
};

export default OutlinedTextInput;

const styles = StyleSheet.create({
    mainContainer:{justifyContent:'center', alignItems:'center', height:'150%', width:'100%'},
    container:{height:'60%', width:'90%', borderLeftWidth:2, borderBottomWidth:2, borderRightWidth:2,  justifyContent:'space-around', borderColor:'#B8FFB2', borderRadius:15,},
    box:{ flexDirection:'row', alignItems:'center'},
    borderView:{
      width: 35,
      height:2,
      borderRadius:15,
      backgroundColor: '#B8FFB2',
      marginBottom:25,},
    labelText:{ marginHorizontal: 18, fontSize:20, marginBottom:20, color:'#161616'},
    borderView2 : {
      width: 180,
      height:2,
      borderRadius:15,
      backgroundColor: '#B8FFB2',
      marginBottom:25
  },
  textIconView:{flexDirection:'row'},
  inputView:{ borderTopColor:'white', marginBottom:10, width:250, height:'85%'},
  iconView:{alignItems:'center', justifyContent:'center', width:75, marginBottom: 10, marginLeft:20},
});