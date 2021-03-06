/**
 * 主页面
 * @flow
 */
import React, {Component} from 'react';

import HomeTab from './wanandroid/HomeView'
import GankTab from './gank/GankView'
import PersonalTab from './personal/PersonalView'

import ScrollableTabView from 'react-native-scrollable-tab-view';
import HomeTabBar from '../view/component/HomeTabBar';

export default class MainTab extends Component {

    constructor(props) {
        super(props);
        this.state = {
            tabNames: ['干货营', '玩安卓', '我的'],
            tabIconNames: ['ios-analytics', 'logo-android', 'ios-contact'],
        };
    }

    render() {
        let tabNames = this.state.tabNames;
        let tabIconNames = this.state.tabIconNames;
        return (
            <ScrollableTabView
                renderTabBar={() => <HomeTabBar tabNames={tabNames} tabIconNames={tabIconNames}/>}
                tabBarPosition={'bottom'}
                locked={true}
                initialPage={0}
                scrollWithoutAnimation={true}>
                <GankTab/>
                <HomeTab/>
                <PersonalTab/>
            </ScrollableTabView>
        );
    }
}