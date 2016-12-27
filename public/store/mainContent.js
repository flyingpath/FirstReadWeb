import {observable} from 'mobx' 
import {action} from 'mobx' 
import mobx from 'mobx' 
import _ from 'lodash' 

var mainContent = observable({
    data: [],
})

const loaddata = ()=>{
    
}

_.assign(mainContent, {
    load: action(function(){
        loaddata()
    }),
    setData: action( (data)=>{
        this.data = data
    }),
})

export default mainContent