import ListItem from '../index';

import React from 'react';
import { shallow } from 'enzyme';

describe('<ListItem />', () => {
    let wrapper;
    const children = 'children';
    const id = '2';

    beforeEach(() => {
        wrapper = shallow(
            <ListItem id={ id }>{ children }</ListItem>
        );
    });

    describe('render', () => {

        it('always renders StyledListItem', () => {
            const styledListItem = wrapper.find('StyledListItem');
            expect(styledListItem).toHaveLength(1);
        });

        it('should have children', () => {
            expect(wrapper.prop('children')).toBe(children);
        });

        it('should take an id', () => {
            expect(wrapper.prop('id')).toBe(id);
        });

    });

});
