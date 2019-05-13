import { LOAD_INSULT } from './types';
import { getInsults } from './Home/sagas';
import { takeEvery } from 'redux-saga/effects';

function* rootSagas () {
    yield takeEvery(LOAD_INSULT, getInsults);
}

export default rootSagas;
