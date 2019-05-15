import { DEL_PHRASE, SAVE_PHRASE, SEARCH_PHRASE } from 'core/types';

const defaultState = () => ({
    phraseCollection: [],
    searchCollection: []
});

export function homeReducer (state = defaultState(), { type, payload }) {
    const { phraseCollection } = state;
    switch (type) {
    case SAVE_PHRASE:
        return {
            ...state,
            phraseCollection: [...phraseCollection, payload]
        };
    case DEL_PHRASE:
        const id = Number(payload);
        return {
            ...state,
            phraseCollection: phraseCollection.filter((phrase, index) => id !== index)
        };
    case SEARCH_PHRASE:
        return {
            ...state,
            searchCollection: phraseCollection.filter(phrase => phrase.includes(payload))
        };
    default:
        return state;
    }
}
