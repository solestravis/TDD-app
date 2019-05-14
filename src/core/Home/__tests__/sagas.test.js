import { getPhrases } from '../sagas';
import { phraseGenerator } from '../services';
import { call, put } from 'redux-saga/effects';
import { loadPhrase, newError, savePhrase } from '../action';

describe('Sagas', () => {

    it('should set Pokemons if name is valid', () => {
        const phrase = 'random phrase';
        const gen = getPhrases(loadPhrase);
        expect(gen.next().value).toEqual(call(phraseGenerator));
        expect(gen.next(phrase).value).toEqual(put(savePhrase(phrase)));
        expect(gen.next().done).toBeTruthy();
    });

    it('should handle error if API call fails', () => {
        const error = { message: '' };
        const gen = getPhrases(loadPhrase);

        expect(gen.next().value).toEqual(call(phraseGenerator));
        expect(gen.throw(error).value).toEqual(put(newError(error.message)));
        expect(gen.next().done).toBeTruthy();
    });

});
