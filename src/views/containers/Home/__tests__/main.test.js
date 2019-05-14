import Home from '../main';

import React from 'react';
import { shallow } from 'enzyme';

describe('<Home />', () => {

    let wrapper;

    const deletePhrase = jest.fn();
    const loadPhrase = jest.fn();
    const searchPhrases = jest.fn();

    const props = {
        children: '',
        deletePhrase,
        phrases: [],
        loadPhrase,
        searchPhrases
    };

    beforeEach(() => {
        wrapper = shallow(
            <Home { ...props } />
        );
    });

    describe('render', () => {

        it('always renders Layout', () => {
            const layout = wrapper.find('Layout');
            expect(layout).toHaveLength(1);
        });

        it('always renders Container', () => {
            const container = wrapper.find('Container');
            expect(container).toHaveLength(1);
        });

        it('always renders Button', () => {
            const button = wrapper.find('Button');
            expect(button).toHaveLength(1);
        });

        it('always renders List', () => {
            const list = wrapper.find('List');
            expect(list).toHaveLength(1);
        });

        it('always renders Input', () => {
            const input = wrapper.find('Input');
            expect(input).toHaveLength(1);
        });

        it('always renders Cross', () => {
            const cross = wrapper.find('Cross');
            expect(cross).toHaveLength(1);
        });

    });

    describe('methods', () => {

        it('calls _handleButtonClick and dispatches loadPhrase', () => {
            const mockHandleClick = jest.spyOn(wrapper.instance(), '_handleButtonClick');
            wrapper.instance().forceUpdate();
            wrapper.instance()._handleButtonClick();
            expect(mockHandleClick).toHaveBeenCalled();
            expect(loadPhrase).toHaveBeenCalledTimes(1);
        });

        it('calls _handleCrossClick and dispatches deletePhrase', () => {
            const mockHandleClick = jest.spyOn(wrapper.instance(), '_handleCrossClick');
            wrapper.instance().forceUpdate();
            wrapper.instance()._handleCrossClick();
            expect(mockHandleClick).toHaveBeenCalled();
            expect(deletePhrase).toHaveBeenCalledTimes(1);
        });

        it('calls _handleInputChange and dispatches searchPhrases', () => {
            const mockHandleChange = jest.spyOn(wrapper.instance(), '_handleInputChange');
            wrapper.instance().forceUpdate();
            wrapper.instance()._handleInputChange();
            expect(mockHandleChange).toHaveBeenCalled();
            expect(searchPhrases).toHaveBeenCalledTimes(1);
        });

    });

});
