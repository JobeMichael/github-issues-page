import { shallow } from 'enzyme'
import Comments from './comments.jsx'
import React, { Fragment } from 'react';



describe('Comments', () => {
    it('should be defined', () => {
        expect(Comments).toBeDefined();
    });
    it('renders ReactMarkdown component', () => {
        var data = {
            user: {}
        }
        const commentWrapper = shallow(<Comments data={data} />);
        expect(commentWrapper.find('ReactMarkdown').length).toEqual(1);
    });
    it('renders History component', () => {
        var data = {
            user: {}
        }
        const commentWrapper = shallow(<Comments data={data} />);
        expect(commentWrapper.find('History').length).toEqual(1);
    });
});
