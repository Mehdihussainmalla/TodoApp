
import { StyleSheet } from 'react-native';
import colors from '../../styles/colors';
import fontFamily from '../../styles/fontFamily';
export default styles = StyleSheet.create({

    loginview: {
        justifyContent: 'center',
        height: '100%',
        width: '100%',
        padding: 16,
        backgroundColor: 'lightgrey'
    },
    btnview: {
        backgroundColor: 'blue',
        borderRadius: 10,
        // marginHorizontal:35,
        justifyContent: 'center',
        alignContent: 'center',
        marginVertical: 15,
        marginLeft: 45,
        width: '65%'
    },
    loginbtn: {
        fontSize: 22,
        margin: 5,
        color: '#fff',
        //fontWeight: '500',
        fontFamily:fontFamily.mulishRegular,
        
        textAlign: 'center'
    },
    frenchlang: {
        margin: 2,
        borderWidth: 0.1,
        backgroundColor: colors.green,
        height: 30,
        borderRadius: 5
    },
    frenchtext: {
        color: colors.white,
        fontSize: 20,
        alignSelf: 'center',
        fontWeight: '300'
    },
    englishlang: {
        margin: 2,
        borderWidth: 0.1,
        backgroundColor: colors.green,
        height: 30,
        borderRadius: 5
    },
    englishtext: {
        color: colors.white,
        fontSize: 20,
        alignSelf: 'center',
        fontWeight: '300'
    },
    hidebtn:{ backgroundColor: colors.greyA, 
    borderWidth: 0.3,
    fontSize:20, 
    margin: 2 }
    ,

})