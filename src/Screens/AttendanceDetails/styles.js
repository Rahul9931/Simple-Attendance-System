import React, { Component } from 'react';
import {StyleSheet} from 'react-native';
import colors from '../../styles/colors';
import { moderateScale, scale } from '../../styles/responsiveSize';
export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor:'white',
    },
    viewStyle:{
        flex:1,
        backgroundColor:'white',
    },
    detailsStyle:{
        flex:0.30,
        backgroundColor:'white',
        marginTop:moderateScale(15),
        marginLeft:moderateScale(7),
        width:moderateScale(370),

    },
    tableStyle:{
        flex:0.12,
        flexDirection:'row',
        backgroundColor:colors.black4,
        marginTop:moderateScale(15),
        marginLeft:moderateScale(7),
        width:moderateScale(370),
    },
    headStyle:{
        flex:0.08,
        backgroundColor:colors.black4,
        marginLeft:moderateScale(7),
        width:moderateScale(370),
    },
    flatStyle:{
        flex:1,
        flexDirection:'row',
        backgroundColor:'white',
        justifyContent:'space-around'
        // marginLeft:moderateScale(7),
        // width:moderateScale(370),
    },
    flatStyle1:{
        flex:0.45,
        backgroundColor:'white',
        marginLeft:moderateScale(7),
        width:moderateScale(370),
    },
    textStyle:{
        fontWeight:'bold',
        marginLeft:moderateScale(15),
        fontSize:scale(18),
        marginTop:moderateScale(50)
    }
});
