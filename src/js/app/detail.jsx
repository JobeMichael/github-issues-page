import React, { Component } from 'react';
import 'url-search-params-polyfill';

export default class Detail extends Component {
    constructor(props) {
        super(props);
        const search = props.location.search; // could be '?foo=bar'
        const params = new URLSearchParams(search);
        const foo = params.get('id'); // bar
        console.log(foo);

    };
    render() {
        return (
            <h1>Detail Page</h1>
        )
    }
}
