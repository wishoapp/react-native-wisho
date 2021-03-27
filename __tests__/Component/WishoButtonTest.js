import React from 'react';
import renderer from 'react-test-renderer';
import WishoButton from "../../src/Component/WishoButton";

test('Wisho button renders correctly', () => {
    const tree = renderer.create(<WishoButton />).toJSON();
    expect(tree).toMatchSnapshot();
});
