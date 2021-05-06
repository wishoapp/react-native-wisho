import React from 'react';
import renderer from 'react-test-renderer';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { shallow } from 'enzyme';
import WishoQueueScreen from "../../src/Component/WishoButton/WishoQueueScreen";

Enzyme.configure({ adapter: new Adapter() });

describe('<WishoQueueScreen />', () => {
    it('Wisho queueu renders in wisho queue screeen', () => {
        const tree = renderer.create(<WishoQueueScreen />).toJSON();
        expect(tree).toMatchSnapshot();
    });

    it('Wisho queue screen has function by passing props correctly', () => {
        const tree = shallow(<WishoQueueScreen quiteFromQueue={'Find function'} />);
        expect(tree.find('TouchableOpacity').dive().text()).toEqual('Find function');
    });

    it('Wisho queue screen has state by passing props correctly', () => {
        const tree = shallow(<WishoQueueScreen queueNumber={'Görüşme Sıra Numaranız'} />);
        expect(tree.find('Text').dive().text()).toEqual('Görüşme Sıra Numaranız');
    });
});