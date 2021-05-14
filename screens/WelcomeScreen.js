import React, {Component} from 'react';
import {View, Text, TextInput, StyleSheet, TouchableOpacity, Alert} from 'react-native'
import db from './config'
import firebase from 'firebase'

export default class WelcomeScreen extends React.Component{
    constructor(){
        super()
        this.state({
            emailId : "",
            password : ""
        })
    }

    userSignUp =(emailId, password)=>{
        firebase.auth().createUserWithEmailAndPassword(emailId, password)
        .then((response) =>{
            return Alert.alert("Successfully Signed Up")
        })
        .catch(function(error){
            var errorCode = error.code
            var errorMessage = error.message
            return Alert.alert(errorMessage)
        })
    }

    userLogin =(emailId, password)=>{
        firebase.auth().signInWithEmailAndPassword(emailId, password)
        .then(() =>{
            return Alert.alert("Logged In")
        })
        .catch(function(error){
            var errorCode = error.code
            var errorMessage = error.message
            return Alert.alert(errorMessage)
        })
    }

    render(){
        return(
            <View style = {styles.container}>
                <Text style = {styles.header}>Barter System</Text>
                <View>
                    <TextInput style = {styles.loginBox}
                    placeholder = "Email Address"
                    keyboardType = "email-address"
                    onChangeText = {(text) =>{
                        this.setState({
                            emailId : text
                        })
                    }}/>   

                    <TextInput style = {styles.loginBox}
                    placeholder = "Password"
                    secureTextEntry = {true}
                    onChangeText = {(text) =>{
                        this.setState({
                            password : text
                        })
                    }}/>      

                    <TouchableOpacity style = {styles.button}   
                    onPress = {() =>{
                        this.userSignUp(this.state.emailId, this.state.password)
                    }}>
                        <Text style = {styles.buttonText}>Sign Up</Text>
                    
                    </TouchableOpacity>   

                    <TouchableOpacity style = {[styles.button, {marginBottom : 20, marginTop : 20}]}   
                    onPress = {() =>{
                        this.userLogin(this.state.emailId, this.state.password)
                    }}>
                        <Text style = {styles.buttonText}>Login</Text>
                    
                    </TouchableOpacity>        
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container : {
        flex : 1
    },
    header : {
        color : "cyan", 
        fontWeight : bold, 
        fontSize : 30, 
        textAlign : 'center', 
        justifyContent : 'center'
    },
    button : {
        backgroundColor : "#00ffff",
        width : 30,
        height : 10,
        alighItems : "center"
    },
    buttonText : {
        color : "#000000",
        fontSize : 20,
        padding : 1,
        textAlign : 'center'
    },
    loginBox : {
        justifyContent : "flex-start",
        width : 50,
        height : 20
    }
})

export default WelcomeScreen;