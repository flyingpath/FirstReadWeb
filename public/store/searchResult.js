import {observable} from 'mobx' 
import {action} from 'mobx' 
import mobx from 'mobx' 
import _ from 'lodash' 

import loadText from './loadText'
import loadList from './loadList'
import searchBar from './searchBar'

var searchResult = observable({
    data: {Ch:[], En:[]},
})

const bookConvert = (book, type) => {
    const List = loadList.allList
    let index = 0
    
    _.forEach(loadList.allList, (item, idx) => {
        if(item.indexOf(book)>-1){
            index = idx
        }
    })
    
    switch(type){
        case 'ChShort':
            return List[index][3]
            break;
        case 'ChLong':
            return List[index][2]
            break;
        case 'EnShort':
            return List[index][0]
            break;
        case 'EnLong':
            return List[index][1]
            break;
    }    
}

const searchData = ()=>{
    const textData = loadText.dataAll
    const listData = loadList.allList
    let dicList = {}
    _.forEach(listData, (item, key) => {
        dicList[item[0]] = key
    })    
    console.log(mobx.toJS(searchBar));
    if(searchBar.book.length>0 && searchBar.chapter.length>0 && searchBar.sentence.length>0 ){
        const book = searchBar.book, 
              chapter = searchBar.chapter, 
              sentence = searchBar.sentence
        searchResult.data.Ch.push([
            bookConvert(book, 'ChLong'),
            chapter,
            sentence,
            textData.Ch[dicList[book]][chapter][sentence]
        ])
        searchResult.data.En.push([
            bookConvert(book, 'EnLong'),
            chapter,
            sentence,
            textData.En[dicList[book]][chapter][sentence]
        ])
    }
}

_.assign(searchResult, {
    load: action(function(){
        loaddata()
    }),
    search: action(function(){
        this.clearSearchResult()
        searchData()
    }),
    clearSearchResult: action(function(){
        this.data= {Ch:[], En:[]}
    }),
})

export default searchResult