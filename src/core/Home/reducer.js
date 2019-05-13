import { SAVE_INSULT } from 'core/types';

const defaultState = () => ({
    insultCollection: []
});

export function homeReducer (state = defaultState(), { type, payload }) {
    switch (type) {
    case SAVE_INSULT:
        return {
            ...state,
            insultCollection: [...state.insultCollection, payload]
        };
    default:
        return state;
    }
}
