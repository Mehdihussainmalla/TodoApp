
import { StyleSheet } from 'react-native';
import colors from '../../styles/colors';
import fontFamily from '../../styles/fontFamily';
export default styles = StyleSheet.create({

    loginview: {
        justifyContent: 'center',
        height: '100%',
        width: '100%',
        padding: 16,
        backgroundColor:colors.white
    },
    btnview: {
        backgroundColor: 'blue',
        borderRadius: 10,
        // marginHorizontal:35,
        justifyContent: 'center',
        alignContent: 'center',
        marginVertical: 10,
        marginLeft: 45,
        width: '65%',
        
    },
    loginbtn: {
        fontSize: 22,
        margin: 5,
        color:colors.white,
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
    margin: 2
 },

 
 fbview:{
     margin:5,
     height:'5%',
     marginHorizontal:18,
     width:'65%',
     backgroundColor:colors.blue,
     flexDirection:'row',
    // justifyContent:'space-between',
     borderRadius:5,
     alignSelf:'center',
    marginRight:50
 },
 fblogo:{
     height: 20,
    width: 20, 
    alignSelf:'center',
    marginRight: 10,
    marginTop:3,
   marginHorizontal:8
},
fbtext:{
    fontSize:15,
     alignSelf:'center',
     color:colors.white,
    // marginHorizontal:15
    },
    googleview:{
        margin:15,
        height:'5%',
     marginHorizontal:18,
     width:'65%',
     backgroundColor:colors.blue,
     flexDirection:'row',
     //justifyContent:'space-between',
     borderRadius:5,
     alignSelf:'center',
    marginRight:50

    },
googlelogo:{
        height: 20,
       width: 20, 
       alignSelf:'center',
     marginRight: 10,
       marginTop:3,
       marginHorizontal:10
   },
   googletext:{
       alignSelf:'center',
       fontSize:15,
        alignSelf:'center',
        color:colors.white,
        marginHorizontal:15
       },

       signupview:{
           justifyContent:'center',
           //alignContent:'center',
           alignItems:'center',
           height:30,
           margin:20
       },
       signuptext:{
           color:'red',
           fontSize:20
       }
})