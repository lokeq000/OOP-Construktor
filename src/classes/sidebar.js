import {block} from '../utils'
import { TextBlock, TitleBlock } from './blocks';

export class Sidebar {
   constructor(selector, updateCallback){
       this.$el=document.querySelector(selector)
        this.update = updateCallback

    this.init()
    }
    
add(ev){
    ev.preventDefault();
  
    const type = ev.target.name
    const value = ev.target.value.value
    const styles = ev.target.styles.value

    let newBlock = type === "text"
    ? newBlock = new TextBlock(value,{styles})
    : newBlock = new TitleBlock(value,{styles})
    this.update(newBlock)
    ev.target.value.value =''
    ev.target.styles.value = ''
}
    init(){
        this.$el.insertAdjacentHTML('afterbegin',this.template)
        this.$el.addEventListener('submit', this.add.bind(this))
        
     
    }
   get template(){
       return [
        block('text'),
        block('title')
       ] .join('')
   }
}
