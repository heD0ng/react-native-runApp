// 登陆页面
import {
    StyleSheet,
    Text,
    View,
    ImageBackground,
    Dimensions,
    TextInput,
    TouchableHighlight,
} from 'react-native';
import React, { useState } from 'react';
import { MainRoot } from '../navigation';
import { Navigation } from 'react-native-navigation'
// 获取屏幕的宽高
const { width, height } = Dimensions.get('window');
const login = () => {
    const [num, setNum] = useState('');
    const clearVal = () => {
        setNum('');
    };
    const verifyPhone = () => {
        // TODO
        Navigation.setRoot(MainRoot)
    };
    return (
        <ImageBackground
            style={styles.ImageBackground}
            source={require('./../assets/login/loginbg.png')}>
            <View style={styles.container}>
                <View style={styles.containerTop}>
                    <View style={styles.title}>
                        <Text style={styles.phoneLogin}>手机号登陆/注册</Text>
                        <Text style={styles.msgLogin}>未注册手机验证后自动登录</Text>
                    </View>
                    <View style={styles.textInput}>
                        <Text style={{ color: '#fff', fontSize: 18 }}>+86</Text>
                        <TextInput
                            keyboardType="phone-pad"
                            value={num}
                            style={{ color: '#fff', fontSize: 18 }}
                            onChangeText={val => setNum(val)}
                            placeholder="请输入正确的手机号"
                            placeholderTextColor="#fff"
                            maxLength={11}
                            onFocus={clearVal}
                            onSubmitEditing={verifyPhone}>
                        </TextInput>
                    </View>
                    <TouchableHighlight
                        activeOpacity={0.5}
                        underlayColor="orange"
                        style={styles.btn}
                        onPress={() => {
                            verifyPhone();
                        }}>
                        <View>
                            <Text style={{ color: '#fff', fontSize: 18 }}>一键注册</Text>
                        </View>
                    </TouchableHighlight>
                </View>
                <View style={styles.containerBot}></View>
            </View>
        </ImageBackground>
    );
};

login.options = {
    topBar: {
        visible: false,
    },
    statusBar: {
        visible: false,
    },
};
export default login;

const styles = StyleSheet.create({
    ImageBackground: {
        width: width,
        height: height,
    },
    container: {
        height: height,
        backgroundColor: 'rbga(0,0,0,0.3)',
        flex: 1,
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    containerTop: {
        height: '50%',
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
    },
    containerBot: {
        marginVertical: 50,
    },
    title: {
        marginVertical: 30,
        marginHorizontal: 30,
        fontWeight: '600',
    },
    phoneLogin: {
        fontSize: 30,
        marginBottom: 20,
        color: '#fff',
    },
    msgLogin: {
        fontSize: 20,
        color: '#fff',
    },
    textInput: {
        width: '80%',
        height: 60,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
        opacity: 0.5,
        borderRadius: 20,
        paddingHorizontal: 20,
        marginHorizontal: 40,
    },
    btn: {
        borderRadius: 20,
        width: '80%',
        height: 60,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(3,118,191,0.7)',
        marginVertical: 20,
        marginHorizontal: '10%',
    },
});
