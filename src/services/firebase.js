// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import {
  getAuth,
  initializeAuth,
  // @ts-ignore
  getReactNativePersistence,
} from "firebase/auth";

import ReactNativeAsyncStorage from "@react-native-async-storage/async-storage";

const firebaseConfig = {
  apiKey: "AIzaSyBVZCcfCRQdDYQshHzWxMcc60XNyEpS88U",
  authDomain: "sedatkurtuldu-6c2a7.firebaseapp.com",
  projectId: "sedatkurtuldu-6c2a7",
  storageBucket: "sedatkurtuldu-6c2a7.appspot.com",
  messagingSenderId: "795786826204",
  appId: "1:795786826204:web:fd8fb4ec01ac97e08f7f19"
};


const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const storage = getStorage(app);
export const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(ReactNativeAsyncStorage),
});