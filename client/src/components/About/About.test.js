import React from 'react';
import ReactDOM from 'react-dom';

import About from './About.jsx';

import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });
import { shallow, mount, render } from 'enzyme';
import renderer from 'react-test-renderer'






describe('<About />', () => {
    let wrapper;
    beforeEach(() => {
        wrapper = shallow(<About />);
    });

    it('should match the snapshot', () => {
        const tree = renderer.create(<About />).toJSON();
        expect(tree).toMatchSnapshot();
    });

    it('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<About />, div);
        ReactDOM.unmountComponentAtNode(div);
    });

    // it('should show four texts', () => {
    //     const text = wrapper.find('p').toJSON();
    //     expect(text).toEqual('Successful,Who We Are, A Unique Project, Our Targets');
    // });
    // it('should render one <About /> components', () => {
    //     expect(wrapper.find(About)).toHaveLength(1);
    //   });
});