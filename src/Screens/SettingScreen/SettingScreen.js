import React, {useState} from 'react';
import { StyleSheet, Text, View, SafeAreaView} from 'react-native';
import CustomButton from '../../Components/CustomButton';
import { useNavigation } from '@react-navigation/native';
import firebase from "firebase/compat";
import {getFirestore} from "firebase/firestore"; 

//Denne skærm er ikke fuld funktionel og er kun med for det visuelle.


const SettingScreen = () => {


    const [user, setUser] = useState({ loggedIn: false });

    const db = getFirestore(SettingScreen)



    //Definere navigation til at bruge min StackNavigator
        const navigation = useNavigation ();

        

        const handleLogOut = async () => {
            await firebase.auth().signOut().then((data)=>{
                navigation.navigate ('SignIn')
            });
        }
    
        if (!firebase.auth().currentUser) {
            return <View><Text>Not found</Text></View>;
        }


    
        return (
            <SafeAreaView style = {styles.root}>
    
            <Text style={styles.Menu}>My profile</Text>
    
            </SafeAreaView>
    
        )
    
    }
    
    
    const styles = StyleSheet.create({
        root: {
            padding: 20,
            marginVertical: 0,
            backgroundColor: 'white',
        },
        Menu: {
            fontSize: 25,
            fontWeight: 'bold', 
            textAlign: 'left',
            margin: 10,
        },
        Ejendommen: {
            fontSize: 25,
            fontWeight: 'bold', 
            textAlign: 'left',
            margin: 20,
        },
        CurrentUser: {
            fontSize: 10
        
    
        }
    
    })
    
    export default SettingScreen