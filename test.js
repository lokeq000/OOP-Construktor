const  model = [
    {type:'title', value:'Hello World from js'},
    {type:'text', value:'here we go with some text'},
    {type:'columns', value:[
        '12','11111','231241'
    ]}
]
model.forEach(item => {
    if (item.type === 'columns'){
        console.log('columns')
    } else if (item.type === 'title'){
        console.log('title')
    }  else if (item.type === 'text'){
        console.log('text')
    }
})