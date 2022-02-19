//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Donutshape from '../../Components/Donutshape';
import Header from '../../Components/Header';
import HomeHeader from '../../Components/HomeHeader';
import Imagespath from '../../Constants/Imagespath';
import colors from '../../styles/colors'
// create a component
const ClassAttendance = () => {
    
    return (
        <View style={styles.container}>
            <HomeHeader
            />
            <Header
            text={'Class Attendance'}
            screen={'Attendance Details'}
            />
            <View style={{flex:0.2,backgroundColor:colors.white,flexDirection:'row'}}>
                <Donutshape
                classvalue={'1A'}
                series={[2,3,90]}
                text1={'Present Students'}
                text2={'Leave Students'}
                text3={'Absent Students'}
                />
                <Donutshape
                classvalue={'2B'}
                series={[2,3,90]}
                text1={'Present Students'}
                text2={'Leave Students'}
                text3={'Absent Students'}
                />
            </View>
            <View style={{flex:0.2,backgroundColor:colors.white,flexDirection:'row'}}>
                <Donutshape
                classvalue={'1A'}
                series={[2,3,40]}
                imagepath={Imagespath.error}
                />
                <Donutshape
                classvalue={'1A'}
                series={[2,3,90]}
                text1={'Present Students'}
                text2={'Leave Students'}
                text3={'Absent Students'}
                />
            </View>
            <View style={{flex:0.5,backgroundColor:colors.white}}>
            </View>
        </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-start',
        backgroundColor: colors.white2,
    },
});

//make this component available to the app
export default ClassAttendance;
