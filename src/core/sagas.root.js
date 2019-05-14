import { LOAD_PHRASE } from './types';
import { getPhrases } from './Home/sagas';
import { takeEvery } from 'redux-saga/effects';

function* rootSagas () {
    yield takeEvery(LOAD_PHRASE, getPhrases);
}

export default rootSagas;
