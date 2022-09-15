//My notes on typescript syntax in no particular order


//Basic types 

const str: string = 'this is a string' 

const int: number = 5 

const bool: boolean = true || false 


/* The type declaration for a functon goes after the opening parenthesis for a function, and describes the type of the data 
that is returned by the function */

const func = (): string => {
    return 'test'
}

function getNumber(input: number): string {
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

