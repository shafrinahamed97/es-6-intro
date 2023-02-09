const fish = {
    name: 'King Hilsa',
    address: 'Chandpur',
    color: 'Silver',
    phone: '017176588899',
    price: 4000
}
// const phone = fish.phone;
// const color = fish.color;
// const price = fish.price;
// console.log(phone, color, price);

const { phone } = fish;
const { age, name } = { name: 'Almas', age: 56, professional: 'make artist' }
console.log(age, name);

const { address } = fish;
console.log(address);

// array destructuring
const [first, other] = [44, 99, 04];
console.log(first, other);


const nayoks = ['shakib', 'bappi', 'raj']
const [king, lost, nutun] = nayoks;
console.log(nutun);

function getNames() {
    return ['alim', 'Halim'];
}
const [baba, chacha] = getNames();