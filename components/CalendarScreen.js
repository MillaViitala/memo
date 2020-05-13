import React, { Component } from "react";
import { StyleSheet,View,TextInput,Text, TouchableOpacity, ScrollView } from "react-native";
import { Calendar } from 'react-native-calendario';

export default class CalendarScreen extends Component {


    render() {

        return(
            <View style={styles.container}>
                <View style={styles.header}>
                <Text style={styles.headerText}>Calendar</Text>
                </View>
                <Calendar
                onChange={(range) => console.log(range)}
                minDate={new Date(2018, 3, 20)}
                startDate={new Date(2018, 3, 30)}
                endDate={new Date(2018, 4, 5)}
                theme={{
                activeDayColor: {},
                monthTitleTextStyle: {
                  color: '#6d95da',
                  fontWeight: '300',
                  fontSize: 16,
                },
                emptyMonthContainerStyle: {},
                emptyMonthTextStyle: {
                  fontWeight: '200',
                },
                weekColumnsContainerStyle: {},
                weekColumnStyle: {
                  paddingVertical: 10,
                },
                weekColumnTextStyle: {
                  color: '#b6c1cd',
                  fontSize: 13,
                },
                nonTouchableDayContainerStyle: {},
                nonTouchableDayTextStyle: {},
                startDateContainerStyle: {},
                endDateContainerStyle: {},
                dayContainerStyle: {},
                dayTextStyle: {
                  color: '#2d4150',
                  fontWeight: '200',
                  fontSize: 15,
                },
                dayOutOfRangeContainerStyle: {},
                dayOutOfRangeTextStyle: {},
                todayContainerStyle: {},
                todayTextStyle: {
                  color: '#6d95da',
                },
                activeDayContainerStyle: {
                  backgroundColor: '#6d95da',
                },
                activeDayTextStyle: {
                  color: 'white',
                },
                nonTouchableLastMonthDayTextStyle: {},
                }}
              />
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