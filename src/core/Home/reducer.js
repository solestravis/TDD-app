import { SAVE_PHRASE } from 'core/types';

const defaultState = () => ({
    phraseCollection: []
});

export function homeReducer (state = defaultState(), { type, payload }) {
    switch (type) {
    case SAVE_PHRASE:
        return {
            ...state,
            phraseCollection: [...state.phraseCollection, payload]
        };
    default:
        return state;
    }
}
