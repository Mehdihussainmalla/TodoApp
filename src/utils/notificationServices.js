import AsyncStorage from '@react-native-async-storage/async-storage';
import messaging from '@react-native-firebase/messaging';
import { showError } from './helperfunctions';

export async function requestUserPermission() {
  const authStatus = await messaging().requestPermission();
  const enabled =
    authStatus === messaging.AuthorizationStatus.AUTHORIZED ||
    authStatus === messaging.AuthorizationStatus.PROVISIONAL;

  if (enabled) {
    console.log('Authorization status:', authStatus);
    getFcmToken();
  }
}
const getFcmToken = async () => {
  let fcmtoken = await AsyncStorage.getItem('fcmTocken')
  console.log(fcmtoken, "old fcm token generated")
  if (!fcmtoken) {
    try {
      const fcmTocken = await messaging().getToken();
      if (fcmTocken) {
        console.log(fcmTocken, 'new tocken generated')
        await AsyncStorage.setItem('fcmTocken', fcmTocken)
      }

    } catch (error) {
      console.log(error, 'error occured during token generation')
      showError(error.message)

    }
  }


}

export const notificationListener = async () => {
  messaging().onNotificationOpenedApp(remoteMessage => {
    console.log(
      'Notification caused app to open from background state:', remoteMessage.notification);
  });
  messaging().onMessage(async remoteMessage => {
    console.log('received in foreground', remoteMessage)
  })

  messaging()
    .getInitialNotification()
    .then(remoteMessage => {
      if (remoteMessage) {
        console.log(
          'Notification caused app to open from quit state:', remoteMessage.notification);
      }
    });
}