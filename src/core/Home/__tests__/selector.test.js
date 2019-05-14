import { homeReducer } from '../reducer';
import { phraseSelector } from '../selector';
import { savePhrase } from '../action';

const phraseCollection = [];

const defaultState = () => ({
    phraseCollection
});

describe('Phrases selector', () => {

    it('should return same empty array', () => {
        const newState = homeReducer(defaultState(), {});
        const store = { home: newState };
        const result = phraseSelector(store);
        expect(result).toEqual(phraseCollection);
    });

    it('should return only phrase in the array', () => {
        const phrase = 'random phrase';
        const payload = [phrase];
        const newState = homeReducer(defaultState(), savePhrase(payload));
        const store = { home: newState };
        const result = phraseSelector(store);
        expect(result).toEqual([phrase]);
    });

});
