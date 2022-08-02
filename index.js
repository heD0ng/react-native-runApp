/**
 * @format
 */

// import {AppRegistry} from 'react-native';
import App from './App';
// import {name as appName} from './app.json';

// AppRegistry.registerComponent(appName, () => App);
import {Navigation} from 'react-native-navigation'
import {WelcomeScreen, MainRoot, LoginRoot} from './src/navigation'
Navigation.registerComponent('App', () => App);

// const WelcomeScreen = {
//     root: {
//         stack: {
//             id:'WELCOMESCREEN',
//             children:[
//                 {
//                     component:{
//                         name: 'App'
//                     }
//                 }
                
//             ]
//         }
//     }
// }

Navigation.events().registerAppLaunchedListener(()=>{
    Navigation.setRoot(WelcomeScreen);
})