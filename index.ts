
//INICIO ADICIONA, LISTA E REMOVE USUÁRIOS
interface IUsers {
    name: string,
    email: string,
    age: number
}

class Users {
    users: IUsers[];

    constructor () {
        this.users = []
    }

    set add(user: IUsers) {
        this.users.push(user)
    }

    get list(): IUsers[] {
        return this.users
    }

    remove(email: string): string {
        const getUserByEmailIndex = this.users.findIndex(user => user.email === email);
        
        if ( getUserByEmailIndex !== -1 ) {
            this.users.splice(getUserByEmailIndex, 1);

            return 'Usuário removido'
        }

        return 'Usuário não encontrado'
    }
}

const users = new Users();

users.add = {
    name: 'André',
    email: 'binalocom@gmail.com',
    age: 12
}

console.log(users.list)
//FIM ADICIONA, LISTA E REMOVE USUÁRIOS


//INICIO SOMA E MULTIPLICA USANDO O REDUCE

const numbers = [1, 2, 3, 4, 5, 6, 7];

const sum = numbers.reduce((acc, number) => acc + number);
const multiple = numbers.reduce((acc, number) => acc * number);

console.log('sum', sum)
console.log('multiple', multiple)

//FIM SOMA E MULTIPLICA USANDO REDUCE


// INICIO PARAMETROS PRÉ DEFINIDOS

type directions = 'left' | 'right' | 'top' | 'bottom';

const direction = (direction: directions) => direction;

console.log(direction('top'))
console.log(direction('right'))


// generic funtion quando não sabemos qual tipo de dados vamos receber
// podemos receber number, string, boolen etc


function arrGeneric<T>(obj: T[]) {
    console.log(obj)
}

arrGeneric([1, 2, 3, 4, 5])
arrGeneric(['1', '2', '3'])
arrGeneric(['a', 'b', 'c'])
arrGeneric([true, false, true, false])

//Generic multiple objects

function mergeObjects<T, U>(obj1: T, obj2: U) {
   return {
    ...obj1,
    ...obj2
   }
}

console.log(mergeObjects({ name: 'André' }, { age: 20, email: 'binalocom@gmail.com' }))

function generic(obj: number[]): number[] {
    return obj
}

console.log(generic([1, 2, 3, 4,]))



//TIPANDO DESESTRUTURAÇÃO COM TS

function showProductDetails({ name, price }: { name: string, price: number }): string {
    return `O ${name} está custando R$${price.toFixed(2)}`;
}

const product = {
    name: 'Notebook',
    price: 2500
}

console.log(showProductDetails(product))


//USANDO FUNCAO COM REST ACEITANDO VÁRIOS TIPOS E TRATANDO-OS DENTRO DA FUNÇÃO DE ACORDO COM O SEU TIPO
type restType = string[] | number[];

const restOperatorsMultipleTypes = (...rest: restType) =>  {
    const checkType = rest.find(find => find !== undefined)

    if ( typeof checkType === 'number' ) {
        return rest.reduce<number>((acc, number) => acc * (number as number), 1)
    } else if ( typeof checkType === 'string' ) {
        return rest.join(' ')
    }
}

const arrString: string[] = ['Olá', 'andré']
const arrNumbers: number[] = [1, 2, 3, 4, 5, 6, 7]

console.log(restOperatorsMultipleTypes(...arrString))
console.log(restOperatorsMultipleTypes(...arrNumbers))

