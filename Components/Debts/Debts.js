import React from 'react'
import {View} from 'react-native'
import Debt from './Debt/Debt'
import DebtsStyle from './DebtsStyle'


const Debts = (props) => {
    return (
        <View style={DebtsStyle.wrapper}>
            <Debt text={"You owe:"} debts={props.debts}/>
            <Debt text={"You are owed:"} debts={props.myDebts}/>
            <Debt text={"Total:"} debts={props.debts - props.myDebts}/>
        </View>
    )
}

export default Debts