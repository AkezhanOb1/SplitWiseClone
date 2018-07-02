import React from 'react'
import {View, Text} from 'react-native'
import styles from './HistoryStyle'
import Header from '../../Header/Header'
const History = (props) => {

    const addFriend = props.navigation.getParam("friend")
    const friendsList = addFriend.events.map((data, index) => {
        if(data.whoPaid === addFriend.key) {
            return (
                <View style={styles.items}
                      key={new Date().toLocaleString() + index}>
                    <Text style={styles.item}>{data.eventName + " You are owe"}</Text>
                    <Text style={styles.item}>{data.perPerson.toFixed(2)}</Text>
                </View>
            )
        }else if(data.whoPaid === 'Akezhan') {
            return (
                <View style={styles.items}
                      key={new Date().toLocaleString() + index}>
                    <Text style={styles.item}>{data.eventName + " You owe"}</Text>
                    <Text style={styles.item}>{data.perPerson.toFixed(2)}</Text>
                </View>
            )
        }
    });

    return(
        <View>
            <Header
                text={addFriend.key} />
                <View>
                    {friendsList}
                </View>
        </View>
    )

}


export default History