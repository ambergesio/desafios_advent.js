const groupBy = (collection, it) => {
    return collection.reduce( (key, value) => {
        let result = typeof it === 'function' ? it(value) : value[it];
        console.log(key)
        return { ...key, [result]: [ ...(key[result] || []), value]
        };
    }, {})
}

const average = groupBy([6.1, 4.2, 6.3], Math.floor); 
console.log(average) // { 6: [6.1, 6.3], 4: [4.2] }
const stringLenght = groupBy(['one', 'two', 'three'], 'length'); 
console.log(stringLenght) // { 3: ['one', 'two'], 5: ['three'] }
const age = groupBy([{age: 23}, {age: 24}], 'age'); 
console.log(age) // { 23: [{age: 23}], 24: [{age: 24}] }

const year = groupBy(
  [1397639141184, 1363223700000],
  timestamp => new Date(timestamp).getFullYear()
); 
console.log(year);
// { 2013: [1363223700000], 2014: [1397639141184] }

const rating = groupBy([
  { title: 'JavaScript: The Good Parts', rating: 8 },
  { title: 'Aprendiendo Git', rating: 10 },
  { title: 'Clean Code', rating: 9 },
], 'rating'); 
console.log(rating)
// { 8: [{ title: 'JavaScript: The Good Parts', rating: 8 }],
//   9: [{ title: 'Clean Code', rating: 9 }],
//   10: [{ title: 'Aprendiendo Git', rating: 10 }] }