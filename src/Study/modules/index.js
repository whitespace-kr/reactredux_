import {combineReducers} from 'redux';
import counter from './counter';
// import todos from './todos';
import sample from './sample';
import loading from './loading';

const rootReducer = combineReducers({
    counter,
    sample,
    loading
});

export default rootReducer;