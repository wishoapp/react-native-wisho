import React from 'react';
import renderer from 'react-test-renderer';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { shallow } from 'enzyme';
import WishoButton from "../../src/Component/WishoButton";

Enzyme.configure({ adapter: new Adapter() });

describe('<WishoButton />', () => {
    it('Wisho button renders correctly', () => {
        const tree = renderer.create(<WishoButton />).toJSON();
        expect(tree).toMatchSnapshot();
    });

    it('Wisho button has default text correctly', () => {
        const tree = shallow(<WishoButton />);
        expect(tree.find('Text').at(0).dive().text()).toEqual('Connect via Wisho');
    });

    it('Wisho button has text by passing props correctly', () => {
        const tree = shallow(<WishoButton buttonText={'Just For Text'} />);
        expect(tree.find('Text').at(0).dive().text()).toEqual('Just For Text');
    });
});
