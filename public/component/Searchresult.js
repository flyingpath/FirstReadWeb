import React, { Component, PropTypes } from 'react' 
import {observer} from 'mobx-react' 
import mobx from 'mobx' 
import _ from 'lodash'

import loadText from '../store/loadText' 
import loadList from '../store/loadList' 

import {Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn} from 'material-ui/Table'

class SearchResult extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            
        };
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        console.log(this); // React Component instance
    }

    render() {
        console.log(mobx.toJS(loadText));
        console.log(mobx.toJS(loadList));
        return (
            <div></div>
        );
    }
}

export default observer(SearchResult)