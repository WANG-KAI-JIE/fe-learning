app.component('product-show',{
    template:`
        <p>商品名称：{{productName}}</p>
        <p>产地：{{origin}}</p>
        <p>生产日期：{{productDate}}</p>
        <p>规格：{{size}}</p>`,
    data(){
        return {
            productName:"袜子",
            origin: "江苏",
            productDate: "2023-03-17",
            size: "20cm*10cm",
            variants:[
                {id: 1,color: 'green',productName:"袜子",origin: "江苏",productDate: "2023-03-17",size: "20cm*10cm"},
                {id: 2,color: 'blue',productName:"袜子",origin: "江苏",productDate: "2023-03-17",size: "20cm*10cm"},
            ]
        };
    }
})