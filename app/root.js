import {Reducer, Actions, Router, Scene, Stack} from 'react-native-router-flux';

import {View, StatusBar, StyleSheet, Platform, BackHandler} from 'react-native';
import React, {Component} from 'react';
import MainTab from './view/MainTab'
import MyWeb from './view/WebPage'
import {C1, mainColor} from "./configs";

const statusBackColor = Platform.select({android: mainColor, ios: 'transparent'})

export default class RootView extends Component {
    render() {
        return (
            <View style={styles.container}>
                {Platform.OS === 'ios' ? null :
                    <StatusBar backgroundColor={statusBackColor} barStyle={'dark-content'}/>}

                <Router createReducer={routerReducerCreate} backAndroidHandler={backAndroidHandler}>
                    <Stack {...FrameStyles}>
                        <Scene key="main" component={MainTab} initial={true}/>
                        <Scene key="webView" title="Web" component={MyWeb}/>
                    </Stack>
                </Router>
            </View>
        );
    }
}

const BackTextPadding = Platform.select({android: 5, ios: 2});
const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});

const FrameStyles = {
    navigationBarStyle: {
        backgroundColor: mainColor,
    },
    titleStyle: {
        color: "white",
        alignSelf: 'center',
    },
    rightButtonTextStyle: {
        color: mainColor,
        textAlign: 'justify',
        includeFontPadding: false,
        textAlignVertical: 'center',
    },
    rightButtonStyle: {
        paddingLeft: 10,
        justifyContent: 'center'
    },
    leftButtonStyle: {},
    backButtonTextStyle: {
        paddingTop: BackTextPadding,
        paddingLeft: 0,
        color: C1,
        textAlign: 'justify',
        includeFontPadding: false,
        textAlignVertical: 'center',
    },
    backButtonTintColor: "white",
};

export const routerReducerCreate = params => {
    const defaultReducer = new Reducer(params);
    return (state, action) => {
        return defaultReducer(state, action);
    };
};


const backAndroidHandler = () => {
    if (Actions.currentScene === 'main') {
        BackHandler.exitApp();
    } else {
        Actions.pop();
    }
    return true;
};