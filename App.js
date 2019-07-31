/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Fragment, Component} from 'react';
import {
    SafeAreaView,
    StyleSheet,
    ScrollView,
    View,
    Text,
    StatusBar,
} from 'react-native';

import TabNavigator from 'react-native-tab-navigator';

import Home from './components/tabbars/Home'
import Me from './components/tabbars/Me'
import Search from './components/tabbars/Search'
import ShopCar from './components/tabbars/ShopCar'


//图标组件
import Icon from 'react-native-vector-icons/FontAwesome';

export default class App extends Component {

    constructor(props) {
        super(props)
        this.state = {
            selectedTab: 'home'
        }
    }

    render() {
        return (
            <View style={styles.container}>
                <TabNavigator>

                    {/*HOME======*/}
                    <TabNavigator.Item
                        selected={this.state.selectedTab === 'home'}
                        title="Home"
                        renderIcon={() => <Icon name="home" size={25} color="gray" />}
                         renderSelectedIcon={() => <Icon name="home" size={25} color="#0079FF" />}
                        onPress={() => this.setState({ selectedTab: 'home' })}
                    >
                        <Home/>
                    </TabNavigator.Item>

                    {/*SEARCH=====*/}
                    <TabNavigator.Item
                        selected={this.state.selectedTab === 'search'}
                        title="搜索"
                        renderIcon={() => <Icon name="search" size={25} color="gray" />}
                        renderSelectedIcon={() =><Icon name="search" size={25} color="#0079FF" />}
                        onPress={() => this.setState({ selectedTab: 'search' })}
                    >
                        <Search/>
                    </TabNavigator.Item>


                    <TabNavigator.Item
                        selected={this.state.selectedTab === 'shopcar'}
                        title="购物车"
                        renderIcon={() => <Icon name="shopping-cart" size={25} color="gray" />}
                        renderSelectedIcon={() => <Icon name="shopping-cart" size={25} color="#0079FF" />}
                        badgeText="0"
                        onPress={() => this.setState({ selectedTab: 'shopcar' })}
                    >
                        <ShopCar/>
                    </TabNavigator.Item>

                    {/*PROFILE=====*/}
                    <TabNavigator.Item
                        selected={this.state.selectedTab === 'profile'}
                        title="Profile"
                        renderIcon={() => <Icon name="user" size={25} color="gray" />}
                        renderSelectedIcon={() => <Icon name="user-o" size={25} color="#0079FF" />}
                        onPress={() => this.setState({ selectedTab: 'profile' })}
                    >
                        <Me/>
                    </TabNavigator.Item>
                </TabNavigator>
            </View>
        )
    }
};

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
});

