function duplica_par(x){//x=[4,2]
    var nuevo_arreglo = [4,4];

    for (var index = 0; index < x.length; index++) {//index= index+1
        
        nuevo_arreglo.push(x[index]);

        if(index%2==0){//Modulo o resto de la division
            nuevo_arreglo.push(x[index]);
        }
    }

    return nuevo_arreglo;
}

var z = duplica_par([4, "Ulysses", 42, false]);
console.log(z);
var z = duplica_par([4, "gato", 42, "perro",33,"raton","queso"]);
console.log(z);