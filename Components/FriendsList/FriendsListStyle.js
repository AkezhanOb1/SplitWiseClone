import {StyleSheet} from 'react-native'

const style = StyleSheet.create({
    wrapper: {

    },
    items: {
        flexDirection: 'row',
        padding: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#c6cad1',
        flexWrap: 'wrap',
        justifyContent: 'space-between'
    },
    item: {
        fontWeight: '600',
        fontSize: 18,
        paddingLeft: 15,
        paddingRight: 15
    }
})

export default style