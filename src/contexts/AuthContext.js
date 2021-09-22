import { createContext,useState,useEffect } from "react";
import firebase from "../../src/fb/fbConfig"

export const AuthContext = createContext();

const AuthContextProvider = (props) => {
    
    // const [projects, setProjects] = useState([]);
    // const ref = firebase.firestore().collection("projects");
    const [status, setStatus] = useState(null);
    

    const signIn = (email, password) => {
        firebase.auth().signInWithEmailAndPassword(email, password)
        .then((userCredential) => {
            // Signed in
            var user = userCredential.user;
            console.log(user);
            setStatus(null);
            // ...
        })
        .catch((error) => {
            var errorMessage = error.message;
            console.log(errorMessage);
            setStatus(errorMessage);
        });
      }
    
    
    return (
        <AuthContext.Provider value={{status,signIn}}>
            {props.children}
        </AuthContext.Provider>
    );
};

export default AuthContextProvider;