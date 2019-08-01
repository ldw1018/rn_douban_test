import React, {Component} from 'react'

import {View, Text, StyleSheet, Image, ActivityIndicator, ScrollView} from 'react-native'

export default class MovieDetail extends Component {
    constructor(props) {
        super(props)
        this.state = {
            movieInfo: {},
            isloading: true
        }
    }

    componentWillMount() {
        fetch('http://api.douban.com/v2/movie/subject/' + this.props.id + '?apikey=0df993c66c0c636e29ecbb5344252a4a')
            .then(respons => respons.json())
            .then(data => {
                this.setState({
                    movieInfo: data,
                    isloading: false
                })
            })
    }

    render() {
        return (
            <View>
                {this.renderInfo()}
            </View>
        )
    }

    renderInfo = () => {
        if (this.state.isloading) {
            return <ActivityIndicator size='large'/>
        }

        return <ScrollView>
            <View style={{padding: 4}}>
                <Text style={{
                    fontSize: 25,
                    textAlign: 'center',
                    marginTop: 20,
                    marginBottom: 20
                }}>{this.state.movieInfo.title}</Text>
                <View style={{alignItems: 'center'}}>
                    <Image source={{uri: this.state.movieInfo.images.large}} style={{width: 200, height: 280}}/>
                </View>
                <Text style={{lineHeight: 60, marginTop: 20}}>{this.state.movieInfo.summary}</Text>
            </View>
        </ScrollView>
    }
}