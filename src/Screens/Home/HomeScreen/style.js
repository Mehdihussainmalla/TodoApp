import { StyleSheet } from 'react-native';
import colors from '../../../styles/colors';

export const styles = StyleSheet.create({

    homeview: {

        // justifyContent:'center',
        height: '100%',
        width: '100%',


    },
    taskheader: {

        justifyContent: 'center',
        alignItems: 'center',
        height: 40,
        width: "100%",
        backgroundColor: 'green'
    },

    task: {
        textAlign: 'center',
        fontSize: 20,
        color: '#ffff',
        fontWeight: '500'
    },
    listview: {
        padding: 25,
        //backgroundColor:'lightgrey',
        width: '100%'
    },
    additem: {
        marginTop: 25,
        backgroundColor: 'blue',
        borderRadius: 10,
        paddingHorizontal: 15,
        paddingVertical: 5,
        // marginHorizontal: 75,
        // height: '14%',
        backgroundColor: 'green',
        justifyContent: 'center',
        alignContent: 'center',
        alignItems: 'center'
    },
    additembtn: {
        fontSize: 25,
        color: '#ffff',
        fontWeight: '400'
    },
    btnWarpper: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginHorizontal: 10,
        marginTop: 5,
    },
    dataview: {
        borderWidth: 0.5,
        padding: 10,
        marginVertical: 8
    },
    deleteicon: {
        height: 30,
        width: 20,
        // marginHorizontal: 50,
        marginRight: 10
    },
    detelestyle: {
        //flexDirection: 'row',

    },
    updatestyle: {
        //flexDirection: 'row',
        marginHorizontal: 20

    },
    updateicon: {
        height: 30,
        width: 20,
        marginHorizontal: 50,
        marginRight: 10
    },
    logoutview: {
        backgroundColor: colors.green,
        marginHorizontal: 25,
        margin: 30,
        paddingHorizontal: 20,
        width: '30%',
        borderRadius: 10,
        paddingVertical: 5

    },
    logoutbtn: {
        fontSize: 30,
        fontWeight: '300',
        alignSelf: 'center',
        color: colors.white,


    },
    iconview: {
        justifyContent: 'space-between',
        flexDirection: 'row', margin: 5
    }


})
