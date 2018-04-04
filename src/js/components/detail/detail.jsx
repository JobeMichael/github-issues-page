import React, { Fragment } from 'react';
import { formatDate } from '../../utils'
import Comments from './comments'

const Detail = (props) => {
    console.log(props.data)
    return (
        <Fragment>
            {typeof props.data.user !== 'undefined'
                ? <Fragment>
                    <Comments data={props.data} />
                </Fragment>
                : ''
            }
        </Fragment>
    );
}
export default Detail;