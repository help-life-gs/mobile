import {initializeApp} from "firebase/app";
import {getFirestore} from "firebase/firestore";
import Constants from "expo-constants";

const firebaseConfig = {
    apiKey: Constants.expoConfig.extra.apiKey,
    authDomain: Constants.expoConfig.extra.authDomain,
    databaseURL: Constants.expoConfig.extra.databaseURL,
    projectId: Constants.expoConfig.extra.projectId,
    storageBucket: Constants.expoConfig.extra.storageBucket,
    messagingSenderId: Constants.expoConfig.extra.messagingSenderId,
    appId: Constants.expoConfig.extra.appId
  };

const app = initializeApp(firebaseConfig);

// initializeAuth(app, {
//   persistence: getReactNativePersistence(ReactNativeAsyncStorage)
// });

// export const auth = getAuth();


export const database = getFirestore();