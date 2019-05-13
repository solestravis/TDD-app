import { insultGenerator } from './services';
import { call, put } from 'redux-saga/effects';
import { newError, saveInsult } from './action';

export function* getInsults () {
    try {
        const data = yield call(insultGenerator);
        yield put(saveInsult(data));
    } catch (e) {
        console.log(e);
        yield put(newError(e.message));
    }
}
