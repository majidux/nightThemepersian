import React, {Component} from 'react';
import {View, Text, StyleSheet, Image, FlatList, TouchableHighlight, Animated,Easing} from 'react-native';
import dataSidebar from './DataSidebar';
import dataSidebar2 from './DataSidebar2';

export default class Sidebar extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            pressStatus: false,
        };
        this.spinValue = new Animated.Value(0)
    
    }
    
    
    componentDidMount() {
        this.spin()
    }
    
    spin() {
        this.spinValue.setValue(0);
        Animated.timing(
            this.spinValue,
            {
                toValue: 1,
                duration: 4000,
                easing: Easing.linear
            }
        ).start(() => this.spin())
    }
    
    
    pressStatus = () =>
        this.setState({pressStatus: true});
    
    render() {
        
        const spin = this.spinValue.interpolate({
            inputRange: [0, 1],
            outputRange: ['0deg', '360deg']
        });
        
        
        
        return (
            
            
            <View style={
                
                this.state.pressStatus
                    ? styles.sidebarDark
                    : styles.sideBar
            }>
                
                <View>
                    <View>
                        <View style={styles.titleMenu}>
                            <Text style={[this.state.pressStatus ? styles.darkFont : null,{fontSize: 20}]}>منو</Text>
                        </View>
                        {dataSidebar.map((item, i) =>
                            <View key={i} style={[styles._item, item.selected ? styles.selectedBg : null]}>
                                <View style={styles.itemText}>
                                    <Text style={[item.selected || this.state.pressStatus ? styles.blueColor && styles.darkFont  : styles.notSelected]}>{item.name}</Text>
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
                            <Text style={[this.state.pressStatus ? styles.darkFont : null,{fontSize: 20}]}>گروه ها</Text>
                        </View>
                        {dataSidebar2.map((item, i) =>
                            <View key={i} style={[styles._item, item.selected ? styles.selectedBg : null]}>
                                <View style={styles.itemText}>
                                    <Text
                                        style={ this.state.pressStatus ? styles.darkFont : styles.notSelected}>{item.name}</Text>
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
                    {this.state.pressStatus ?
                        <View style={styles.itemText}>
                            <Text style={this.state.pressStatus ? styles.darkFont : styles.notSelected}>حالت روشن</Text>
                        </View>
                        :
                        <View style={styles.itemText}>
                            <Text style={this.state.pressStatus ? styles.darkFont : styles.notSelected}>حالت تاریک</Text>
                        </View>
                    }
                    <TouchableHighlight
                        onPress={() => {
                            this.setState({pressStatus: true})
                        }}
                        activeOpacity={1}
                    >
                        <View style={styles.buttons}>
                            <Image
                                source={require('../Assets/image/moon.png')}
                            />
                        </View>
                    </TouchableHighlight>
                    <TouchableHighlight
                        onPress={() => {
                            this.setState({pressStatus: false})
                        }}
                        activeOpacity={1}
                    >
                        <View style={styles.buttons}>
                            <Image
                                source={require('../Assets/image/sun.png')}
                            />
                        </View>
                    
                    </TouchableHighlight>
                
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
    sidebarDark: {
        backgroundColor: '#2b3844',
        flex: 1,
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
    _itemDark: {
        backgroundColor: '#2b3844',
        flexDirection: 'row',
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
        paddingVertical: 19,
        justifyContent: 'center',
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
        color: '#515051',
    },
    _add: {
        color: '#b5b6b5'
    },
    buttons:{
        // width:30,
        marginHorizontal:1,
        paddingVertical:5,
        paddingHorizontal:10,
        justifyContent:'center',
        alignItems:'center',
        elevation: 20,
        borderRadius:1
    },
    darkFont:{
        color:'#b4b3b4'
    }
});