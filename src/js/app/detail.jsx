import React, { Component } from 'react';
import 'url-search-params-polyfill';

import { getDdata } from '../service'

export default class Detail extends Component {
    constructor(props) {
        super(props);
        const search = props.location.search; // could be '?foo=bar'
        this.id = new URLSearchParams(search).get('id');
        this.state = {
            detail: {}
        }
    };

    componentDidMount() {
        getDdata(`https://api.github.com/repos/angular/angular.js/issues/${this.id}`).then(data => {
            this.setState({
                detail: data
            })
        })
    }
    render() {
        console.log('Details', this.state.detail);
        return (
            <h1>Detail Page</h1>
        )
    }
}
