import React from 'react'
import ReactDom from 'react-dom'
import FontAwesome from 'react-fontawesome'
import {observer} from 'mobx-react'
import '../css/font-awesome/css/font-awesome.min.css!'
import '../css/homepage.css!'
import TextField from 'material-ui/TextField'
import Toggle from 'material-ui/Toggle'
import ImgBook from 'material-ui/svg-icons/action/book'
import IconButton from 'material-ui/IconButton'

import loadText from '../store/loadText'
import loadList from '../store/loadList'

import Maincontent from './Maincontent'

class Homepage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            
        };
    }
    
    componentWillMount () {
        loadList.load()
    }

    render() {
        return ( 
            <div id = "main" >
            <div id = "title" >
                <h1 > Bible </h1> 
            </div>  
            <div id = "lanToggle"> 
                <div style = {{ width: '150px', margin:'0 auto'}}>
                <Toggle label = "English / 中文"  defaultToggled = { true } /> 
                </div>
            </div> 
            <div id = "searchBar" >
                <TextField hintStyle = {{ left: '90px' }}   hintText = "查詢經句" />
            </div> 
                <Maincontent />
            </div>
        )
    }
}

export default observer(Homepage)

