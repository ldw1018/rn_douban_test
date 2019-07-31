import React, {Component} from 'react'

import {View, Text, StyleSheet, Image} from 'react-native'
//导入轮播图组件
import Swiper from 'react-native-swiper'


export default class Home extends Component {
    constructor(props) {
        super(props)
        this.state = {
            lunbotu: []
        }
    }


    componentWillMount() {
        fetch('')
            .then(res => res.json())
            .then(data => {

            })
    }


    render() {
        return (
            <View>
                <View style={{height: 220}}>
                    {/*轮播图结构*/}
                    {/*需要在swiper外面抱一个view手动设置高度*/}
                    <Swiper style={styles.wrapper} showsButtons={true} autoplay={true} loop={true}>
                        <View style={styles.slide1}>
                            <Image source={{uri: 'http://www.itcast.cn/images/slidead/BEIJING/2017410109413000.jpg'}}
                                   style={styles.image}/>
                        </View>
                        <View style={styles.slide2}>
                            <Image source={{uri: 'http://www.itcast.cn/images/slidead/BEIJING/2017440109442800.jpg'}}
                                   style={styles.image}/>
                        </View>
                        <View style={styles.slide3}>
                            <Image source={{uri: 'http://www.itcast.cn/images/slidead/BEIJING/2017441409442800.jpg'}}
                                   style={styles.image}/>
                        </View>
                    </Swiper>
                </View>
                {/*六宫格*/}
                {/*默认view启用了弹性盒子,主轴为纵向*/}
                <View style={{flexDirection: 'row', flexWrap: 'wrap'}}>
                    <View style={styles.box}>
                        <Image source={require('../../images/menu1.png')} style={{width: 60, height: 60}}/>
                        <Text>新闻资讯</Text>
                    </View>
                    <View style={styles.box}>
                        <Image source={require('../../images/menu2.png')} style={{width: 60, height: 60}}/>
                        <Text>图片分享</Text>
                    </View>
                    <View style={styles.box}>
                        <Image source={require('../../images/menu3.png')} style={{width: 60, height: 60}}/>
                        <Text>商品购买</Text>
                    </View>
                    <View style={styles.box}>
                        <Image source={require('../../images/menu4.png')} style={{width: 60, height: 60}}/>
                        <Text>视频专区</Text>
                    </View>
                    <View style={styles.box}>
                        <Image source={require('../../images/menu5.png')} style={{width: 60, height: 60}}/>
                        <Text>热映电影</Text>
                    </View>
                    <View style={styles.box}>
                        <Image source={require('../../images/menu6.png')} style={{width: 60, height: 60}}/>
                        <Text>联系我们</Text>
                    </View>
                </View>
            </View>


        )
    }
}

//轮播图样式
const styles = StyleSheet.create({
    box: {
        width: '33.3%',
        alignItems:'center',
        marginTop:15
    },
    image: {
        width: '100%',
        height: '100%'
    }
})