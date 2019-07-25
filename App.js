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
                        // renderIcon={() => <Image source={...} />}
                        // renderSelectedIcon={() => <Image source={...} />}
                        onPress={() => this.setState({ selectedTab: 'home' })}
                    >
                        <Home/>
                    </TabNavigator.Item>

                    {/*SEARCH=====*/}
                    <TabNavigator.Item
                        selected={this.state.selectedTab === 'search'}
                        title="搜索"
                        // renderIcon={() => <Image source={...} />}
                        // renderSelectedIcon={() => <Image source={...} />}
                        onPress={() => this.setState({ selectedTab: 'search' })}
                    >
                        <Search/>
                    </TabNavigator.Item>


                    <TabNavigator.Item
                        selected={this.state.selectedTab === 'shopcar'}
                        title="购物车"
                        // renderIcon={() => <Image source={...} />}
                        // renderSelectedIcon={() => <Image source={...} />}
                        badgeText="0"
                        onPress={() => this.setState({ selectedTab: 'shopcar' })}
                    >
                        <ShopCar/>
                    </TabNavigator.Item>

                    {/*PROFILE=====*/}
                    <TabNavigator.Item
                        selected={this.state.selectedTab === 'profile'}
                        title="Profile"
                        // renderIcon={() => <Image source={...} />}
                        // renderSelectedIcon={() => <Image source={...} />}
                        // renderBadge={() => <CustomBadgeView />}
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

