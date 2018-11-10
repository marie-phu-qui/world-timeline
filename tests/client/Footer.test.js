import React from 'react';
import {shallow} from 'enzyme';

import '../setup-env.js'; // Setup Enzyme & Adapter

import Footer from '../../client/components/Footer';

describe('<Footer />', () => {
    test('renders Footer component without crashing', () => {
        const wrapper = shallow(<Footer/>)
    });
    test('contains a link to my github', () => {
        const expected = 'https://github.com/marie-phu-qui';
        const wrapper = shallow(<Footer />);
        expect(wrapper.html()).toMatch(expected);
    });
})