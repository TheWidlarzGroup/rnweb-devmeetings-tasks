import 'react-native-gesture-handler';
import {AppRegistry} from 'react-native';
import Router from 'common/Router';
import {name as appName} from './app.json';
import {createAppContainer} from 'react-navigation';

AppRegistry.registerComponent(appName, () => createAppContainer(Router));
