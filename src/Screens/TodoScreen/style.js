import { StyleSheet } from 'react-native';
import colors from '../../styles/colors';

export const styles = StyleSheet.create({
    container:
    {
        // justifyContent:'center',
        height: '100%',
        width: '100%',
        // padding: 10,
        // backgroundColor: 'skyblue',

    },
    heading: {
        // borderRadius:10,
        justifyContent: 'center',
        alignItems: 'center',
        height: 40,
        width: "100%",
        backgroundColor: 'green'
    },
    adddetails: {
        textAlign: 'center',
        fontSize: 20,
        color: '#ffff',
        fontWeight: '500'
    },
    addtaskview: {

        marginHorizontal: 35,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
        height: 40,
        width: "65%",
        marginTop: 20,
        backgroundColor:colors.green,


    },
    addtaskbutton: {
      
        fontSize: 25,
        color: '#fff',
        fontWeight: '400'
    },
    });


