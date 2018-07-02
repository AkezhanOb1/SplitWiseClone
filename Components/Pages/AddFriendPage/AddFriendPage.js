import React from 'react'
import {View, TextInput} from 'react-native'
import styles from './AddFriendPageStyle'
import Header from '../../Header/Header'
import Buttons from '../../Buttons/Buttons'

const AddFriendPage = (props) => {

        inputHandler = (event) => {
            text = event.nativeEvent.text
            addFriends = props.navigation.getParam("addFriend")
            addFriends(text)
        }

        return (
            <View>
                <Header text={"Add a friend"}/>
                <View style={styles.wrapper}>
                    <TextInput
                        style={styles.inputStyle}
                        onBlur={(event) => this.inputHandler(event)}
                        placeholder={"Enter friends name"}/>
                    <Buttons text={"+ ADD FRIEND"}
                             clicked={() => props.navigation.navigate("MainPage")}/>
                </View>
            </View>
        )
}



export default AddFriendPage