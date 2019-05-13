import Home from '../container';
import React from 'react';
import { Record } from 'immutable';
import configureStore from 'redux-mock-store';
import { homeReducer } from 'core/Example/reducer';
import saga from 'redux-saga';
import { shallow } from 'enzyme';

const insultCollection = ['insult 0'];

const defaultState = new Record({
    insultCollection
});

describe('Home container', () => {
    
    const middlewares = [saga];
    const mockStore = configureStore(middlewares);

    let newState;
    let store;
    let wrapper;

    beforeEach(() => {
        newState = homeReducer(new defaultState(), {});
        store = mockStore({ home: newState });
        wrapper = shallow(<Home store={ store } />);
    });

    describe('mapDispatchToProps', () => {

        it('should have loadInsult action dispatcher', () => {
            expect(wrapper.prop('exampleActionCreator')).toBeInstanceOf(Function);
        });

        it('should have deleteInsult action dispatcher', () => {
            expect(wrapper.prop('exampleActionCreator')).toBeInstanceOf(Function);
        });

        it('should have searchInsults action dispatcher', () => {
            expect(wrapper.prop('exampleActionCreator')).toBeInstanceOf(Function);
        });

    });

    describe('mapStateToProps', () => {

        it('insultSelector should set array of insults', () => {
            expect(wrapper.prop('insultCollection')).toEqual(insultCollection);
        });

    });

});
