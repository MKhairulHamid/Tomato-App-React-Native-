import React from 'react';
import { View, Text, Image, StyleSheet , Linking, Button } from 'react-native';
import Card from './Card';
import CardSection from './CardSection'


const styles = StyleSheet.create ({
    containerStyle : {
        
        width: '40%'
        
    },
    headerContentStyle : {
        justifyContent : 'space-around'
    },
    headerTextStyle : {
        fontSize : 15
    },
    ratingTextStyle : {
        fontSize : 12
    },
    imageStyle : {
        height : 150,
        width : 150
    }
})

export default ({ restaurant }) => {
    return (
        <Card style={{width='50%'}}>
            
            <CardSection>
                <Image style={styles.imageStyle} source={{uri : restaurant.thumb }} />
            </CardSection>
            <CardSection>
                <View style={styles.headerContentStyle}>
                    <Text style={styles.headerTextStyle}>
                        {restaurant.name}
                    </Text>
                    <Text style={styles.ratingTextStyle}> User Rating :  {restaurant.user_rating.aggregate_rating}</Text>
                </View>
            </CardSection>
           
        </Card>
    )
}