const almacen = "fanta";

const despensa = {
    'verduleria': 'tomates'
}

const otroAlmacen = {
    'despensa':'tomates',
    'baul': {
      'fondo': {
        'objeto': 'cd-rom',
        'otro-objeto': 'disquette',
        'otra-cosa': 'mando',
        'almacen': {
            'estante0': 'galletitas',
            'estanteria1': {
               'cajon0': 'fanta', 
              'cajon1': {
                'producto1': 'coca-cola',
                'producto2': 'mantecol',
                'producto3': 'sprite'
              }
            },
            'estanteria2': {
              'cajon1': 'vacio',
              'cajon2': {
                'producto1': 'pantalones',
                'producto2': 'camiseta' // <- ¡Está aquí!
              }
            }
          }
      }
    }
  }

const compareProduct = (store, product) => {
    if (typeof store === 'string') {
        if (store === product) {
            return true;
        } else {
            return false;
        }
    }
    if (typeof store === 'object') {
        for (const [key, value] of Object.entries(store)) {
            if (typeof value === 'string') {
                if (value === product) {
                    return true;
                }
            }
            if (typeof value === 'object') {
                for (const [key2, value2] of Object.entries(value)) {
                    if (typeof value2 === 'string') {
                        if (value2 === product) {
                            return true;
                        }
                    }
                    if (typeof value2 === 'object') {
                        for (const [key3, value3] of Object.entries(value2)) {
                            if (typeof value3 === 'string') {
                                if (value3 === product) {
                                    return true;
                                }
                            }
                            if (typeof value3 === 'object') {
                                for (const [key4, value4] of Object.entries(value3)) {
                                    if (typeof value4 === 'string') {
                                        if (value4 === product) {
                                            return true;
                                        }
                                    }
                                    if (typeof value4 === 'object') {
                                        for (const [key5, value5] of Object.entries(value4)) {
                                            if (typeof value5 === 'string') {
                                                if (value5 === product) {
                                                    return true;
                                                }
                                            }
                                            if (typeof value5 === 'object') {
                                                for (const [key6, value6] of Object.entries(value5)) {
                                                    if (value6 === product) {
                                                        return true;
                                                    }
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
        return false;
    };
}

const comparar = compareProduct(otroAlmacen, "camiseta");
console.log(comparar);

// true
