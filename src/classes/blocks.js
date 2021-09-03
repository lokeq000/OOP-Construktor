 import {row, col, css} from "../utils"

 class Block {
    constructor(type,value,options){
        this.type = type,
        this.value = value,
        this.options = options
    }

    toHTML(){
        throw new Error('Метод toHTML должен быть реализован')
    }
}

export class TitleBlock extends Block{
    constructor(value, options){
        super('title', value , options)
    }
    toHTML(){
        const tag = this.options.tag ?? 'h1'
        const styles = this.options.styles
        return row(col(`<${tag}>${this.value}</${tag}>`),css(styles) )
    }
}

export class TextBlock extends Block{
    constructor(value, options){
        super('text', value , options)
    }
    toHTML(){
        const styles = this.options.styles
        return row(col(`${this.value}`), css(styles))
    }
    
}

export class ColumnsBlock extends Block{
    constructor(value, options){
        super('columns', value , options)
    }
    toHTML(){
        const html = this.value.map(col)
        const styles = this.options.styles
        return row(`${html.join('')}`, css(styles))
    }
}