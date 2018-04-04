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
                <span className="number">#{props.number}</span>
                <strong className="item-title">
                    {props.title}
                </strong>
                <span className="item-openedBy">
                    Opened on
                    {formatDate(props.created_at)} by
                    <strong>{props.user.login}}</strong>
                </span>
                <span className="labels">
                    {props.labels.map((elem, index) => {
                        return <span key={`Labels_${index}`} className="label" style={{ backgroundColor: `#${elem.color}` }}>
                            {elem.name}
                        </span>
                    })}
                </span>
            </Link>
        </Fragment>
    );
}
export default ListItem;