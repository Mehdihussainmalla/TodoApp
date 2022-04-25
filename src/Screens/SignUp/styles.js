
import { StyleSheet } from 'react-native';
import { moderateScale, moderateVerticalScale, scale, verticalScale } from 'react-native-size-matters';
import colors from '../../styles/colors';
import fontFamily from '../../styles/fontFamily';
export default styles = StyleSheet.create({
    signup: {
        color: colors.white,
        fontFamily: fontFamily.mulishBold,
        fontSize: 25,
        alignSelf: 'center',
        // marginHorizontal:moderateVerticalScale(5)
        margin: verticalScale(5)
    },
    container: {
        flex: 1,
        justifyContent: 'center',
       // height: '100%',
        width: '100%',
        padding:moderateScale(16),
        backgroundColor: colors.greyA
    },
    btnview:
    {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop:moderateScale(10),
        backgroundColor: colors.lightSkyB,
        borderRadius:moderateScale(10)
    }
})