import React from 'react';
import { View, ScrollView, Text, Image} from 'react-native';
import axios from 'axios';


class RestaurantList extends React.Component {

    state = { listAlbum : [] }

    componentDidMount() {
        axios.get('https://rallycoding.herokuapp.com/api/music_albums')
        .then((res) => {
            console.log(res.data)
            this.setState({ listAlbum : res.data})
        })
    }

    renderListRestaurant = () => {
        return this.state.listAlbum.map((item,index) =>{
            return (
                <Album key={index} album={item} />
            )
        })
    }
    

    render() { 
        return ( 
            <ScrollView>
                    {this.renderListRestaurant()}
                </ScrollView>
         );
    }
}



export default RestaurantList;