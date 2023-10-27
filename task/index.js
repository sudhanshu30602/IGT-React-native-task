/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import customTheme from './customTheme';
import { DefaultTheme, Provider as PaperProvider } from 'react-native-paper';

 // Your main application component

 

const Main = () => (
  <PaperProvider theme={customTheme}>
    <App />
  </PaperProvider>
);

AppRegistry.registerComponent(appName, () => App);
