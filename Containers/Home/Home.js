import React, {Component} from 'react'
import {View, TouchableOpacity, Text, ScrollView} from 'react-native'
import Debts from '../../Components/Debts/Debts'
import Header from '../../Components/Header/Header'
import Buttons from '../../Components/Buttons/Buttons'
import FriendsList from '../../Components/FriendsList/FriendsList'
import styles from './HomeStyle'

class Home extends Component {

    constructor(props) {
        super(props)
        this.state = {
            myDebts: 0,
            debts: 0,
            friends: [{
                key: "Akezhan",
                debts: 0,
                in: true,
                events: []
            }]
        }
    }

    calculateDebts = (friend) => {

        friend.forEach((el, index) => {
            let debt = 0

            el.events.forEach((event) => {
                 if (event.involved.includes(el.key) && event.whoPaid !== 'Akezhan'){
                    if(event.whoPaid === el.key) {
                        debt = debt - event.perPerson
                        friend[index].debts = debt
                    }
                }else if (event.involved.includes(el.key) && event.whoPaid === 'Akezhan'){
                    if(el.key === 'Akezhan') {
                        debt = debt - event.perPerson
                        friend[index].debts = debt
                    }else if ( el.key !== 'Akezhan'){
                        debt = debt + event.perPerson
                        friend[index].debts = debt
                    }
                }
            })
        })

        let myDebts = 0
        let debts = 0
        friend[0].events.forEach((el) => {
           if(el.whoPaid === "Akezhan") {
               debts =  debts + el.perPerson
           }else {
               myDebts =  myDebts + el.perPerson
           }
        })

        this.setState({
            friends: friend,
            myDebts: myDebts ,
            debts: debts,
        })
    }

    addFriendsHandler = (list) => {
        let friendList = this.state.friends.slice()
        const newFriend = {key: list, debts: 0, in: false, events: []}
        friendList.push(newFriend)
        this.setState({
            friends: friendList
        })
    }

    addEvent = (events) => {
        let friend = this.state.friends.slice()
        const newEvent = events
        events.involved.forEach((el) => {
            friend.forEach((friend) => {
                if(el === friend.key) {
                    friend.events.push(newEvent)
                }
            })
        })
        this.setState({
            friends: friend,
        })

       this.calculateDebts(friend)
    }


    render () {
        return (
            <View style={{flex: 1}}>
                <Header
                    text={"Splitwise"} />
                <Debts
                    myDebts={this.state.myDebts}
                    debts={this.state.debts}/>
                <ScrollView>

                    <FriendsList friendLists={this.state.friends} navigationProp={this.props.navigation} />

                    <Buttons text={"+ ADD FRIENDS ON SPLITWISE"}
                             clicked={() => this.props.navigation.navigate("AddFriend",
                                 {addFriend: this.addFriendsHandler})}/>
                </ScrollView>

                <TouchableOpacity onPress={() => this.props.navigation.navigate("AddBill",
                                 {listOfFriends: this.state.friends,
                                 newEvent: this.addEvent})}>

                    <View style={styles.roundButton}>
                        <Text style={styles.buttonText}>+</Text>
                    </View>

                </TouchableOpacity>
            </View>
        )
    }
}

export default Home

