import { combineReducers } from 'redux';
import UserReducer from './UserReducer';
import LoginFormReducer from './LoginFormReducer'
import HomeListPostReducer from './HomeListPostReducer';
import DetailRestaurantReducer from './DetailRetaurantReducer'

export default combineReducers({
    user: UserReducer,
    loginForm : LoginFormReducer,
    homeListPost: HomeListPostReducer,
    indexDetail : DetailRestaurantReducer
})