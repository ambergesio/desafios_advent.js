const carta = "bici coche (calón) )bici coche peluche";
const qwer = "(bici) casa play"

const isValid = (letter) => {
  let chars = letter.split('');
  let open = 0;
  let closed = 0;

  chars.map(ch => {
    if(ch === '(') {
      open +=1;
    } else if (ch === ')') {
      closed +=1;
    }
  })

  if ( open === closed
    && open > 0
    && closed > 0
    && !letter.match(/[\[\]\[\][{}]/g)
    && !letter.match(/[(]\W+[)]|[(][)]/)
    && !(letter.indexOf(')') < letter.indexOf('('))
    ) {
      return true
    } else {
      return false
    }
};

const test = isValid(qwer);
console.log(test)