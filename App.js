// import React from 'react';
// import { Button, View } from 'react-native';
// import { createSwitchNavigator } from 'react-navigation';
// import LoginScreen from './components/LoginScreen'
// import FeedBackScreen from './components/FeedBackScreen'
// import { firebaseApp } from './config';


// export default class App extends React.Component {
//   render() {
//     return <SwitchNavigator />;
//   }
// }




// const SwitchNavigator = createSwitchNavigator({
// Login: LoginScreen,
//   Feedback:FeedBackScreen,
// });

import React from 'react';

import { createAppContainer,createSwitchNavigator,} from 'react-navigation';


import LoginScreen from './components/LoginScreen';
import FeedBackScreen from './components/FeedBackScreen';
import SearchScreen from './components/SearchScreen';
export default function App() {
  return (
    
    <AppContainer/>
    
  );
}


const switchNavigator = createSwitchNavigator({
  LoginScreen:{screen: LoginScreen},
  Feedback:{screen: FeedBackScreen},
  SearchScreen:{screen:SearchScreen}

})

const AppContainer =  createAppContainer(switchNavigator);


