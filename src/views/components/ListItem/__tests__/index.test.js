import ListItem from '../index';

import React from 'react';
import { shallow } from 'enzyme';

describe('<ListItem />', () => {
    let wrapper;
    const children = 'children';

    beforeEach(() => {
        wrapper = shallow(
            <ListItem>{ children }</ListItem>
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

    });

});
