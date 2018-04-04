import React, { Fragment } from 'react';
import { formatDate } from '../../utils'
import History from './history'

import ReactMarkdown from 'react-markdown';



const Comments = (props) => {
    return (
        <Fragment>
            <div className='profile-image'>
                <img src={props.data.user.avatar_url} />
                <span>{props.data.user.login}</span>
            </div>
            <div className='comments-wrapper'>
                <div className="list-header">
                    <div className='list-header-left'><History data={props.data} /></div>
                    <div className='list-header-right'></div>
                </div>
                <div className='issue-list'>
                    <ReactMarkdown
                        className="result"
                        source={props.data.body}
                        skipHtml={true}
                        escapeHtml={true}
                    />
                </div>
            </div>
        </Fragment>



    );
}
export default Comments;