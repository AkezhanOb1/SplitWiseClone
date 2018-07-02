import React, {Component} from 'react'
import {View, Text, TextInput, ScrollView, TouchableOpacity} from 'react-native'
import Header from '../../Header/Header'
import styles from './AddBillStyle'
import Buttons from '../../Buttons/Buttons'

class AddBill extends Component {

    constructor(props) {
        super(props)
        this.state = {
            friends: JSON.parse(JSON.stringify(this.props.navigation.getParam("listOfFriends"))),
            amount: '',
            description: '',
            participantList: ["Akezhan"],
            eventInfo: {},
            whoPaid: ''
        }
    }

    amountHandler = (event) => {
        text = event.nativeEvent.text
        this.setState({
            amount: text
        })
    }

    descriptionHandler = (event) => {
        text = event.nativeEvent.text
        this.setState({
            description: text
        })
    }

    participantHandler = (index) => {
        const friendsList = this.state.friends.slice()
        let participantsList = []
        friendsList[index].in = !friendsList[index].in
        friendsList.forEach((el) => {if(el.in) {participantsList.push(el.key)}})
        this.setState({
            friends: friendsList,
            participantList: participantsList
        })
    }

    paymentHandler = (index) => {
        let whoPaid = this.state.participantList[index]
        this.setState({
            whoPaid: whoPaid
        })
    }


    saveHandler = () => {
        let eventObj = {}

        eventObj.eventName = this.state.description
        eventObj.involved = this.state.participantList
        eventObj.whoPaid = this.state.whoPaid
        eventObj.cash = parseFloat(this.state.amount)
        eventObj.perPerson = parseFloat(this.state.amount) / this.state.participantList.length

        this.setState({
            eventInfo: eventObj
        })

        const addNewEvent = this.props.navigation.getParam("newEvent")
        addNewEvent(eventObj)
        this.props.navigation.navigate("MainPage")
    }


    render() {
        const displayFriend = this.state.friends.map((data, index) => {
            return (

                <TouchableOpacity  key={new Date().toLocaleString() + index}
                                   onPress={() => this.participantHandler(index)}
                                   style={styles.textButton}>
                    <Text style={styles.regularText}> {data.key} </Text>
                    <Text style={styles.regularText}>{data.in ? "IN" : "OUT"}</Text>
                </TouchableOpacity>

            )
        });

        const eventParticipant = this.state.participantList.map((data, index) => {
            return (

                <TouchableOpacity  key={new Date().toLocaleString() + index}
                                   onPress={() => this.paymentHandler(index)}
                                   style={styles.textButton}>
                    <Text style={styles.regularText}> {data === this.state.whoPaid ? data + ' paying' : data} </Text>
                </TouchableOpacity>

            )
        });

        return (
            <View>
                <Header
                    text={"ADD A BILL"}/>

                <View style={styles.wrapper}>
                    <ScrollView>

                        <View>description
                            <Text style={styles.specialText}>Involved Friends</Text>
                            <View style={styles.friendList}>
                                {displayFriend}
                            </View>
                        </View>

                        <View>
                            <Text style={styles.specialText}>Who Paid?</Text>
                            <View style={styles.friendList}>
                                {eventParticipant}
                            </View>
                        </View>

                        <View style={styles.control}>
                            <TextInput style={styles.inputStyle}
                                       placeholder={"Amount"}
                                       onBlur={(event) => this.amountHandler(event)}/>

                            <TextInput
                                style={styles.inputStyle}
                                placeholder={"Description"}
                                onBlur={(event) => this.descriptionHandler(event)}/>

                            <Buttons
                                disable={this.state.amount === '' || this.state.description === ''}
                                text={"SAVE"}
                                clicked={() => this.saveHandler()}/>
                        </View>

                    </ScrollView>
                </View>

            </View>
        )
    }

}

export default AddBill