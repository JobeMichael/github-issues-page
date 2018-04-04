import React, { Fragment } from 'react';
import { formatDate } from '../../utils'
import Comments from './comments'

const Detail = (props) => {
    return (
        <Fragment>
            {typeof props.data.user !== 'undefined'
                ? <Comments data={props.data} />
                : ''
            }
        </Fragment>
    );
}
export default Detail;