import { call, put, } from 'redux-saga/effects';
import createActionTypes  from '../../util/createRequestActionType';
import createRequestActionType from '../../util/createRequestActionType';

function* callAPI(action) {
    const { meta, data, label} = action.payload
    const actionTypes = yield call(createActionTypes, ...[label]);
    const { PENDING, SUCCESS, ERROR, DONE} = actionTypes;
    try {
        yield put({type: PENDING});
        const response = yield call(fetch, 'GET', '/foo/endpoint');
        yield put({type: SUCCESS, payload: { data: response.data}})
        return response
  
    } catch(err) {
        console.error("ERROR", err);
        yield put({type: ERROR, error: err})
    } finally {
        yield put({type: DONE})
    }
  }

  export default callAPI;