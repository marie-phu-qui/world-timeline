import React from 'react';
import {shallow, mount} from 'enzyme';

import '../setup-env.js'; // Setup Enzyme & Adapter

import App from '../../client/components/App';


describe('<App />', () => {
    test('renders App component without crashing', () => {
        const wrapper = shallow(<App/>)
        expect(wrapper).toHaveLength(1)
    });
    test('contains all : <Header /><Timeline /><Map /><Events /><Footer />" components', () => {
        const expected = '<Header /><Timeline /><Map /><Events /><Footer />';
        const wrapper = shallow(<App />);
        expect(wrapper.text()).toMatch(expected);
    });
})