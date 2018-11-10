import React from 'react';
import {shallow} from 'enzyme';

import '../setup-env.js'; // Setup Enzyme & Adapter

import Map from '../../client/components/Map';

describe('<Map />', () => {
    test('renders Map component without crashing', () => {
        const wrapper = shallow(<Map/>)
        expect(wrapper).toHaveLength(1)
    });
    test('contains an img', () => {
        const expected = `<img `;
        const wrapper = shallow(<Map />);
        expect(wrapper.html()).toMatch(expected);
    });
})