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
