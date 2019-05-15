import { Item } from '../index';

import React from 'react';
import { shallow } from 'enzyme';

describe('<ListItem />', () => {
    let wrapper;
    const onCrossClick = jest.fn();
    const props = {
        onCrossClick,
        phrases: []
    };

    beforeEach(() => {
        wrapper = shallow(
            <Item { ...props } />
        );
        console.log(wrapper.debug());
    });

    describe('render', () => {

        it('renders nothing when there are no items in the array', () => {
            expect(wrapper).toBeUndefined();
        });

        it('renders StyledListItem when there are items in array', () => {
            wrapper.setProps({
                ...props,
                phrases: ['me']
            });
            const styledListItem = wrapper.find('StyledListItem');
            expect(styledListItem).toHaveLength(1);
        });

    });

});
