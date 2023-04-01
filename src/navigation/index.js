import { Navigation } from 'react-native-navigation'

import login from '../views/login';
import code from '../views/code';
import GoHealth from '../views/GoHealth';
import GoRun from '../views/GoRun';
import home from '../views/home';
import introductions from '../views/introductions';
import App from './../../App'

Navigation.registerComponent('login', () => login)
Navigation.registerComponent('code', () => code)
Navigation.registerComponent('GoHealth', () => GoHealth)
Navigation.registerComponent('GoRun', () => GoRun)
Navigation.registerComponent('home', () => home)
Navigation.registerComponent('introductions', () => introductions)
Navigation.registerComponent('App', () => App)

// 配置RN导航
// 欢迎屏的导航配置
export const WelcomeScreen = {
    root: {
        stack: {
            id: 'WELCOMESCREEN',
            children: [
                {
                    component: {
                        name: 'introductions'
                    }
                }
            ]
        }
    }
}

export const LoginRoot = {
    root: {
        stack: {
            id: 'LOGIN_LAYOUT',
            children: [
                {
                    component: {
                        name: 'login'
                    }
                }
            ]
        }
    }
}

export const MainRoot = {
    root: {
        bottomTabs: {
            id: 'BOTTOM_TABS',
            children: [
                {
                    stack: {
                        id: 'HOME_TAB',
                        children: [
                            {
                                component: {
                                    id: 'HOME',
                                    name: 'home'
                                }
                            }
                        ],
                        options: {
                            bottomTab: {
                                text: '首页',
                                // icon: require(),
                                // selectedIcon
                            }
                        }
                    }
                },
                {
                    stack: {
                        id: 'HEALTH_TAB',
                        children: [
                            {
                                component: {
                                    id: 'HEALTH_TAB',
                                    name: 'GoHealth'
                                }
                            }
                        ],
                        options: {
                            bottomTab: {
                                text: '健康',
                                // icon: require(),
                                // selectedIcon
                            }
                        }
                    }
                },
                {
                    stack: {
                        id: 'GORUN_TAB',
                        children: [
                            {
                                component: {
                                    id: 'GORUN',
                                    name: 'GoRun'
                                }
                            }
                        ],
                        options: {
                            bottomTab: {
                                text: '运动',
                                // icon: require(),
                                // selectedIcon
                            }
                        }
                    }
                }
            ]
        }
    }
}

Navigation.setDefaultOptions({
    statusBar: {
        // backgroundColor:'rgba(255,255,255,0.5)'
        backgroundColor: 'red'
    },
    bottomTabs: {
        titleDisplayMode: 'alwaysShow'
    },
    bottomTab: {
        fontSize: 16,
        selectedFontSize: 18,
        textColor: '#cccccc',
        selectedTextColor: '#0099ff',
        iconWidth: 20,
        iconHeight: 20
    }
})