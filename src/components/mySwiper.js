import { Image, StyleSheet, Text, TouchableHighlight, View } from 'react-native'
import React from 'react'
import Swiper from 'react-native-swiper';
import { Navigation } from 'react-native-navigation'
import { LoginRoot } from '../navigation';

const MySwiper = (props) => {
    const { imgs } = props;
    const goToLogin = () => {
        Navigation.setRoot(LoginRoot)
    }
    return (
        <View style={styles.SwiperContainer}>
            <Swiper style={styles.Container}>
                {
                    imgs.map((item) => {
                        return (
                            <View key={item.id} style={styles.SwiperItem}>
                                <View>
                                    <Image
                                        style={styles.SwiperItemImg}
                                        source={item.image}>
                                    </Image>
                                </View>
                                {
                                    item.id == 3 && (
                                        <TouchableHighlight
                                            onPress={() => goToLogin()}
                                            activeOpacity={0.5}
                                            underlayColor='#F27600'
                                            style={styles.SwiperBtn}
                                        >
                                            <View>
                                                <Text>
                                                    立即体验
                                                </Text>
                                            </View>
                                        </TouchableHighlight>
                                    )
                                }
                            </View>
                        )
                    })
                }
            </Swiper>
        </View>
    )
}

export default MySwiper

const styles = StyleSheet.create({
    SwiperContainer: {
        flex: 1,
        backgroundColor: 'red'
    },
    Container: {

    },
    SwiperItem: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    SwiperItemImg: {
        width: 200,
        height: 200
    },
    SwiperBtn: {
        backgroundColor: 'orange',
        paddingVertical: 10,
        paddingHorizontal: 50,
        borderRadius: 20,
        marginTop: 50,
        fontSize: 18
    }
})