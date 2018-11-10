import React from 'react';
import {shallow} from 'enzyme';

import '../setup-env.js'; // Setup Enzyme & Adapter

import Timeline from '../../client/components/Timeline';

describe('<Timeline />', () => {
    test('renders Timeline component without crashing', () => {
        const wrapper = shallow(<Timeline/>)
        expect(wrapper).toHaveLength(1)
    });
})