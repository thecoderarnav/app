import React, { Component } from 'react';
import {
    View,
    Button,
    Text,
    TextInput,
    Modal,
    Alert,
    KeyboardAvoidingView,
    StyleSheet,
    ScrollView} from 'react-native';
import db from '../config';
import firebase from 'firebase'

export default class FeedBackScreen extends React.Component{
    constructor(){
        super();
        this.state={
     emailId:'',
      firstName:'',
      lastName:'',
     feedback:'',
     rating:'',
     isModalVisible:'false'
    }
          
        }


 showModal = ()=>{
   return(
   <Modal
     animationType="fade"
     transparent={true}
     visible={this.state.isModalVisible}
     >
     <View style={styles.modalContainer}>
       <ScrollView style={{width:'100%'}}>
         <KeyboardAvoidingView style={styles.KeyboardAvoidingView}>
         <Text
           style={styles.modalTitle}
           > FeedBack Form</Text>
         <TextInput
           style={styles.formTextInput}
           placeholder ={"First Name"}
           maxLength ={8}
           onChangeText={(text)=>{
             this.setState({
               firstName: text
             })
           }}
         />
         <TextInput
           style={styles.formTextInput}
           placeholder ={"Last Name"}
           maxLength ={8}
           onChangeText={(text)=>{
             this.setState({
               lastName: text
             })
           }}
         />
         <TextInput
           style={styles.formTextInput}
           placeholder ={"FeedBack"}
           maxLength ={100}
           onChangeText={(text)=>{
             this.setState({
               contact: text
             })
           }}
         />
         <TextInput
           style={styles.formTextInput}
           placeholder ={"Address"}
           multiline = {true}
           onChangeText={(text)=>{
             this.setState({
               address: text
             })
           }}
         />
         <TextInput
           style={styles.formTextInput}
           placeholder ={"Rating"}
          onChangeText={(text)=>{
             this.setState({
               emailId: text
             })
           }}
         />
       
         </KeyboardAvoidingView>
       </ScrollView>
     </View>
   </Modal>
 )
 }
  render(){
     return(
       <View style={styles.container}>
      
         <View style={{justifyContent: 'center',alignItems: 'center'}}>
 
         </View>
           {
             this.showModal()
           }
         <View style={{justifyContent:'center', alignItems:'center'}}>
          <Button title="SUBMIT" color = "red"  onPress={Alert.alert( "Feedback submitted succesfully")}/>
           <Text style={styles.title}>MediHelp</Text>
         </View>
         <View>
             </View>
     </View>
     )
   

  
  }  
}
  
 
 
 const styles = StyleSheet.create({
   container:{
    flex:1,
    backgroundColor:'cyan',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop:0,
  },
  
  title :{
    fontSize:65,
    fontWeight:'bold',
    paddingBottom:30,
    color : 'red'
  },
 
  KeyboardAvoidingView:{
    flex:1,
    justifyContent:'center',
    alignItems:'center'
  },
  modalTitle :{
    justifyContent:'center',
    alignSelf:'center',
    fontSize:30,
    color:'orange',
    margin:50
  },
  modalContainer:{
    flex:1,
    borderRadius:20,
    justifyContent:'center',
    alignItems:'center',
    backgroundColor:"white",
    marginRight:30,
    marginLeft : 30,
    marginTop:80,
    marginBottom:80,
  },
  formTextInput:{
    width:"75%",
    height:35,
    alignSelf:'center',
    borderColor:'grey',
    borderRadius:10,
    borderWidth:1,
    marginTop:20,
    padding:10
  },
  
 })
 



