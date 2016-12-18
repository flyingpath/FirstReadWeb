import {observable} from 'mobx' 
import {action} from 'mobx' 
import mobx from 'mobx' 
import _ from 'lodash' 

var loadList = observable({
    allList: [],
    newList:[],
    oldList:[],
    shortTitleOld:{},
    shortTitleNew:{},
    fullTitleOld:{},
    fullTitleNew:{},
    ready: false,
})

const loaddata = ()=>{
    loadList.ready = false
    const uriOld = '/public/bibledata/BibleListOld.txt'
    const uriNew = '/public/bibledata/BibleListNew.txt'
    const f1 = fetch(uriOld).then( (response)=>(response.text()) )
    const f2 = fetch(uriNew).then( (response)=>(response.text()) )
    Promise.all([f1, f2]).then((backdata)=>{
        const dataOld = backdata[0].split('\n'),
              dataNew = backdata[1].split('\n')
        const arrayOld = _.map(dataOld, (item) => {
            return (item.split(', '))
        })        
        const arrayNew = _.map(dataNew, (item) => {
            return (item.split(', '))
        })
        loadList.oldList = arrayOld  
        loadList.newList = arrayNew
        loadList.allList = arrayOld.concat(arrayNew) 

        const shortTitleOld = {
            Ch: _.map(arrayOld, (item) => {
                return (item[3])
            }),
            En: _.map(arrayOld, (item) => {
                return (item[0])
            }),
        }
        const shortTitleNew = {
            Ch: _.map(arrayNew, (item) => {
                return (item[3])
            }),
            En: _.map(arrayNew, (item) => {
                return (item[0])
            }),
        }        
        const fullTitleOld = {
            Ch: _.map(arrayOld, (item) => {
                return (item[2])
            }),
            En: _.map(arrayOld, (item) => {
                return (item[1])
            }),
        }
        const fullTitleNew = {
            Ch: _.map(arrayOld, (item) => {
                return (item[2])
            }),
            En: _.map(arrayOld, (item) => {
                return (item[1])
            }),
        }        
        loadList.shortTitleOld = shortTitleOld
        loadList.shortTitleNew = shortTitleNew
        loadList.fullTitleOld = fullTitleOld
        loadList.fullTitleNew = fullTitleNew
        loadList.ready = true
})
}

_.assign(loadList, {
    load: action(function(){
        loaddata()
    }),
})

export default loadList