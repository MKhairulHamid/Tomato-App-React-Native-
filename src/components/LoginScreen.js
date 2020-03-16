import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import { Text, Input, Icon, Button } from 'react-native-elements';
import * as Animatable from 'react-native-animatable';
import { connect } from 'react-redux';
import { StackActions } from '@react-navigation/native';
import AsyncStorage from '@react-native-community/async-storage';
import { 
    onInputText,
    onUserLogin,
    userLoginCheck
} from '../actions';

class LoginScreen extends Component {

    componentDidMount() {
        this.props.userLoginCheck();
    }

    componentDidUpdate() {
        if (this.props.user.username) {
            this.props.navigation.dispatch(StackActions.replace('TabNav'));
        } 
    }

    onBtnLoginPress = () => {
        this.props.onUserLogin(this.props.loginForm.username)
    }
    

    render() {
        if(this.props.user.authChecked && !this.props.user.username) {
            return (
                <View style={styles.containerStyle}>
                    <Animatable.Text animation={'fadeInDown'} duration={2000}>
                        <Text 
                            h3
                            style={{ color : 'tomato'}}
                        >
                        TomatoApp</Text>
                    </Animatable.Text>
                    <View style={styles.inputContainerStyle}>
                        <Input
                            placeholder='Username'
                            leftIcon={
                                <Icon
                                    name='account-box'
                                    size={24}
                                    color='tomato'
                                />
                            }
                            value={this.props.loginForm.username}
                            onChangeText={(val) => this.props.onInputText('username', val)}
                        />
                        
                    </View>
                    <Button
                        title="Enter"
                        containerStyle={{ width: '95%', marginBottom: 10 }}
                        buttonStyle={{ backgroundColor: 'tomato' }}
                        onPress={this.onBtnLoginPress}
                    />
                    
                </View>
            )
        }
        
        return (
            <View style={styles.splashStyleContainer}>
            <Text style={styles.titleText}> TomatoApp 
            </Text>
            <View style={styles.iconStyle}>
                <Icon size={70} name="donut-small" color='white' />
                <Icon size={70} name="local-pizza" color='white' />
            </View>   
            </View>
        )
    }
}

const styles = StyleSheet.create({
    containerStyle: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff'
    },
    inputContainerStyle: {
        marginTop: 50,
        marginBottom: 100,
        width: '100%'
    },
    splashStyleContainer : {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'tomato'
    },
    titleText :{
        fontSize : 40,
        color : 'white'
    },
    iconStyle : {
        flexDirection: 'row'
    }
})

const mapStateToProps = ({ user, loginForm }) => {
    return { user, loginForm }
}

export default connect(mapStateToProps, { 
    onInputText, 
    onUserLogin,
    userLoginCheck
})(LoginScreen);