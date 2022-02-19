//import liraries
import React, { useState } from 'react';
import { View, Text, StyleSheet,FlatList,TouchableOpacity } from 'react-native';
import Header from '../../Components/Header';
import HomeHeader from '../../Components/HomeHeader';
import Roundimg from '../../Components/Roundimg';
import { data } from '../../Constants/data';
import Imagespath from '../../Constants/Imagespath';
import { moderateScale, scale } from '../../styles/responsiveSize';
import { styles } from './styles';


// create a component
const AttendanceDetails = () => {
    const [state, setstate] = useState({
        value:weak,
    })
    const {value}=state
    const updateState = (data) => setstate((state) => ({ ...state, ...data }))
    weak=({item})=>{
        return(
            <View style={styles.flatStyle}>
            <Roundimg
            image={Imagespath.profile}
            size={30}
            />
            <Text>{item.name}</Text>
            <Text>{item.overroll}</Text>
            <Text>{item.weak.mon}</Text>
            <Text>{item.weak.Tue}</Text>
            <Text>{item.weak.wed}</Text>
            <Text>{item.weak.thu}</Text>
            <Text>{item.weak.fri}</Text>
            <Text>{item.weak.sat}</Text>
            <Text>{item.weak.sun}</Text>
            </View>
        )
    }
    day=({item})=>{
        
        return(
            
            <View 
            style={styles.flatStyle}>
            
            <Roundimg
            image={Imagespath.profile}
            size={30}
            />
            <Text>{item.name}</Text>
            <Text>{item.overroll}</Text>
            <Text>{item.dailyAttendance}</Text>
            <Text>{item.firstAttendance}</Text>
            <Text>{item.secondAttendance}</Text>
            
            </View>
        )
    }
    month=({item})=>{
        return(
            <View style={styles.flatStyle}>
            <Roundimg
            image={Imagespath.profile}
            size={30}
            />
            <Text>{item.name}</Text>
            <Text>{item.overroll}</Text>
            <Text>{item.month.april}</Text>
            <Text>{item.month.may}</Text>
            <Text>{item.month.june}</Text>
            <Text>{item.month.july}</Text>
            <Text>{item.month.aug}</Text>
            <Text>{item.month.sept}</Text>
            <Text>{item.month.oct}</Text>
            <Text>{item.month.nov}</Text>
            <Text>{item.month.dec}</Text>
            <Text>{item.month.jan}</Text>
            <Text>{item.month.feb}</Text>
            <Text>{item.month.mar}</Text>
            </View>
        )
    }
    return (
        <View style={styles.container}>
            <HomeHeader
            />
            <Header
            screen={'Class Attendance'}
            text={'Class Attendance Details'}
            headingText={{marginLeft:moderateScale(30)}}
            />
            <View style={styles.viewStyle}>
            <View style={styles.detailsStyle}>

            </View>
            <View style={styles.tableStyle}>
            
            <TouchableOpacity
            onPress={()=>{updateState({value:day})}}
            
            >
                <View>
                <Text style={styles.textStyle}>Day</Text>
                </View>
            </TouchableOpacity>
            <TouchableOpacity
            onPress={()=>{updateState({value:weak})}}
            >
                <View>
                <Text style={styles.textStyle}>Weak</Text>
                </View>
            </TouchableOpacity>
            <TouchableOpacity
            onPress={()=>{updateState({value:month})}}
            >
                <View>
                <Text style={styles.textStyle}>Month</Text>
                </View>
            </TouchableOpacity>
            <Text style={{fontWeight:'bold',fontSize:scale(20),marginHorizontal:moderateScale(-20)}}>Student Details</Text>
            </View>
            <View style={styles.headStyle}>
                
            </View >
            <View style={styles.flatStyle1}>
            <FlatList
                data={data}
                renderItem={value}
                />
            </View >

            </View>
        </View>
    );
};

// define your styles

//make this component available to the app
export default AttendanceDetails;
