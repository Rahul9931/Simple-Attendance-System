//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { scale,moderateScale, moderateScaleVertical } from '../styles/responsiveSize';
import {Surface, Shape} from '@react-native-community/art';
import PieChart from 'react-native-pie-chart';
import colors from '../styles/colors'


// create a component
const Donutshape = ({
     widthAndHeight =moderateScale(78),
     series = [a,b,c],
     sliceColor = ['#FFEB3B','#F44336', '#4CAF50'],
     classvalue,
     text1,
     text2,
     text3
}) => {
    return (
        <View style={styles.container}>
        <Text style={styles.classStyle}>Class:{classvalue}</Text>
        <PieChart
            widthAndHeight={widthAndHeight}
            series={series}
            sliceColor={sliceColor}
            doughnut={true}
            coverRadius={0.75}
            coverFill={'#FFF'}
            style={styles.chartStyle}
          />
          
          <Text style={styles.grouptextStyle}>{text3}</Text>
          <Text style={styles.grouptextStyle2}>{text2}</Text>
          <Text style={styles.grouptextStyle3}>{text1}</Text>
          
        {/*<Text style={styles.textStyle}>rahul</Text>*/}
        </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        flex:0.5,
        height:moderateScale(120),
        width:moderateScale(185),
        //justifyContent: 'center',
        //alignItems: 'center',
        backgroundColor:colors.white,
        marginTop:moderateScale(10),
        marginLeft:moderateScale(5),
        borderEndWidth:1,
        borderRightWidth:1,
    },
    chartStyle:{
        marginRight:moderateScale(95),
        marginTop:moderateScale(10)
    },
    textStyle:{
        marginRight:moderateScale(65),
        marginBottom:moderateScale(40)
    },
    classStyle:{
        fontWeight:'bold',
        color:colors.black4,
        marginLeft:moderateScale(70)
    },
    grouptextStyle:{
        fontSize:scale(10),
        fontWeight:'bold',
        marginVertical:moderateScaleVertical(-40),
        marginLeft:moderateScale(105)


    },
    grouptextviewStyle:{
        backgroundColor:colors.white,
        marginLeft:moderateScale(100),
        marginVertical:moderateScaleVertical(-10)
    },
    grouptextStyle2:{
        fontSize:scale(10),
        fontWeight:'bold',
        marginLeft:moderateScale(105),
        marginVertical:moderateScaleVertical(45),
    },
    grouptextStyle3:{
        fontSize:scale(10),
        fontWeight:'bold',
        marginVertical:moderateScaleVertical(-100),
        marginLeft:moderateScale(105),
    }
});

//make this component available to the app
export default Donutshape;
