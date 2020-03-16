import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Input, Icon, Button } from 'react-native-elements';
import { connect } from 'react-redux';
import { CommonActions } from '@react-navigation/native';
import { onUserLogout } from '../actions'

class LogOut extends React.Component {

    componentDidUpdate() {
        this.props.navigation.navigate('Login')
    }

    render() {
        return (
            <View style={styles.containerStyle}>
                <Button 
                    title="Log Out"
                    containerStyle={{ 
                        marginVertical: 15, 
                        borderWidth: 0.5,
                        borderColor: 'gray',
                        width: '90%'
                    }}
                    titleStyle={{ color: 'black' }}
                    type='outline'
                    onPress={this.props.onUserLogout}
                />
            </View>
        )
    } 
}
const styles = StyleSheet.create({
    containerStyle: {
        backgroundColor: '#fff',
        flex: 1,
        flexDirection : 'column',
        alignItems : 'center',
        justifyContent : 'center'

    }
    
})


const mapStateToProps = ({ user }) => {
    return { user }
}

export default connect(mapStateToProps, { onUserLogout })(LogOut);

