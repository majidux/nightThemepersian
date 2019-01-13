import React, {Component} from 'react';
import {View, Text, StyleSheet, Image, Picker, FlatList} from 'react-native';
import dataCourses from './DataCourses';


export default class Body extends Component {
    constructor(props) {
        super(props);
        this.state = {
            course: '',
            
            // dataSource:[],
            // lastData:[],
            // loading:false
        }
    }
    
    
    // componentDidMount(){
    //     this.fetchData();
    // }
    //
    //
    //
    // fetchData = () => {
    //     let lastData = this.state.lastData;
    //     fetch('https://randomuser.me/api/')
    //         .then(response => response.json())
    //         .then(datas =>{
    //             this.setState(
    //                 {lastData:[...lastData , ...datas.data],loading:true},
    //                 () => this.setState({dataSource:this.state.lastData})
    //             );
    //
    //         })
    //         .catch(error=>alert('Server Not Found'));
    // };
    
    
    
    
    footerFlat = () =>
        <View style={{height: 100, backgroundColor: '#fafafa'}}></View>
    
    
    render() {
        return (
            <View style={styles.body }>
                
                <View style={styles.titleCourse}>

                    
                    <View style={styles.pickerView}>
                        <Picker
                            selectedValue={this.state.language}
                            style={styles.pickerStyle}
                            onValueChange={itemValue => this.setState({course: itemValue})}>
                            <Picker.Item label="همه درس ها" value="همه درس ها"/>
                            <Picker.Item label="درس های مورد علاقه" value="درس های مورد علاقه"/>
                        </Picker>
                    </View>
                    <View>
                        <Text style={styles.bodyTitle}>درس های من</Text>
                        <Text style={styles.bodyTitle}>{this.props.title}</Text>
                    </View>
                </View>
                
                <View style={styles.courses}>
                    
                    <FlatList
                        data={dataCourses}
                        keyExtractor={(item) => item.title}
                        numColumns={3}
                        ListFooterComponent={this.footerFlat}
                        renderItem={({item}) =>
                            <View>
                                <View style={styles.box}>
                                    <View style={styles.imageBoxView}>
                                        <Image
                                            source={item.image}
                                            style={styles.imageBox}
                                            resizeMode={'stretch'}
                                        />
                                    </View>
                                    <View>
                                        <Text style={styles.boxTitleText}>{item.title}</Text>
                                    </View>
                                    <View>
                                        <Text numberOfLines={3} style={styles.boxDescribeText}>{item.text}</Text>
                                    </View>
                                    <View style={styles.footerBox}>
                                        <View style={styles.circleImageView}>
                                            <Image
                                                source={item.one}
                                                resizeMode={'stretch'}
                                                style={styles.circleImage}
                                            />
                                        </View>
                                        <View style={styles.circleImageView}>
                                            <Image
                                                source={item.two}
                                                resizeMode={'stretch'}
                                                style={styles.circleImage}
                                            />
                                        </View>
                                        <View style={styles.circleImageView}>
                                            <Image
                                                source={item.three}
                                                resizeMode={'stretch'}
                                                style={styles.circleImage}
                                            />
                                        </View>
                                        <View style={styles.circleImageView}>
                                            <Image
                                                source={item.four}
                                                resizeMode={'stretch'}
                                                style={styles.circleImage}
                                            />
                                        </View>
                                    </View>
                                </View>
                                <View style={styles._percentage}>
                                    <View style={styles._amount}>
                                        <View
                                            style={
                                                
                                                  item.percentage===76 ? styles.insideAmount76
                                                : item.percentage===46 ? styles.insideAmount46
                                                : item.percentage===32 ? styles.insideAmount32
                                                : item.percentage===82 ? styles.insideAmount82
                                                : item.percentage===12 ? styles.insideAmount12
                                                : item.percentage===67 ? styles.insideAmount67
                                                : styles.insideAmount32
                                                
    
                                             }></View>
                                    </View>
                                    <View><Text>{item.percentage}%</Text></View>
                                </View>
                            </View>
                            
                        }
                    
                    
                    />
                
                
                </View>
            
            
            </View>
        );
    }
}
const styles = StyleSheet.create({
    body: {
        flex: 4,
        backgroundColor: '#f3f3f3',
        paddingBottom: 0
    },
    darkBody:{
        flex: 4,
        backgroundColor: '#202c36',
        paddingBottom: 0
    },
    pickerStyle: {
        height: 50,
        width: 120,
    },
    titleCourse: {
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row',
        padding: 30,
        paddingBottom: 0
    },
    bodyTitle: {
        fontSize: 25,
        fontWeight: 'bold',
        color: 'black',
        fontFamily:'Vazir'
    },
    pickerView: {
        backgroundColor: '#ffffff',
        borderRadius: 5,
        elevation: 20,
        paddingHorizontal: 10
    },
    courses: {
        // marginTop: 50,
        // flexDirection: 'row',
        // flexWrap: 'wrap',
        justifyContent: 'flex-end',
        alignItems: 'center'
    },
    box: {
        backgroundColor: '#fff',
        // flex: 1,
        height: 400,
        width: 280,
        justifyContent: 'space-between',
        // alignItems: 'flex-end',
        marginHorizontal: 10,
        marginTop: 30,
        paddingHorizontal: 25,
        paddingBottom: 25,
        borderRadius:10,
        
    },
    imageBox: {
        width: 280,
        height:150
    },
    imageBoxView: {
        alignItems: 'center',
    },
    boxTitleText: {
        fontSize: 20,
        color: '#000',
        fontWeight: 'bold',
        fontFamily: 'Vazir'
    },
    boxDescribeText: {
        fontSize: 11,
        lineHeight:20,
        color:'#8c8c8c'
    },
    _percentage:{
        paddingHorizontal: 20,
        paddingVertical:30,
        backgroundColor:'#fff',
        marginHorizontal: 10,
        marginVertical: 10,
        borderRadius: 10,
        flexDirection:'row',
        justifyContent:'space-around',
        alignItems:'center',
        
    
    },
    _amount:{
        height:3,
        backgroundColor:'#ebebeb',
        width:200,
    },
    insideAmount32:{
        height:3,
        backgroundColor:'#f08d5f',
        width:74
    },
    insideAmount76:{
        height:3,
        backgroundColor:'#5f91f0',
        width:152
    },
    insideAmount46:{
        height:3,
        backgroundColor:'#70f064',
        width:92
    },
    insideAmount82:{
        height:3,
        backgroundColor:'#70f064',
        width:164
    },
    insideAmount12:{
        height:3,
        backgroundColor:'#f08d5f',
        width:24
    },
    insideAmount67:{
        height:3,
        backgroundColor:'#5f91f0',
        width:134
    },
    footerBox:{
        borderTopColor:'#e3e6e3',
        borderTopWidth: 1,
        // marginTop: 15,
        paddingTop: 15,
        // flex: 1,
        height:50,
        backgroundColor:'#fff',
        // justifyContent:'center',
        alignItems:'center',
        flexDirection:'row',
        paddingLeft: 5
    },
    circleImageView:{
        borderRadius:50,
        width:40,
        height:40,
        backgroundColor:'#fff',
        justifyContent:'center',
        alignItems:'center',
        marginLeft: -5,
        
    
    },
    circleImage: {
        borderRadius:50,
        width:35,
        height:35
    }
});