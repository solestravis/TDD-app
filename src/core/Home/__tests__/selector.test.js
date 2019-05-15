import { homeReducer } from '../reducer';
import { phraseSelector, searchSelector } from '../selector';
import { savePhrase, searchPhrase } from '../action';

const phraseCollection = [];
const searchCollection = [];

const defaultState = () => ({
    phraseCollection,
    searchCollection
});

describe('Phrases selector', () => {

    it('should return same empty array', () => {
        const newState = homeReducer(defaultState(), {});
        const store = { home: newState };
        const result = phraseSelector(store);
        expect(result).toEqual(phraseCollection);
    });

    it('should return same array', () => {
        const payload = 'random phrase';
        const newState = homeReducer(defaultState(), savePhrase(payload));
        const store = { home: newState };
        const result = phraseSelector(store);
        expect(result).toEqual(newState.phraseCollection);
    });

});

describe('Search selector', () => {

    it('should return same empty array', () => {
        const newState = homeReducer(defaultState(), {});
        const store = { home: newState };
        const result = searchSelector(store);
        expect(result).toEqual(searchCollection);
    });

    it('should return same array', () => {
        const prevState = { ...defaultState(), phraseCollection: ['foo'] };
        const payload = 'foo';
        const newSearchCollection = [payload];
        const newState = homeReducer(prevState, searchPhrase(payload));
        const store = { home: newState };
        const result = searchSelector(store);
        expect(result).toEqual(newSearchCollection);
    });

});
