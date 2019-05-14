import {
    DEL_PHRASE,
    LOAD_PHRASE,
    SAVE_PHRASE,
    SEARCH_PHRASE
} from '../../types';
import { deletePhrase, loadPhrase, savePhrase, searchPhrase } from '../action';

describe('Home actions', () => {

    const payload = '';

    it('loadPhrase', () => {
        const result = loadPhrase();
        expect(result).toEqual({
            type: LOAD_PHRASE
        });
    });

    it('savePhrase', () => {
        const result = savePhrase(payload);
        expect(result).toEqual({
            payload,
            type: SAVE_PHRASE
        });
    });

    it('searchPhrase', () => {
        const result = searchPhrase(payload);
        expect(result).toEqual({
            payload,
            type: SEARCH_PHRASE
        });
    });

    it('deletePhrase', () => {
        const result = deletePhrase(payload);
        expect(result).toEqual({
            payload,
            type: DEL_PHRASE
        });
    });
    
});
