import Home from '../container';
import React from 'react';
import { Record } from 'immutable';
import configureStore from 'redux-mock-store';
import { homeReducer } from 'core/Home/reducer';
import saga from 'redux-saga';
import { shallow } from 'enzyme';
import { DEL_PHRASE, LOAD_PHRASE, SEARCH_PHRASE } from 'core/types';
import { deletePhrase, loadPhrase, searchPhrase } from 'core/Home/action';
import { phraseSelector, searchSelector } from 'core/Home/selector';

jest.mock('core/Home/selector', () => ({
    phraseSelector: jest.fn(),
    searchSelector: jest.fn()
}));

jest.mock('core/Home/action', () => ({
    deletePhrase: jest.fn(),
    loadPhrase: jest.fn(),
    searchPhrase: jest.fn()
}));

const payload = {};

const ACTION_DEL_PHR = {
    payload,
    type: DEL_PHRASE
};

const ACTION_LOAD_PHR = {
    type: LOAD_PHRASE
};

const ACTION_SEARCH_PHR = {
    payload,
    type: SEARCH_PHRASE
};

deletePhrase.mockImplementation(() => ACTION_DEL_PHR);
loadPhrase.mockImplementation(() => ACTION_LOAD_PHR);
searchPhrase.mockImplementation(() => ACTION_SEARCH_PHR);

const phraseCollection = ['phrase 0'];
const searchCollection = [];

const defaultState = new Record({
    phraseCollection,
    searchCollection
});

describe('Home container', () => {

    const middlewares = [saga];
    const mockStore = configureStore(middlewares);

    let newState;
    let store;
    let storeMock;
    let wrapper;

    beforeEach(() => {
        newState = homeReducer(new defaultState(), {});
        store = { home: newState };
        storeMock = mockStore(store);
        wrapper = shallow(<Home store={ storeMock } />);
    });

    afterEach(() => {
        phraseSelector.mockClear();
        searchSelector.mockClear();
    });

    describe('mapDispatchToProps', () => {

        it('should have deletePhrase action dispatcher', () => {
            expect(wrapper.prop('deletePhrase')).toBeInstanceOf(Function);
            expect(deletePhrase()).toBe(ACTION_DEL_PHR);
        });

        it('should have loadPhrase action dispatcher', () => {
            expect(wrapper.prop('loadPhrase')).toBeInstanceOf(Function);
            expect(loadPhrase()).toBe(ACTION_LOAD_PHR);
        });

        it('should have searchPhrase action dispatcher', () => {
            expect(wrapper.prop('searchPhrase')).toBeInstanceOf(Function);
            expect(searchPhrase()).toBe(ACTION_SEARCH_PHR);
        });

    });

    describe('mapStateToProps', () => {

        it('phraseSelector should set phrase array as prop', () => {
            expect(phraseSelector).toHaveBeenCalledTimes(1);
            expect(phraseSelector).toHaveBeenCalledWith(store);
        });
        
        it('searchSelector should set phrase array as prop', () => {
            expect(searchSelector).toHaveBeenCalledTimes(1);
            expect(searchSelector).toHaveBeenCalledWith(store);
        });

    });

});
