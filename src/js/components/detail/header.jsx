import React, { Fragment } from 'react';
import { formatDate } from '../../utils'

const Header = (props) => {
    console.log(props.data)
    return (
        <Fragment>
            {typeof props.data.user !== 'undefined'
                ? <Fragment>
                    <h1>{props.data.title}</h1> <span className='detail-number'>{props.data.number}</span>
                    <div className='detail-open-issue-icon'>
                        <i className='icono-exclamationCircle'></i>
                    </div>
                    <div className='issue-list-history'>
                        <span className="item-openedBy">
                            {`opened on ${formatDate(props.data.created_at)} by `}
                            <strong> {props.data.user.login}</strong>
                        </span>
                        <span>{props.data.comments} comments</span>
                    </div>
                </Fragment>
                : ''
            }
        </Fragment>
    );
}
export default Header;