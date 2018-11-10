import React from 'react';
import {shallow} from 'enzyme';

import '../setup-env.js'; // Setup Enzyme & Adapter

import Header from '../../client/components/Header';

describe('<Header />', () => {
    test('renders Header component without crashing', () => {
        const wrapper = shallow(<Header/>)
    });
    test('contains a writing of the title', () => {
        const expected = 'Boilerplate React-Redux';
        const wrapper = shallow(<Header />);
        expect((wrapper.text()).toUpperCase()).toContain(expected.toUpperCase());
    });
})