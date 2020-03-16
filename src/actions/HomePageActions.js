import axios from 'axios';
import { API_URL } from '../helpers/apiurl';
import {
    FILL_LIST_POST
} from './types';

export const getHomeListPost = () => {
    return async (dispatch) => {
        try {
            const res = await axios.get(API_URL + '/v2.1/search?start=1&count=10&sort=rating', {
                                        headers: {
                                            'user-key': "74b25737566cc5cfe2644bcdf3265f8e"
                                        }
                                    })
            console.log(res.data.restaurants[0].restaurant.R)
            dispatch({
                type: FILL_LIST_POST,
                payload: res.data.restaurants
            })
        } catch (err) {
            console.log(err)
        }
    }
}
