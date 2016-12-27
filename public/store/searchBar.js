import {observable} from 'mobx' 
import {action} from 'mobx' 
import mobx from 'mobx' 
import _ from 'lodash' 

import loadList from './loadList'

var searchBar = observable({
    value: '',
    book:'',
    chapter:'',
    sentence:''
})

const translate = (str) => {
    searchBar.setToDefault()
    let book = '',
        chapter = '',
        sentence = ''

    const listArray = loadList.allList

//---- 如果有 "數字:數字"，進行短章節處理 ------//    
    const shortAdjuge = /\d:\d/,
          numAdjuge = /\d/

    if(shortAdjuge.exec(str)){
        const letterArray = _.split(str, ':')
        if(letterArray.length==2){
            const preLetter = letterArray[0].replace(' ','')
            for(let i=0; i<preLetter.length; i++){
                if(numAdjuge.exec(str[i])){
                    chapter += preLetter[i]
                }else{
                    book += preLetter[i]
                }
            }
            _.forEach(listArray, (eachbook, idx) => { //-- 把 book 變成英文簡寫 (因為是檔名) ----//
                _.forEach(eachbook, (item) => {
                    if(book==item){
                        book=listArray[idx][0]
                    }
                })                
            })
            sentence=letterArray[1].replace(' ','')
            searchBar.book = book
            searchBar.chapter = chapter
            searchBar.sentence = sentence
        }
    }
}


_.assign(searchBar, {
    setValue: action(function(str){
        this.value = str
        translate(str)
    }),
    setToDefault:action(function(){
        this.book = ''
        this.chapter = ''
        this.sentence = ''
    })
})

export default searchBar