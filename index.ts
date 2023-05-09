//My notes on typescript syntax in no particular order


// All Primitive Types  

const str: string = 'a string' 

const num: number = 5 

const bool: boolean = true

const sym: symbol = Symbol('my symbol') 

const bigNumber: bigint = 9n 

const nullValue: null = null 

const undefinedValue: undefined = undefined 

const anyValue: any = 'a string' + 5  

const unknownValue: unknown = 'x' 

// void describes a function that does not return anything
const voidFunc = (a: number, b: number): void => { 
    console.log(a + b)
} 

// never describes a function that does not possess a reachable end point
const neverFunc = (): never => {
    while ( true ) { 
    console.log('This is an infinite loop.')
    }
}


//More complex types 

const stringArray: string[] = ['test0', 'test1']  

const object: object = {} 

const objectArray: object[] = [{test1: 'test1'}, {test2: 'test2'}]  


//Functions 

/* The type declaration for a functon goes after the opening parenthesis for a function, and describes the type of the data 
that is returned by the function */

const func = (): string => {  
    return 'test'  
}

function getString(input: number): string {
    return input.toString() 
}


//Interfaces allow for complex custom data types that are structured like objects

interface Person { 

    name: string, 
    age: number, 
    occupation: string 

}

/* Objects can be declared that fit the interface, and the type is included just after the variable name. 
(just like the basic data types) */

const input: Person = {
    name: 'Joe',
    age: 27,
    occupation: 'Software Engineer' 
}

/* Once an interface has been declared, it can be used partially by using the 'Partial' utility Type. 
Let's say we want an object that only contains a person's name and age, we don't need to know the career. 
We can use the Partial<Type> syntax to tell typescript that our object 
will match the 'Person' type but won't contain every single field. */

const nameAndAge: Partial<Person> = {

    name: 'Donna',
    age: 56

}

//Types 

/* Types can also be used to accomplish the same thing that interfaces do. */

type Meal = {

    entree: string,
    side: string,
    price: number

}

/* Types differ from interfaces in that they can be used to describe more than just object-shaped data. An example of this is 
Unions */


//Unions 

/* Unions are a way to declare types with a little more particularity. Unions declare types but go even further, presenting 
concrete options for what the values that fill the type are allowed to be. Typescript will throw an error if a variable with 
'FoodTemps' type is assigned a string that is not one of the three strings below. 
*/

type FoodTemps = 'hot' | 'cold' | 'lukewarm' 

type DoILookOk = true | 'Oh my, look at the time.' | false  

//Generics 
/* Generics are type variables that can be used when dealing with situations where the data type is unknown */ 


interface Team<x> {

    city: string;
    name: string;
    id: x; 

}

//Notice that the generic allows us to determine what type some values will be after we define the interface.
//The two Team objects below can each have an Id with a different type

const patriots: Team<string> = {
 
    city: 'New England',
    name: 'Patriots',
    id: '7'

}

const chargers: Team<number> = {
 
    city: 'Los Angeles',
    name: 'Chargers',
    id: 5

}

const packers: Partial<Team<string>> = { 
    
    name: 'Packers', 
    id: '10' 

}

// For functions, the type variable is assigned right after the function name to signify that the argument/s of the function will
// have an unknown type. The type variable is assigned to the argument, and optionally assigned
// as the return value of the function. 

function test<T>(x: T): T {  
    return x 
} 


//If we want our function to return something other than the generic type, we can just leave off the explicit return type like so

function test1<T>(x: T) {  
    return x + 'added string' 
} 






