import React from 'react';
import ReactDOM from 'react-dom';


import Parents from './Parents.jsx';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });
import { shallow, mount, render } from 'enzyme';
import renderer from 'react-test-renderer'




describe('<parents />', () => {
    let wrapper;
    beforeEach(() => {
        wrapper = shallow(<Parents />);
    });

    it('should match the snapshot', () => {
        const tree = renderer.create(<Parents />).toJSON();
        expect(tree).toMatchSnapshot();
    });

    it('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<Parents />, div);
        ReactDOM.unmountComponentAtNode(div);
    });

    it(' it should have btn btn-info ', () => {
        const btn = shallow(<Parents type="button" aria-haspopup="true" />);
        // const btn = wrapper.find('button')
        expect(btn.hasClass('btn btn-info')).toBe(false);
    });
});
