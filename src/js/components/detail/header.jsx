import React, { Fragment } from 'react';
import { formatDate } from '../../utils'
import History from './history'

const Header = (props) => {
    console.log(props.data)
    return (
        <Fragment>
            {typeof props.data.user !== 'undefined'
                ? <Fragment>
                    <h1>{props.data.title}</h1> <span className='detail-number'>{props.data.number}</span>
                    <History data={props.data} />
                </Fragment>
                : ''
            }
        </Fragment>
    );
}
export default Header;