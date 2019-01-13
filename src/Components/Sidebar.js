import React, {Component} from 'react';
import {View, Text, StyleSheet, Image, FlatList, TouchableHighlight} from 'react-native';
import dataSidebar from './DataSidebar';
import dataSidebar2 from './DataSidebar2';

export default class Sidebar extends Component {
    
    render() {
        return (
            
            
            <View style={styles.sideBar}>
                <View>
                    <View>
                        <View style={styles.titleMenu}>
                            <Text style={{fontSize:20}}>منو</Text>
                        </View>
                        {dataSidebar.map((item, i) =>
                            <View key={i} style={[styles._item, item.selected ? styles.selectedBg : null]}>
                                <View style={styles.itemText}>
                                    <Text style={item.selected ? styles.blueColor : styles.notSelected}>{item.name}</Text>
                                </View>
                                <View>
                                    <Image
                                        source={item.image}
                                    />
                                </View>
                            </View>
                        )
                        }
                    </View>
                    <View>
                        <View style={styles.titleMenu}>
                            <Text style={{fontSize:20}}>گروه ها</Text>
                        </View>
                        {dataSidebar2.map((item, i) =>
                            <View key={i} style={[styles._item, item.selected ? styles.selectedBg : null]}>
                                <View style={styles.itemText}>
                                    <Text style={item.selected ? styles.blueColor : styles.notSelected}>{item.name}</Text>
                                </View>
                                <View style={styles.pictureStyle}>
                                    <Image
                                        source={item.image}
                                    />
                                </View>
                            </View>
                        )
                        }
        
        
                        <View style={styles._item}>
                            <View style={styles.itemText}>
                                <Text style={styles._add}>افزودن</Text>
                            </View>
                            <View>
                                <Image
                                    source={require('../Assets/image/add.png')}
                                />
                            </View>
                            
                        </View>
    
    
                    </View>
                </View>
                <View style={styles._item}>
                    <View style={styles.itemText}>
                        <Text style={styles.notSelected}>حالت تاریک</Text>
                    </View>
                    <View>
                        <Image
                            source={require('../Assets/image/moon.png')}
                        />
                    </View>
                    
                </View>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    sideBar: {
        flex: 1,
        backgroundColor: '#ffffff',
        borderLeftColor: '#f5f5f5',
        borderLeftWidth: 2,
        justifyContent: 'space-between',
    },
    _item: {
        flexDirection: 'row',
        // backgroundColor: 'red',
        height: 40,
        justifyContent: 'flex-end',
        alignItems: 'center',
        paddingRight: 40,
    },
    itemText: {
        marginRight: 20,
        
    },
    titleMenu: {
        paddingRight: 20,
        // backgroundColor: 'blue',
        paddingVertical: 19,
        justifyContent: 'center',
        // alignItems: 'center'
    },
    blueColor: {
        color: '#0073eb',
        
    },
    selectedBg: {
        backgroundColor: '#edf3fc',
        borderRightColor: '#0073eb',
        borderRightWidth: 4,
        paddingRight: 36,
    },
    notSelected: {
        color: 'black'
    },
    _add: {
        color: '#b5b6b5'
    }
});