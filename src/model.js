import {TitleBlock, TextBlock, ColumnsBlock} from "./classes/blocks"


export const model = [
    new TitleBlock('Конструктор сайтов на JS',{
        tag: 'h2',

        styles: {
            background: `linear-gradient(to left,#e66465, #9198e5)`,
            color:`#fff`,
            "text-align": `center`,
            padding: `1.5rem`
        }
    }),
    new TextBlock('Здесь будет некоторый стилизованый текст',{
    
            styles:{
                "text-align":"center",
                "margin-top":"50px",
                "font-size":"30px"
            }
          
    }),
    new ColumnsBlock([
        'Первая колонка с текстом ','А тут вторая','Ещё третья'
    ],{
    
        styles:{
            background: `linear-gradient(to left,#d52cff, #00c92b)`,
            color:'#fff',
            display:"flex",
            "align-items":"center",
            height: "100px",
            "text-align":"center",
            "margin-top":"50px",
        }
      
}),
    

]
