import {
    GET_RESTAURANT_DETAIL
} from './types';

export const getDetailRestaurant = (index) => {
    return {
        type: GET_RESTAURANT_DETAIL,
        payload : index
    }
}