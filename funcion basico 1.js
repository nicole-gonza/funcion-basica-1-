// ejercicio 1 
function a(){
    return 35;        //35
}
console.log(a())     // 35

//ejercicio 2 
function a(){
    return 4;          // 4
}
console.log(a()+a());  //4+4 =8

//ejercicio 3 
function a(b){
    return b;
}
console.log(a(2)+a(4));     // 6

//ejercicio 4 
function a(b){
        console.log(b);      // 3
        return b*3;          // 9
    }
    console.log(a(3));       //3

// ejercicio 5 
function a(b){
    return b*4;             //10x4=40
    console.log(b);          no puede haber console log 
 }
 console.log(a(10));        //40

 //ejercicio 6
 function a(b){
    if(b<10) {              //15<10
        return 2;
    }
    else     {
        return 4;           // 4
    }
    console.log(b);         //4
}
console.log(a(15));         //4

//ejercicio 7 
function a(b,c){            // 10,3     //3,10
    return b*c;             // 10,3     //3*10
}
console.log(10,3);          // 10,3 
console.log( a(3,10) );                 //30

//ejercicio 8
function a(b){
    for(var i=0; i<10; i++){
        console.log(i);         //3         //4
    }
    return i;                   //3         //4
}
console.log(3);     //3
console.log(4);     //4

//ejercicio 9
function a(){
    for(var i=0; i<10; i++){
        i = i +2;
        console.log(i);             //2,5,8,11
    }
}
a();

//ejercicio 10
function a(b,c){
    for(var i=b; i<c; i++) {
       console.log(i);            //0,1,2,3,4,5,6,7,8,9
   }
   return b*c;                    // 0 
}
a(0,10);
console.log(a(0,10));             //0

//ejercicio 11
function a(){
    for(var i=0; i<10; i++){
       for(var j=0; j<10; j++){
           console.log(j);      //0,1,2,3,4,5,6,7,8,9
       }
       console.log(i);         //0,1,2,3,4,5,6,7,8,9
    }
}
// falta a();

//ejercicio 12
function a(){
    for(var i=0; i<10; i++){
        for(var j=0; j<10; j++){
            console.log(i,j);           // indefinida 
        }
        console.log(j,i);               // indefinida 
    }
}

//ejercicio 13
var z = 10;
function a(){           //10
    var z = 15;
    console.log(z);     //15
}
console.log(z);         //10

//ejercicio 14 
var z = 10;
function a(){           //10
    var z = 15;
    console.log(z);      //15
}
a();                    //15
console.log(z);         //10

//ejercicio 15
var z = 10;
function a(){
    var z = 15;
    console.log(z);    //15
    return z;           //15
}
z = a();                //15
console.log(z);        //15





 

    


