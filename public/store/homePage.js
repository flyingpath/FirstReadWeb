import {observable} from 'mobx' 
import {action} from 'mobx' 
import mobx from 'mobx' 
import _ from 'lodash' 

var homePage = observable({
    lan: [],
})

const loaddata = ()=>{
    
}

_.assign(homePage, {
    load: action(function(){
        loaddata()
    }),
})

export default homePage