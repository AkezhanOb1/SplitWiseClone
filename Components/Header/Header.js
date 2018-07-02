import React from 'react'
import {View, Text} from 'react-native'
import HeaderStyle from "./HeaderStyle"
const Header = (props) => {
    return (
            <View style={HeaderStyle.wrapper}>
                <Text style={HeaderStyle.content}>{props.text}</Text>
            </View>
    )
}

export default Header