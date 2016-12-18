import React, { Component, PropTypes } from 'react' 
import {observer} from 'mobx-react' 
import mobx from 'mobx' 
import _ from 'lodash' 

import TextField from 'material-ui/TextField'

import searchBar from '../store/searchBar'

const setValue = (e) => {
    searchBar.setValue(e.target.value)
}

const Searctbar = () =>{
    return (            
        <div id = "searchBar" >
            <TextField 
                hintStyle = {{ left: '90px' }} 
                hintText = "查詢經句"
                value = {searchBar.value}
                onChange = {setValue}
            />
        </div> 
    )
}

export default observer(Searctbar)