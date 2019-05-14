import { homeReducer } from '../reducer';
import { savePhrase } from '../action';

const defaultState = () => ({
    phraseCollection: []
});

describe('Example reducer', () => {

    it('should return default', () => {
        const result = homeReducer(undefined, {});
        const record = defaultState();
        expect(result).toEqual(record);
    });

    it('should save phrase', () => {
        const payload = 'random phrase';
        const result = homeReducer(defaultState(), savePhrase(payload));
        const record = { phraseCollection: [payload] };
        expect(result).toEqual(record);
    });

});
