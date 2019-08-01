import React, {Component} from 'react'

import {View, Text, StyleSheet, Image, ActivityIndicator, FlatList, TouchableHighlight} from 'react-native'
import {Actions} from 'react-native-router-flux'
export default class MovieList extends Component {
    constructor(props) {
        super(props)
        this.state = {
            movies: [],
            nowPage: 1,
            totalPage: 0,
            pageSize: 15,
            isloading: true
        }
    }

    componentWillMount() {
        this.getMovieByPage()
    }

    render() {
        return (
            <View>
                {this.renderList()}
            </View>
        )
    }


    //根据页码获取
    getMovieByPage = () => {
        const start = (this.state.nowPage - 1) * this.state.pageSize;
        const url = `http://api.douban.com/v2/movie/in_theaters?apikey=0df993c66c0c636e29ecbb5344252a4a&start=${start}&count=${this.state.pageSize}`
        fetch(url).then(respons => respons.json())
            .then(data => {
                this.setState({
                    movies: this.state.movies.concat(data.subjects),
                    isloading: false,
                    totalPage: Math.ceil(data.total / this.state.pageSize)
                })
            })
    }

    //渲染电影列表
    renderList = () => {
        if (this.state.isloading) {
            return <ActivityIndicator size='large'/>
        }

        return <FlatList
            data={this.state.movies}
            keyExtractor={(item, i) => i}
            renderItem={({item}) => this.renderItem(item)}
            ItemSeparatorComponent={this.renderSeparator}
            onEndReachedThreshold={0.5}
            onEndReached={this.loadNextPage}
        />
    }


    renderItem = (item) => {
        return (
            <TouchableHighlight onPress={()=>Actions.moviedetail({id:item.id})} underlayColor='white'>
                <View style={{flexDirection: 'row', padding: 10}}>
                    <Image source={{uri: item.images.small}} style={{width: 100, height: 140, marginRight: 10}}/>
                    <View style={{justifyContent: 'space-around'}}>
                        <Text><Text style={styles.movieTitle}>电影名称：</Text>{item.title}</Text>
                        <Text><Text style={styles.movieTitle}>电影类型：</Text>{item.genres.join('，')}</Text>
                        <Text><Text style={styles.movieTitle}>制作年份：</Text>{item.year}年</Text>
                        <Text><Text style={styles.movieTitle}>豆瓣评分：</Text>{item.rating.average}分</Text>
                    </View>
                </View>
            </TouchableHighlight>
        )
    }

    // 渲染分割线
    renderSeparator = () => {
        return <View style={{borderTopColor: '#ccc', borderTopWidth: 1, marginLeft: 10, marginRight: 10}}></View>
    }

    loadNextPage = () => {
        // 如果下一页的页码值，大于总页数了，直接return
        if ((this.state.nowPage + 1) > this.state.totalPage) {
            return
        }

        this.setState({
            nowPage: this.state.nowPage + 1
        }, function () {
            this.getMovieByPage()
        })
    }
}

const styles = StyleSheet.create({
    movieTitle: {
        fontWeight: 'bold'
    }
})