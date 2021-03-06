
import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import {mainReducer} from './reducer';
import { composeWithDevTools } from 'redux-devtools-extension';

const middlewaresArr = [thunk];
if(process.env.NODE_ENV === "development"){
    middlewaresArr.push(logger);
}

const middlewares = applyMiddleware(...middlewaresArr);

export const store = createStore(mainReducer, composeWithDevTools(middlewares));

