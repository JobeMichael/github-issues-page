import React, { Component, Fragment } from 'react';
import { getData } from '../service'

import ListItem from '../components/list/listitem'


export default class List extends Component {
    constructor(props) {
        super(props);
        this.state = {
            list: []
        }
    };
    componentDidMount() {
        getData().then(data => {
            this.setState({
                list: data
            })
        })
    }
    render() {
        return (
            <Fragment>
                <h1>Angular Issues</h1>
                <div className="list-header">
                    <div className='list-header-left'>Open Issues</div>
                    <div className='list-header-right'><a href='#'></a></div>
                </div>
                <div className='issue-list'>
                    {this.state.list.map((ele, index) => {
                        return <ListItem key={`ListItem_${index}`} {...ele} />
                    })}
                </div>

            </Fragment>
        )
    }
}
