// import React, { createContext, useContext, useState, useEffect, useMemo } from 'react';
// import { Auth, Hub } from 'aws-amplify';
// import { CognitoHostedUIIdentityProvider } from '@aws-amplify/auth';

// export const AuthContext = createContext(null)

// export const useAuth = () => {
//     const value = useContext(AuthContext)
//     if (value === null) throw new Error('Please add AuthProvider')
//     return value
// }

// export const AuthProvider = ({ children }) => {
//     const [currentUser, setCurrentUser] = useState(null)
//     console.log('context provider currentUser', currentUser)

//     useEffect(() => {
//         const unsubscribe =
//             Hub.listen("auth", ({ payload: { event, data } }) => {
//                 switch (event) {
//                     case "signUp":
//                         console.log('sign in detected')
//                         break
//                     case "signIn":
//                         console.log('log in detected: ', currentUser)
//                         break
//                     case "signOut":
//                         console.log("logout detected: ", currentUser)
//                         break
//                     default:
//                         break
//                 }
//             })
//         Auth.currentAuthenticatedUser()
//             .then(user => setCurrentUser(user))
//             .catch(() => setCurrentUser(null));
//         return unsubscribe;
//     }, [])

//     const signIn = () => {
//         Auth.federatedSignIn({ provider: CognitoHostedUIIdentityProvider.Google })
//             .then(data => console.log(data))
//             .catch(err => console.log(err))
//     }

//     const signOut = () => {
//         Auth.signOut()
//             .then(data => console.log(data))
//             .catch(err => console.log(err))
//     }

//     const checkUser = () => {
//         Auth.currentAuthenticatedUser()
//             .then(user => console.log("cognitoUser ", user, "app User ", currentUser))
//             .catch(err => console.log(err))
//     }

//     const values = useMemo(() => ({ currentUser, signIn, signOut, checkUser }), [currentUser])

//     return (
//         <AuthContext.Provider value={values} >
//             {children}
//         </AuthContext.Provider>
//     )
// }


