import React from 'react'
import {TouchableOpacity, View, Text} from 'react-native';
import ButtonStyle from './ButtonStyle'

const Buttons = (props) => {
    return(
        <View style={ButtonStyle.wrapper}>
            <TouchableOpacity onPress={props.clicked} disabled={props.disable}>
                <View style={ButtonStyle.buttonContainer}>
                    <Text style={ButtonStyle.buttonText}>{props.text}</Text>
                </View>
            </TouchableOpacity>
        </View>
    )
}


export default Buttons