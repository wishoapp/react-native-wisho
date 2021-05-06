import React from 'react';
import renderer from 'react-test-renderer';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { shallow } from 'enzyme';
import WishoBranch from "../../src/Component/WishoButton/WishoBranch";

Enzyme.configure({ adapter: new Adapter() });

describe('<WishoBranch />', () => {
    it('Wisho branch component renders in wisho modal', () => {
        const tree = renderer.create(<WishoBranch />).toJSON();
        expect(tree).toMatchSnapshot();
    });

    it('Wisho branch has object by passing props correctly', () => {
        const tree = shallow(<WishoBranch item={'Object Props'} />);
        expect(tree.find('Image').at(0).dive().text()).toEqual('Object Props');
    });
});
