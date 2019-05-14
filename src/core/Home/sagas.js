import { phraseGenerator } from './services';
import { call, put } from 'redux-saga/effects';
import { newError, savePhrase } from './action';

export function* getPhrases () {
    try {
        const data = yield call(phraseGenerator);
        yield put(savePhrase(data));
    } catch (e) {
        console.log(e);
        yield put(newError(e.message));
    }
}
