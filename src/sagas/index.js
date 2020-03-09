import { takeLatest } from 'redux-saga/effects';
import callAPI from './callAPI';

function* mySagas(){
    yield takeLatest('CALL_API', callAPI)
}

export default mySagas;