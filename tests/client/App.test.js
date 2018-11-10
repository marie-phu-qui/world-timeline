import React from 'react';
import {shallow, mount} from 'enzyme';

import '../setup-env.js'; // Setup Enzyme & Adapter

import App from '../../client/components/App';
import Header from '../../client/components/Header';
import Footer from '../../client/components/Footer';


describe('<App />', () => {
    test('renders App component without crashing', () => {
        const wrapper = shallow(<App/>)
    });
    test('contains all : <Header /><Footer />" components', () => {
        const expected = '<Header /><Footer />';
        const wrapper = shallow(<App />);
        expect(wrapper.text()).toMatch(expected);
    });
})