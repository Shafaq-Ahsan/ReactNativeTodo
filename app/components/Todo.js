import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity
} from 'react-native';


export default class Todo extends Component {
  render() {
    return (
      <View key={this.props.keyval} style={styles.todo}>
     <Text style = {styles.todoText }> {this.props.val.todo} </Text>
        <TouchableOpacity onPress={this.props.deleteMethod} style={styles.deleteButton}>
            <Text style = {styles.deleteText}>&ndash;</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
 todo : {
     position : 'relative',
     padding : 20,
     marginLeft:10,
     marginRight : 10,
     marginTop:10,
     borderRadius : 10,
     borderTopWidth : 2,
     borderTopColor :'#3f639c',
       borderLeftWidth : 2,
     borderLeftColor :'#3f639c' ,
     borderRightWidth : 2,
     borderRightColor :'#3f639c', 
     borderBottomWidth : 2,
     borderBottomColor :'#3f639c',

 },
 todoTextDate : {
  paddingLeft: 10,
  fontSize : 10
  
  
 },
 todoText : {
  fontSize : 15,
  paddingLeft: 10,
  marginRight: 30
 },
 deleteButton: {
    position : 'absolute',
    right : 10,
    padding : 10,
    top: 10,
    bottom: 10,
    backgroundColor:'#3f639c',
    width:40,
    height :40,
    borderRadius : 50,
    alignItems:'center',
    justifyContent:'center',
    elevation: 8 
 },
 deleteText:{
     color: 'white'
 }
});
