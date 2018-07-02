import React from 'react'
import {View, Text, TouchableOpacity} from 'react-native'
import styles from './FriendsListStyle'

const FriendsList = (props) => {


    const history = (index) => {
          props.navigationProp.navigate("History",
              {friend: props.friendLists[index]})
    }

    const friendsList = props.friendLists.map((data, index) => {
        if (data.key === 'Akezhan') {
            return null
        } else {
            return (
                <TouchableOpacity onPress={() => history(index)}
                                  key={new Date().toLocaleString() + index}>
                    <View style={styles.items}>
                        <Text style={styles.item}>{data.key}</Text>
                        <Text style={styles.item}>{data.debts.toFixed(2)}</Text>
                    </View>
                </TouchableOpacity>
            )
        }
    });

    return (
        <View style={styles.wrapper}>
            {friendsList}
        </View>
    )
}



export default FriendsList