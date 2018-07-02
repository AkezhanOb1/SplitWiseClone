import React from 'react';
import Home from './Containers/Home/Home'
import AddFriendScreen from './Components/Pages/AddFriendPage/AddFriendPage'
import AddBill from './Components/Pages/AddBill/AddBill'
import History from './Components/Pages/History/History'

import {createStackNavigator} from 'react-navigation'

export default class App extends React.Component {

  render() {
    return (
      <AppStackNavigator />
    );
  }
}

const AppStackNavigator = createStackNavigator({
    MainPage: Home,
    AddFriend: AddFriendScreen,
    AddBill: AddBill,
    History: History
})
