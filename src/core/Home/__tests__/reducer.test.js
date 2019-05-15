import { homeReducer } from '../reducer';
import { deletePhrase, savePhrase, searchPhrase } from '../action';

const defaultState = () => ({
    phraseCollection: [],
    searchCollection: []
});

describe('Home reducer', () => {

    describe('default case', () => {

        it('should return default', () => {
            const result = homeReducer(undefined, {});
            const record = defaultState();
            expect(result).toEqual(record);
        });

    });

    const phrase0 = 'lorem phrase 0';
    const phrase1 = 'ipsum phrase 1';
    const phraseCollection = [phrase0, phrase1];

    describe('SAVE_PHRASE case', () => {

        const payload = 'new phrase';

        it('should save new phrase', () => {
            const result = homeReducer(defaultState(), savePhrase(payload));
            const record = { ...defaultState(), phraseCollection: [payload] };
            expect(result).toEqual(record);
        });
    
        it('should add new phrase to existing phrases', () => {
            const prevState = { ...defaultState(), phraseCollection };
            const result = homeReducer(prevState, savePhrase(payload));
            const record = { ...defaultState(), phraseCollection: [...phraseCollection, payload] };
            expect(result).toEqual(record);
        });

    });

    describe('DEL_PHRASE case', () => {

        const payload = 0;

        it('should delete phrase from array', () => {
            const prevState = { ...defaultState(), phraseCollection };
            const result = homeReducer(prevState, deletePhrase(payload));
            const record = { ...defaultState(), phraseCollection: [phrase1] };
            expect(result).toEqual(record);
        });

    });

    describe('SEARCH_PHRASE case', () => {

        const prevState = { ...defaultState(), phraseCollection };

        it('should return matched phrases in array', () => {
            const payload = 'ipsum';

            const result = homeReducer(prevState, searchPhrase(payload));
            const record = { ...defaultState(), phraseCollection, searchCollection: [phrase1] };
            expect(result).toEqual(record);
        });

        it('should return empty array if there are no results that match', () => {
            const payload = 'amet';

            const result = homeReducer(prevState, searchPhrase(payload));
            expect(result).toEqual(prevState);
        });

    });

});
