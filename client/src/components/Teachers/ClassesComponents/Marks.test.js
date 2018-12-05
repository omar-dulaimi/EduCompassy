import React from 'react';
import ReactDOM from 'react-dom';
import Marks from './Marks.jsx';
import { configure } from 'enzyme';
import { shallow } from 'enzyme';
//import { shallow, mount, render } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import renderer from 'react-test-renderer';
configure({ adapter: new Adapter() });
// import Home from '../Home/Home.jsx'
describe('<Marks />', () => {
   
    it('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<Marks />, div);
        ReactDOM.unmountComponentAtNode(div);
    });
});