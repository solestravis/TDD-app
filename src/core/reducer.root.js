import { combineReducers } from 'redux';
import { homeReducer } from './Home/reducer';
import { routerReducer } from 'react-router-redux';

export default function rootReducer () {
    return combineReducers({
        home: homeReducer,
        router: routerReducer
    });
}
