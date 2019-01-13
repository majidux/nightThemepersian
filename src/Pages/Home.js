import React, {Component} from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import Header from "../Components/Header";
import Sidebar from "../Components/Sidebar";
import Body from "../Components/Body";

export default class Home extends Component {
    
    
    render() {
        return (
            <View style={styles.homeStyle}>
                <View style={styles.headerView}>
                    <Header/>
                </View>
                <View style={styles.main}>
                    <Body/>
                    <Sidebar/>
                </View>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    homeStyle: {
        flex: 1,
        // backgroundColor: 'wheat'
    },
    headerView:{
        flex:1
    },
    main:{
        flexDirection: 'row',
        flex:9,
    }
});