import React, { Component } from 'react';
import { getDdata } from '../service'

import ListItem from '../components/list/listitem'


export default class List extends Component {
    constructor(props) {
        super(props);
        this.state = {
            list: []
        }
    };
    componentDidMount() {
        getDdata('https://api.github.com/repos/angular/angular.js/issues').then(data => {
            this.setState({
                list: data
            })
        })
    }
    render() {
        return (
            <div>
                <h1>List Page</h1>
                {this.state.list.map((ele, index) => {
                    return <ListItem key={`ListItem_${index}`} {...ele} />
                })}

            </div>
        )
    }
}
