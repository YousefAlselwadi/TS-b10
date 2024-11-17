// Generic

interface User {
    id: number;
    name: string;
}

// Function only clones objects that are type of User
function cloneObject(obj: User): User {
    return Object.assign({}, obj);
}

console.log(cloneObject({ id: 1, name: 'Joe' })); // Works


// How do i make my function to clone different types of objects?
// Solution: Generics

function clone<T>(obj: T): T {
    return Object.assign({}, obj);
}
console.log(clone({ id: 1, name: 'Joe' })); // Works
console.log(clone({ id: 1, name: 'Joe', age: 40 })); // Works
console.log(clone({ price: 100, qty: 'Joe' })); // Works


// Example

function findFirst<T>(items: T[]): T {
    return items[0];
}

console.log(findFirst(['a', 'b'])); // 'a'


// Generic Constraints
function getLen<T extends { length: number }>(item: T): number {
    return item.length;
}

console.log(getLen([1, 2])) // 2
console.log(getLen(["Hi"])) // 1
// console.log(getLen(123)) // error
console.log(getLen("123")) // 3


// Multiple Generic
function combineObjects<T, U>(item1: T, item2: U): T & U {
    return { ...item1, ...item2 };
}

console.log(combineObjects({ id: 1 }, { name: 'Jane' })) // {id: 1, name: 'Jane'}
console.log(combineObjects({ id: 1 }, { id: 2, name: 'Jane' })) // {id: 1, name: 'Jane'}
console.log(combineObjects({ id: 1 }, [1]))
console.log(combineObjects({ id: 1 }, 2))   