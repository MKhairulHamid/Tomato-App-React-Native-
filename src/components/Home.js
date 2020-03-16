import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableWithoutFeedback } from 'react-native';
import { Input, Icon, Button, Header, FlatList, Card } from 'react-native-elements';
import { connect } from 'react-redux';
import { getHomeListPost, getDetailRestaurant } from '../actions';
import Restaurant from './RestorantDetail'

class Home extends React.Component {

    componentDidMount() {
        this.props.getHomeListPost()
        
    }

    onCardPress = (index) => {
        console.log('heloo')
        this.props.getDetailRestaurant(index)
        this.props.navigation.navigate('RestaurantDetailScreen')
    }

    renderListRestaurant = () => {
        return this.props.homeListPost.listPost.map((item,index) => {
            return (
                <TouchableWithoutFeedback 
                    onPress ={()=> this.onCardPress(index) }
                    key={index}

                >
                <Restaurant key={index} restaurant={item.restaurant}  />
                </TouchableWithoutFeedback>
            )
        })
    }

    render() {
        console.log(this.props.homeListPost.listPost)
        return (
             <View style={styles.containerStyle}>
                <Header
                    leftComponent={{ 
                        icon : 'account-box', 
                        style: { color: 'white'  } 
                    }}
                    rightComponent={{
                        text : 'Hello, ' + this.props.user.username,
                        style: { color: 'white', fontSize: 18, fontWeight: '700' }
                    }}
                    leftContainerStyle={{ flex: 3 }}
                    rightContainerStyle={{ flex :3 }}
                    containerStyle={{
                        backgroundColor: 'tomato',
                        justifyContent: 'space-around',
                        marginTop: Platform.OS === 'ios' ? 0 : -25,
                        elevation: 2
                    }}
                />
                <View style={styles.iconMenuContainer}>
                    <View style={styles.iconMenuLine}>
                        <Icon reverse name='card-travel' size={30} color='tomato' />
                        <Icon reverse name='view-list' size={30} color='tomato' />
                        <Icon reverse name='redeem' size={30} color='tomato' />
                        <Icon reverse name='location-on' size={30} color='tomato' />
                    </View>
                    <View style={styles.iconMenuLine}>
                        <Text> Credit </Text>
                        <Text> Variant </Text>
                        <Text> Recipe </Text>
                        <Text> Location </Text>
                    </View>
                    <View style={styles.iconMenuLine}>
                        <Icon reverse name='card-membership' size={30} color='tomato' />
                        <Icon reverse name='pie-chart' size={30} color='tomato' />
                        <Icon reverse name='cake' size={30} color='tomato' />
                        <Icon reverse name='more' size={30} color='tomato' />
                    </View>
                    <View style={styles.iconMenuLine}>
                        <Text> Cart </Text>
                        <Text> Pizza </Text>
                        <Text> Burger </Text>
                        <Text> More </Text>
                    </View>
                </View>

                <ScrollView style={styles.listRestoran}>
                    {this.renderListRestaurant()}
                </ScrollView>

                 </View> 
        )
    }
}

const styles = StyleSheet.create({
    containerStyle: {
        backgroundColor: '#fff',
        flex: 1,
        flexDirection : 'column'
    },
    headerStyle : {
        flex: 1,
        flexDirection : 'row',
        justifyContent : 'space-between',
        marginHorizontal : '5%'
    },
    iconMenuContainer : {
        flex : 0.5,
        flexDirection : 'column',
        justifyContent : 'flex-start'
    },
    iconMenuLine : {
        flexDirection : 'row',
        justifyContent : 'space-around'
    },
    listRestoran : {
        flex : 10,
        flexWrap : 'wrap'    
    }

})


const mapStatetoProps = ({ user, homeListPost }) => {
    return { 
        user,
        homeListPost
     }
}

export default connect(mapStatetoProps,{ getHomeListPost, getDetailRestaurant })(Home);