import { delay,put,takeEvery,takeLatest } from 'redux-saga/effects';
import {createAction, handleActions} from 'redux-actions';

const INCREASE = 'counter/INCREASE';
const DECREASE = 'counter/DECREASE';

const INCREASE_ASYNC = 'counter/INCREASE_ASYNC';
const DECREASE_ASYNC = 'counter/DECREASE_ASYNC';

export const increase = createAction(INCREASE);
export const decrease = createAction(DECREASE);

export const increaseAsync = createAction(INCREASE_ASYNC,()=>undefined);
export const decreaseAsync = createAction(DECREASE_ASYNC,()=>undefined);

function* increaseSaga(){
    yield delay(500);
    yield put(increase());
}

function* decreaseSaga(){
    yield delay(500);
    yield put(decrease());
}

export function* counterSaga(){
    yield takeEvery(INCREASE_ASYNC,increaseSaga);
    yield takeLatest(DECREASE_ASYNC,decreaseSaga);
}

// export const increaseAsync= () => dispatch => {
//     setTimeout(()=>{
//         dispatch(increase());
//     },3000);
// };

// export const decreaseAsync= () => dispatch => {
//     setTimeout(()=>{
//         dispatch(decrease());
//     },3000);
// };

const initialState = 0;

const counter = handleActions(
    {
        [INCREASE]: state => state +1,
        [DECREASE]: state => state -1,
    },
    initialState,
);


export default counter;