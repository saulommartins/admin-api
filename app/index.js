/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './src/App';
import {name as appName} from './app.json';
import RootViewBackgroundColor from 'react-native-root-view-background-color';

RootViewBackgroundColor.setBackground(130, 131, 134, 1);
AppRegistry.registerComponent(appName, () => App);
