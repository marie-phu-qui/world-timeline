import React from 'react';
import {shallow} from 'enzyme';

import '../setup-env.js'; // Setup Enzyme & Adapter

import Events from '../../client/components/Events';

describe('<Events />', () => {
    test('renders Events component without crashing', () => {
        const wrapper = shallow(<Events/>)
        expect(wrapper).toHaveLength(1)
    });
})