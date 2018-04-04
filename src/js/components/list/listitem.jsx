import React, { Fragment } from 'react';
import { formatDate } from '../../utils'
import { Link } from 'react-router-dom'

const ListItem = (props) => {
    return (
        <Fragment>

            <Link to={{
                pathname: '/detail',
                search: `id=${props.number}`,
                // hash: `#${props.number}`,

            }} className="issue-list-item">
                <i className='icono-exclamationCircle'></i>
                <div style={{ marginLeft: '28px' }}>
                    <strong className="item-title">
                        {props.title}
                    </strong>
                    <span className="labels">
                        {props.labels.map((elem, index) => {
                            return <span key={`Labels_${index}`} className="label" style={{ backgroundColor: `#${elem.color}` }}>
                                {elem.name}
                            </span>
                        })}
                    </span>{
                        props.comments > 0
                            ? <span className="comments"> <i className="icono-comment"></i>{props.comments}</span>
                            : ''
                    }

                    <div className='issue-list-history'>
                        <span className="number">#{props.number}</span>
                        <span className="item-openedBy">
                            {`opened on ${formatDate(props.created_at)} by `}
                            <strong> {props.user.login}</strong>
                        </span>
                    </div>
                </div>

            </Link>
        </Fragment>
    );
}
export default ListItem;