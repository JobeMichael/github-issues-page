import React, { Component, Fragment } from 'react';
import 'url-search-params-polyfill';

import Header from '../components/detail/header';
import Details from '../components/detail/detail';
import Comments from '../components/detail/comments'
import { getData } from '../service';

export default class Detail extends Component {
    constructor(props) {
        super(props);
        const search = props.location.search; // could be '?foo=bar'
        this.id = new URLSearchParams(search).get('id');
        this.state = {
            detail: {},
            commentsData: []
        }
    };

    componentDidMount() {
        let commentsData;
        getData(`https://api.github.com/repos/angular/angular.js/issues/${this.id}/comments`).then(data => {
            commentsData = data;
            return getData(`https://api.github.com/repos/angular/angular.js/issues/${this.id}`)
        }).then((data) => {
            this.setState({
                commentsData: commentsData,
                detail: data
            })
        })
    }
    render() {
        return (
            <Fragment>
                <Header data={this.state.detail} />
                <Details data={this.state.detail} />
                {this.state.commentsData.map((ele, index) => {
                    return <Comments key={`Comments_${index}`} data={ele} />
                })}
            </Fragment>
        )
    }
}
