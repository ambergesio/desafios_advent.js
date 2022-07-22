const dibujarArbol = (height) => {
    var arbol = '';
    var tronco = '';

    for(var i = 0; i < height; i++) {
        for(var j=1; j<height-i;j++) {
            if (i===0){tronco +='_';}
            arbol += '-';
        }
        for(var k=0; k<=i; k++) {
            if (i===0){tronco +='#';}
            if( k===0 ) {
                
                arbol +='*';
            } else {
                arbol += '**'; 
            }
        }
        for(var j=1; j<height-i;j++) {
            if (i===0){tronco +='_';}
            arbol += '-'; 
        }
        arbol +='\n';
    }
    tronco +=  '\n' + tronco;

    return arbol + tronco;
};

const render = dibujarArbol(20);

console.log(render);
