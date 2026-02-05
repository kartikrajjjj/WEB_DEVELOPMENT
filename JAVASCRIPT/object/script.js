let product1={
    name:'shirt',
    company: 'zara',
    price:2000,
    'delivery-time':7,
};
let product2=product1;
console.log(`PRODUCT 1:${product1.company}`);
product1.company='levis';
console.log(`PRODUCT 2:${product2.company}`); 
console.log(product1['delivery-time']+' days');


let packet={
    message:'good job',
    stats:'complete', 
};

let {message,stats}=packet;
console.log(message);
console.log(stats); 

function isIdenticalProduct(product1,product2){
    if(product1===product2){
        console.log('true') ;
    }
}

isIdenticalProduct(product1,product2);

 