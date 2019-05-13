import { DEL_INSULT, LOAD_INSULT, SAVE_INSULT, SEARCH_INSULT } from '../types';

export function deleteInsult (payload) {
    return {
        payload,
        type: DEL_INSULT
    };
}

export function loadInsult () {
    return {
        type: LOAD_INSULT
    };
}

export function newError (payload) {
    return {
        payload,
        type: LOAD_INSULT
    };
}

export function saveInsult (payload) {
    return {
        payload,
        type: SAVE_INSULT
    };
}

export function searchInsult (payload) {
    return {
        payload,
        type: SEARCH_INSULT
    };
}
