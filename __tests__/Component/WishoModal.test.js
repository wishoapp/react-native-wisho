import React from 'react';
import renderer from 'react-test-renderer';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { shallow } from 'enzyme';
import WishoModal from '../../src/Component/WishoButton/WishoModal';

Enzyme.configure({ adapter: new Adapter() });

describe('<WishoModal />', () => {
    it('Wisho modal renders in wisho modal', () => {
        const tree = renderer.create(<WishoModal />).toJSON();
        expect(tree).toMatchSnapshot();
    });

    it('Wisho modal has state by passing props correctly', () => {
        const tree = shallow(<WishoModal branchListModal={<View/>} />);
        expect(tree.find('Modal').at(0).dive().text()).toEqual(<View/>);
    });

    it('Wisho modal has function by passing props correctly', () => {
        const tree = shallow(<WishoModal toggleModal={<View/>} />);
        expect(tree.find('Modal').at(0).dive().text()).toEqual(<View/>);
    });

    it('Wisho modal has array by passing props correctly', () => {
        const tree = shallow(<WishoModal branches={<VirtualizedList />} />);
        expect(tree.find('FlatList').at(0).dive().text()).toEqual(<VirtualizedList />);
    });
});
