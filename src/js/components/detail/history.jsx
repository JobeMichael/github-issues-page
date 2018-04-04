import React, { Fragment } from 'react';
import { formatDate } from '../../utils'

const History = (props) => {
    return (
        <Fragment>
            <div className='issue-list-history'>
                <span className="item-openedBy">
                    {`opened on ${formatDate(props.data.created_at)} by `}
                    <strong> {props.data.user.login}</strong>
                </span>
                <span>  {props.data.comments} comments</span>
            </div>
        </Fragment>
    );
}
export default History;