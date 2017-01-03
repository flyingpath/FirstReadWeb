import {observable} from 'mobx' 
import {action} from 'mobx' 
import mobx from 'mobx' 
import _ from 'lodash' 

var homePage = observable({
    lan: 'Ch',
})

_.assign(homePage, {
    toggleLan: action(function(){
        if(this.lan == 'Ch'){
            this.lan = 'En'
        }else{
            this.lan = 'Ch'
        }
    }),
})

export default homePage