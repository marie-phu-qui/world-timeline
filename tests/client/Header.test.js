import React from 'react';
import {shallow} from 'enzyme';

import '../setup-env.js'; // Setup Enzyme & Adapter

import Header from '../../client/components/Header';

describe('<Header />', () => {
    test('renders Header component without crashing', () => {
        const wrapper = shallow(<Header/>)
        expect(wrapper).toHaveLength(1)
    });
    test('contains a writing of the title', () => {
        const expected = 'Timeline of the world';
        const wrapper = shallow(<Header />);
        expect((wrapper.text()).toUpperCase()).toContain(expected.toUpperCase());
    });
})