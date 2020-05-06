//Import dependencies
import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  ScrollView,
  TouchableOpacity
} from "react-native";
import { Font } from 'expo';
import Memo from "./Memo";

export default class Home extends Component {
  state = {
    noteArray: [],
    noteText: ""
  };
  

  /*state = {
    fontsLoaded: false
  };

  async componentDidMount() {
    await Font.loadAsync({
      font1:require('../assets/fonts/CourierPrime-Regular.ttf'),
      font2:require('../assets/fonts/CourierPrime-Bold.ttf'),
      font3:require('../assets/fonts/Galada-Regular.ttf'),
      font4:require('../assets/fonts/RobotoSlab-VariableFont_wght.ttf')

    });

    this.setState({ fontLoaded: true });
  }*/

  addNote = e => {
    if (this.state.noteText) {
      let d = new Date();
      const newNote = {
        date: d.getFullYear() + "/" + (d.getMonth() + 1) + "/" + d.getDate(),
        note: this.state.noteText
      };
      this.setState({
        noteArray: [...this.state.noteArray, newNote],
        noteText: ""
      });
    }
  
  };

  deleteNote = key => {
      this.state.noteArray.splice(key,1);
      this.setState({noteArray: this.state.noteArray });

  }



  render() {
    
    let notes = this.state.noteArray.map((val, id) => {
      return (
        <Memo key={id} val={val} deleteMethod={() => this.deleteNote(key)} />
      );
    });

    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.headerText}> My Memo</Text>
        </View>

        <ScrollView style={styles.scrollConatiner}>{notes}</ScrollView>

        <View style={styles.footer}>
          <TextInput
            style={styles.textInput}
            onChangeText={noteText => this.setState({ noteText })}
            value={this.state.noteText}
            placeholder="Click here to write ..."
            placeholderTextColor="white"
            underlineColorAndroid="transparent"
          />
        </View>

        <TouchableOpacity style={styles.addButton} onPress={this.addNote}>
          <Text style={styles.addButtonText}>Add me!</Text>
        </TouchableOpacity>
      </View>

    );
  }

}

//Stylesheet
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffe4e1",
  },
  header: {
    backgroundColor: "#e1ffef",
    alignItems: "center",
    justifyContent: "center",
    borderBottomWidth: 10,
    borderBottomColor: "#ddd"
  },
  headerText: {
    color: "#b2908c",
    //fontFamily: "font1",
    fontSize: 40,
    padding: 50
  },
  scrollContainer: {
    flex: 1,
    marginBottom: 100
  },
  footer: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    zIndex: 10
  },
  textInput: {
    alignSelf: "stretch",
    color: "#fff",
    padding: 27,
    backgroundColor: "#7ab295", //#2F4F4F
    borderTopWidth: 2,
    fontSize: 20,
    borderTopColor: "#ededed"
  },
  addButton: {
    position: "absolute",
    zIndex: 11,
    right: 20,
    bottom: 10,
    backgroundColor: "#e1ffef",
    width: 100,
    height: 100,
    borderRadius: 59,
    alignItems: "center",
    justifyContent: "center",
    elevation: 8
  },
  addButtonText: {
    color: "#b2908c",
    fontSize: 20
  }
});