//main才是项目根组件

import React, {Component} from 'react'

import {View, Text, StyleSheet, Image, ActivityIndicator} from 'react-native'

//导入路由组件
///Router 相当于hashrouter
//stack分组容器,用来分组
//scene表示具体路由规则  好比 Router
import {Router, Stack, Scene} from 'react-native-router-flux'
import App from './App'
import MovieList from './components/movie/MovieList'
import MovieDetail from './components/movie/MovieDetail'

export default class Main extends Component {
    constructor(props) {
        super(props)
        this.state = {}
    }


    render() {
        return (
            <Router sceneStyle={{backgroundColor:'white'}}>
                <Stack key="root">
                    {/*配置路由规则*/}
                    {/*所有的路由规则都应该写到这个位置*/}
                    {/*第一个scene就是默认要显示的首页*/}
                    {/*key表示路由的规则名称,将来可以使用key编程时导航,key不能重复*/}
                    <Scene key="app" component={App}  hideNavBar={true}/>
                    {/*电影列表路由规则*/}
                    <Scene key="movielist" component={MovieList} title='热映电影列表'/>
                    <Scene key="moviedetail" component={MovieDetail} title='电影详情'/>
                </Stack>
            </Router>
        )
    }

}