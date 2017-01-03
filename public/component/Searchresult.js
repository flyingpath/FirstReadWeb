import React, { Component, PropTypes } from 'react' 
import {observer} from 'mobx-react' 
import mobx from 'mobx' 
import _ from 'lodash'

import homePage from '../store/homePage'
import searchResult from '../store/searchResult' 

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
        return (
            <div id = 'searchResult' style = {style.div}>
                <Table style={{backgroundColor:'transparent'}}>
                <TableBody displayRowCheckbox={false} stripedRows={false}  >
                {
                    ()=>{
                        if(searchResult.data[homePage.lan]){
                            const rtn = _.map(searchResult.data[homePage.lan], (eachdata, key) => (
                                    <TableRow key={key} selected={false}>
                                        <TableRowColumn style = {style.book}>{eachdata[0]}</TableRowColumn>
                                        <TableRowColumn style = {style.chap_sent}>{`${eachdata[1]} : ${eachdata[2]}`}</TableRowColumn>
                                        <TableRowColumn style = {style.content}>{eachdata[3]}</TableRowColumn>
                                    </TableRow>
                            ))
                            return rtn
                        }else{
                            return (
                                <div> no search value </div>
                            )
                        }
                    }()
                }
                </TableBody>
                </Table>
            </div>
        )
    }
}

const style = {
    div:{
        width:'50%', minWidth:'350px',
        boxSizing:'border-box',
    },
    book:{
        paddingLeft: '0px',
        paddingRight: '0px',
        width: '70px',
        textAlign: 'center',
        overflow: 'visible',
        whiteSpace: 'pre-line'
    },
    chap_sent:{
        width: '50px',
        paddingLeft: '0px',
        paddingRight: '0px',
        textAlign: 'center',
    },
    content:{
        paddingLeft: '10px',
        paddingRight: '10px',
        overflow: 'visible',
        whiteSpace: 'pre-line'
    },
}

export default observer(SearchResult)