import {observable, observe} from 'mobx'
import {action} from 'mobx' 
import mobx from 'mobx' 
import _ from 'lodash' 

import loadList from './loadList'

var loadText = observable({
    dataAll: {},
    dataOld: {},
    dataNew: {},
    lan: 'Ch',
    ready:false,
})

let loaddata = observe(loadList, (change)=>{
    if(change.name == 'ready' && loadList.ready == true){        
        loadText.ready = false
        const lanList = ['Ch', 'En']
        for(let lanIdx in lanList){
            let uriArray = [], 
                fetchArray = []
            _.forEach(loadList.shortTitleOld.En, (eachtitle)=>{
                uriArray.push(`/public/bibledata/${lanList[lanIdx]}/Old/${eachtitle}.txt`)
            })
            _.forEach(loadList.shortTitleNew.En, (eachtitle)=>{
                uriArray.push(`/public/bibledata/${lanList[lanIdx]}/New/${eachtitle}.txt`)
            })
            _.forEach(uriArray, (eachuri) => {
                fetchArray.push(fetch(eachuri).then((response)=>(response.json())) )
            })
            Promise.all(fetchArray).then( (backdata)=>{
                loadText.dataAll[lanList[lanIdx]] = backdata
                loadText.dataOld[lanList[lanIdx]] = backdata.slice(0, 39)
                loadText.dataNew[lanList[lanIdx]] = backdata.slice(39, 66)
                loadText.ready = true
            })
        }
    }
})


_.assign(loadText, {
    load: action(function(){
        loaddata()
    }),
    setLan: action((lanStr)=>{
        this.lan = lanStr
    }),
})

export default loadText