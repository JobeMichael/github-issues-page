import { shallow } from 'enzyme'
import Comments from './comments.jsx'
import React, { Fragment } from 'react';
import Details from './detail.jsx'

describe('Detail', () => {
    it('renders Comments component', () => {
        var data = {
            user: {}
        }
        const commentWrapper = shallow(<Details data={data} />);
        expect(commentWrapper.find('Comments').length).toEqual(1);
    });

});
