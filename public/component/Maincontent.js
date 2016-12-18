import React from 'react'
import ReactDom from 'react-dom'
import FontAwesome from 'react-fontawesome'
import {observer} from 'mobx-react'
import '../css/font-awesome/css/font-awesome.min.css!'
import ImgBook from 'material-ui/svg-icons/action/book'
import IconButton from 'material-ui/IconButton'

import loadText from '../store/loadText'
import loadList from '../store/loadList'

class Maincontent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            
        };
    }
    
    componentWillMount () {

    }

    render() {
        return ( 
            <div id = "bible">
                <IconButton style={{width:'',height:''}} iconStyle={{height:'120px', width:'100px'}}>
                    <ImgBook />
                </IconButton> 
                <IconButton style={{width:'',height:''}} iconStyle={{height:'120px', width:'100px'}}>
                    <ImgBook  />
                </IconButton>
            </div>
        )
    }
}

export default observer(Maincontent)


