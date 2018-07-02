import React from 'react'
import {View, Text} from 'react-native'

const Debt = (props) => {
    return (
        <View>
            <Text>{props.text}</Text>
            <Text>{props.debts.toFixed(2)}</Text>
        </View>
    )
}

export default Debt