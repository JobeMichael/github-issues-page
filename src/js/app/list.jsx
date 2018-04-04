import React, { Component } from 'react';

export default class List extends Component {
    constructor(props) {
        super(props);

    };
    render() {
        return (
            <div>
                <h1>List Page</h1>
                <a href="/detail">GO to detail</a>
            </div>
        )
    }
}
