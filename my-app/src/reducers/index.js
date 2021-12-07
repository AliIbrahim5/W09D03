import {createStore,combineReducers} from 'redud';
import {composeWithDevTools} from "redux-devtools-extension";
import singnIn from './login';


const reducers = combineReducers({singnIn});

const store =  ()=>{
    return createStore(reducers,composeWithDevTools());
};

export default store();

