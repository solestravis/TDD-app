import List from '../index';

import React from 'react';
import { shallow } from 'enzyme';

describe('<List />', () => {
    let wrapper;
    const children = 'children';

    beforeEach(() => {
        wrapper = shallow(
            <List>{ children }</List>
        );
    });

    describe('render', () => {

        it('always renders StyledList', () => {
            const styledList = wrapper.find('StyledList');
            expect(styledList).toHaveLength(1);
        });

        it('should have children', () => {
            expect(wrapper.prop('children')).toBe(children);
        });

    });

});
