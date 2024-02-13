"use strict";
class Users {
    constructor() {
        this.users = [];
    }
    set add(user) {
        this.users.push(user);
    }
    get list() {
        return this.users;
    }
    remove(email) {
        const getUserByEmailIndex = this.users.findIndex(user => user.email === email);
        if (getUserByEmailIndex !== -1) {
            this.users.splice(getUserByEmailIndex, 1);
            return 'Usuário removido';
        }
        return 'Usuário não encontrado';
    }
}
const users = new Users();
users.add = {
    name: 'André',
    email: 'binalocom@gmail.com',
    age: 12
};
console.log(users.list);
//FIM ADICIONA, LISTA E REMOVE USUÁRIOS
//INICIO SOMA E MULTIPLICA USANDO O REDUCE
const numbers = [1, 2, 3, 4, 5, 6, 7];
const sum = numbers.reduce((acc, number) => acc + number);
const multiple = numbers.reduce((acc, number) => acc * number);
console.log('sum', sum);
console.log('multiple', multiple);
const direction = (direction) => direction;
console.log(direction('top'));
console.log(direction('right'));
// generic funtion quando não sabemos qual tipo de dados vamos receber
// podemos receber number, string, boolen etc
function arrGeneric(obj) {
    console.log(obj);
}
arrGeneric([1, 2, 3, 4, 5]);
arrGeneric(['1', '2', '3']);
arrGeneric(['a', 'b', 'c']);
arrGeneric([true, false, true, false]);
//Generic multiple objects
function mergeObjects(obj1, obj2) {
    return {
        ...obj1,
        ...obj2
    };
}
console.log(mergeObjects({ name: 'André' }, { age: 20, email: 'binalocom@gmail.com' }));
function generic(obj) {
    return obj;
}
console.log(generic([1, 2, 3, 4,]));
//TIPANDO DESESTRUTURAÇÃO COM TS
function showProductDetails({ name, price }) {
    return `O ${name} está custando R$${price.toFixed(2)}`;
}
const product = {
    name: 'Notebook',
    price: 2500
};
console.log(showProductDetails(product));
const restOperatorsMultipleTypes = (...rest) => {
    const checkType = rest.find(find => find !== undefined);
    if (typeof checkType === 'number') {
        return rest.reduce((acc, number) => acc * number, 1);
    }
    else if (typeof checkType === 'string') {
        return rest.join(' ');
    }
};
const arrString = ['Olá', 'andré'];
const arrNumbers = [1, 2, 3, 4, 5, 6, 7];
console.log(restOperatorsMultipleTypes(...arrString));
console.log(restOperatorsMultipleTypes(...arrNumbers));
