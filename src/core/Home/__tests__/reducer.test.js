import { homeReducer } from '../reducer';
import { saveInsult } from '../action';

const defaultState = () => ({
    insultCollection: []
});

describe('Example reducer', () => {

    it('should return default', () => {
        const result = homeReducer(undefined, {});
        const record = defaultState();
        expect(result).toEqual(record);
    });

    it('should save insult', () => {
        const payload = 'random insult';
        const result = homeReducer(defaultState(), saveInsult(payload));
        const record = { insultCollection: [payload] };
        expect(result).toEqual(record);
    });

});
