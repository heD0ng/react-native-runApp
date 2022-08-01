import { 
  StyleSheet, Text, View, SafeAreaView, Button, Linking,
  TouchableHighlight,
  TouchableOpacity,
  ScrollView
} from 'react-native'
import React from 'react'
import Icon  from 'react-native-vector-icons/FontAwesome';

const App = () => {
  return (
    <>
      <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <Text>
          文本1
        </Text>
        <Text>
          文本2
        </Text>
        <Text>
          文本3
        </Text>
        <View>
          <Icon name='home' size={30} color='#ff8198' />
        </View>
        <View>
          <Button title='点击跳转' onPress={()=>{
            // 需要链接以http开头
            Linking.openURL('http://www.baidu.com')
          }}>
          </Button>
        </View>
        <View>
          <TouchableHighlight style={styles.highlight} activeOpacity={0.8} underlayColor='orange' onPress={()=>{
            // 需要链接以http开头
            Linking.openURL('http://www.baidu.com')
          }}>
            <Text >点击</Text>
          </TouchableHighlight>
        </View>
        </ScrollView>
      </SafeAreaView>
    </>
  )
}

export default App

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f4f5f6'
  },
  scrollView: {
    flex: 1,
  },
  highlight: {
    display:'flex',
    width: 300,
    height: 1008,
    backgroundColor: 'yellow',
    borderRadius: 20,
    justifyContent:'center',
    alignItems:'center',
    color: 'white'
  }
})