import Home from '../main';

import React from 'react';
import { shallow } from 'enzyme';

describe('<Home />', () => {

    let wrapper;

    const deleteInsult = jest.fn();
    const loadInsult = jest.fn();
    const searchInsults = jest.fn();

    const props = {
        children: '',
        deleteInsult,
        insults: [],
        loadInsult,
        searchInsults
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

        it('calls _handleButtonClick and dispatches loadInsult', () => {
            const mockHandleClick = jest.spyOn(wrapper.instance(), '_handleButtonClick');
            wrapper.instance().forceUpdate();
            wrapper.instance()._handleButtonClick();
            expect(mockHandleClick).toHaveBeenCalled();
            expect(loadInsult).toHaveBeenCalledTimes(1);
        });

        it('calls _handleCrossClick and dispatches deleteInsult', () => {
            const mockHandleClick = jest.spyOn(wrapper.instance(), '_handleCrossClick');
            wrapper.instance().forceUpdate();
            wrapper.instance()._handleCrossClick();
            expect(mockHandleClick).toHaveBeenCalled();
            expect(deleteInsult).toHaveBeenCalledTimes(1);
        });

        it('calls _handleInputChange and dispatches searchInsults', () => {
            const mockHandleChange = jest.spyOn(wrapper.instance(), '_handleInputChange');
            wrapper.instance().forceUpdate();
            wrapper.instance()._handleInputChange();
            expect(mockHandleChange).toHaveBeenCalled();
            expect(searchInsults).toHaveBeenCalledTimes(1);
        });

    });

});
