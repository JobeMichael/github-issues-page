import React, { Component } from 'react';
import { getDdata } from '../service'

export default class List extends Component {
    constructor(props) {
        super(props);
    };
    componentDidMount() {
        getDdata('https://api.github.com/repos/angular/angular.js/issues').then(data => {
            console.log(data);
        })
    }
    render() {
        return (
            <div>
                <h1>List Page</h1>
                <a href="/detail">GO to detail</a>
            </div>
        )
    }
}
