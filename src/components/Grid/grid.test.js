import React from 'react';
import { shallow } from 'enzyme';
import { Row, Column } from './index.js';

describe('Row', () => {
    let wrapper;
    beforeEach(() => {
        wrapper = shallow(<Row className="slime"><div>yay</div></Row>)
    })
    it('render Component', () => {
        expect(wrapper).toHaveLength(1)
        expect(wrapper.find('.container-row')).toHaveLength(1)
        expect(wrapper.find('.slime')).toHaveLength(1)
    })
})