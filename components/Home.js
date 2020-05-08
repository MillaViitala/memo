import React, { Component } from "react";
import { StyleSheet,View,TextInput,Text, TouchableOpacity, ScrollView } from "react-native";
import { Font } from 'expo';
import Memo from "./Memo";

export default class Home extends Component {
  state = {
    memoList: [],
    memoVal: ""
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

  addMemo = e => {
    if (this.state.memoVal) {
      let d = new Date();
      const newMemo = {
        date: d.getFullYear() + "/" + (d.getMonth() + 1) + "/" + d.getDate(),
        memo: this.state.memoVal
      };
      this.setState({
        memoList: [...this.state.memoList, newMemo],
        memoVal: ""
      });
    }
  
  };

  deleteMemo = id => {

      const newmemos = this.state.memoList.filter((memo,index) => index!==id)
      this.setState({memoList: newmemos});

  }



  render() {
    
    let memos = this.state.memoList.map((val, id) => {
      return (
        <Memo key={id} val={val} deleteMethod={() => this.deleteMemo(id)} />
      );
    });

    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.headerText}> My Memo</Text>
        </View>

        <ScrollView style={styles.scrollContainer}>{memos}</ScrollView>

        <View style={styles.footer}>
          <TextInput
            style={styles.textInput}
            onChangeText={memoVal => this.setState({ memoVal })}
            value={this.state.memoVal}
            placeholder="Click here to write ..."
            placeholderTextColor="white"
            underlineColorAndroid="transparent"
          />
        </View>

        <TouchableOpacity style={styles.button} onPress={this.addMemo}>
          <Text style={styles.buttonText}>Add me!</Text>
        </TouchableOpacity>
      </View>

    );
  }

}


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
  button: {
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
  buttonText: {
    color: "#b2908c",
    fontSize: 20
  }
});