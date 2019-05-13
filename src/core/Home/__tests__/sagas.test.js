import { getInsults } from '../sagas';
import { insultGenerator } from '../services';
import { call, put } from 'redux-saga/effects';
import { loadInsult, newError, saveInsult } from '../action';

describe('Sagas', () => {

    it('should set Pokemons if name is valid', () => {
        const insult = 'random insult';
        const gen = getInsults(loadInsult);
        expect(gen.next().value).toEqual(call(insultGenerator));
        expect(gen.next(insult).value).toEqual(put(saveInsult(insult)));
        expect(gen.next().done).toBeTruthy();
    });

    it('should handle error if API call fails', () => {
        const error = { message: '' };
        const gen = getInsults(loadInsult);

        expect(gen.next().value).toEqual(call(insultGenerator));
        expect(gen.throw(error).value).toEqual(put(newError(error.message)));
        expect(gen.next().done).toBeTruthy();
    });

});
