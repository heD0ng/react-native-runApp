// 引导页面
import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import Swiper from '../components/mySwiper'

const introductions = () => {
    const [swiperImgs, setSwiperImgs] = useState([
        {
            id: '1',
            image: require('./../assets/introduction/introduction1.png')
        },
        {
            id: '2',
            image: require('./../assets/introduction/introduction2.png')
        },
        {
            id: '3',
            image: require('./../assets/introduction/introduction3.png')
        },
    ])
    return (
        <View style={styles.introductions}>
            <Swiper imgs={swiperImgs}></Swiper>
        </View>
    )
}

// 类组件：static options；
introductions.options = {
    topBar: {
        visible: false
    },
    statusBar: {
        visible: false
    },
    // bottomTabs: {
    //   visible: false
    // }
}

export default introductions

const styles = StyleSheet.create({
    introductions: {
        flex: 1
    }
})