function calculateDiscount(age,gender,price){
    var discount=0;
    if(age<=5){
        discount= 100;
    }
    if(age>5 && age<=8){
        discount= 50;
    }
    if(gender==='female'){
        discount=Math.max(discount,50);
    }
    if(age>=65){
        discount =Math.max(discount,30);
    }
    console.log(discount+'%');
    var charge= price-(discount/100)*price;
    console.log(`YOU HAVE TO PAY:${charge} `);
}
calculateDiscount(21,'female',1000);
calculateDiscount(21,'male',1000);
calculateDiscount(65,'male',1000);
calculateDiscount(2,'male',1000);
calculateDiscount(7,'female',1000);