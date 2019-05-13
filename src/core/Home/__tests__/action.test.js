import {
    DEL_INSULT,
    LOAD_INSULT,
    SAVE_INSULT,
    SEARCH_INSULT
} from '../../types';
import { deleteInsult, loadInsult, saveInsult, searchInsult } from '../action';

describe('Home actions', () => {

    const payload = '';

    it('loadInsult', () => {
        const result = loadInsult();
        expect(result).toEqual({
            type: LOAD_INSULT
        });
    });

    it('saveInsult', () => {
        const result = saveInsult(payload);
        expect(result).toEqual({
            payload,
            type: SAVE_INSULT
        });
    });

    it('searchInsult', () => {
        const result = searchInsult(payload);
        expect(result).toEqual({
            payload,
            type: SEARCH_INSULT
        });
    });

    it('deleteInsult', () => {
        const result = deleteInsult(payload);
        expect(result).toEqual({
            payload,
            type: DEL_INSULT
        });
    });
    
});
