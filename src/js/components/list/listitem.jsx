import React, { Fragment } from 'react';
import { formatDate } from '../../utils'

const ListItem = (props) => {
    return (
        <Fragment>
            <a className="issue-list-item" href="/angular/angular.js/issues/16514">
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
                        return <span key={`Labels_${index}`} className="label">
                            {elem.name}
                        </span>
                    })}
                </span>
            </a>
        </Fragment>
    );
}
export default ListItem;