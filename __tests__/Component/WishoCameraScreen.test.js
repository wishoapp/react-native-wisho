import React from 'react';
import renderer from 'react-test-renderer';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { shallow } from 'enzyme';
import WishoCameraScreen from "../../src/Component/WishoButton/WishoCameraScreen";

Enzyme.configure({ adapter: new Adapter() });

describe('<WishoCameraScreen />', () => {
    it('wisho camera screen renders', () => {
        const tree = renderer.create(<WishoCameraScreen />).toJSON();
        expect(tree).toMatchSnapshot();
    });

    it('wisho camera screen has state by passing props correctly', () => {
        const tree = shallow(<WishoCameraScreen toggleCameraModal={<View/>} />);
        expect(tree.find('Modal').at(0).dive().text()).toEqual(<View/>);
    });

    it('wisho camera screen has function by passing props correctly', () => {
        const tree = shallow(<WishoCameraScreen isCameraModalOpen={<View/>} />);
        expect(tree.find('Modal').at(0).dive().text()).toEqual(<View/>);
    });
});
