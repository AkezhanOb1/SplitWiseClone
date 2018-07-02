import {StyleSheet} from 'react-native'


const styles = StyleSheet.create({
    wrapper: {
        marginTop: 10,
        marginLeft: 15,
        alignContent: 'center'
    },
    specialText: {
        fontSize: 15,
        fontWeight: '600',
        color: 'rgb(168, 168, 168)',
        borderBottomWidth: 0.5,
        borderBottomColor: '#c6cad1',
    },
    regularText: {
        fontSize: 15,
        fontWeight: '500',
        color: 'rgb(74, 74, 74)',
        padding: 5,
    },

    control: {
        alignItems: 'center'
    },

    inputStyle: {
        marginTop: 15,
        borderRadius: 15,
        width: '80%',
        height: 35,
        borderColor: '#47AE4f',
        borderWidth: 1,
        paddingLeft: 20
    },

    textButton: {
        flexDirection: 'row'
    }
})

export default styles