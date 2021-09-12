import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'

const config = {
  apiKey: "AIzaSyDJOE7oZty46Ukj1PcHSjmslbSJ3-sviRI",
  authDomain: "crwn-clothing-a4f45.firebaseapp.com",
  projectId: "crwn-clothing-a4f45",
  storageBucket: "crwn-clothing-a4f45.appspot.com",
  messagingSenderId: "489570719305",
  appId: "1:489570719305:web:eb8307b829175d5e421198",
  measurementId: "G-3FXMCJBVE0"
}

firebase.initializeApp(config)

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if(!userAuth) return

  const userRef = firestore.doc(`users/${userAuth.uid}`)

  const snapshot = await userRef.get()

  if(!snapshot.exists) {
    const { displayName, email } = userAuth
    const createdAt = new Date()

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      })
    } catch (error) {
      console.log('error creating user', error.message)
    }
  }

  return userRef

}
export const auth = firebase.auth()
export const firestore = firebase.firestore()

const provider = new firebase.auth.GoogleAuthProvider()
provider.setCustomParameters({ prompt: 'select_account'})
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;