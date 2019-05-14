import { DEL_PHRASE, LOAD_PHRASE, NEW_ERR, SAVE_PHRASE, SEARCH_PHRASE } from '../types';

export function deletePhrase (payload) {
    return {
        payload,
        type: DEL_PHRASE
    };
}

export function loadPhrase () {
    return {
        type: LOAD_PHRASE
    };
}

export function newError (payload) {
    return {
        payload,
        type: NEW_ERR
    };
}

export function savePhrase (payload) {
    return {
        payload,
        type: SAVE_PHRASE
    };
}

export function searchPhrase (payload) {
    return {
        payload,
        type: SEARCH_PHRASE
    };
}
