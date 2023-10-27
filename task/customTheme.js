import { DefaultTheme } from 'react-native-paper';

const customTheme = {
  ...DefaultTheme,
  roundness: 2, // Customize the roundness if needed
  colors: {
    ...DefaultTheme.colors,
    primary: '#B8FFB2', // Customize the primary color (default color)
    text: '#B8FFB2', // Customize the text color
  },
  // Set the default input mode to "outlined"
  textInput: {
    mode: 'outlined',
  },
};

export default customTheme;
