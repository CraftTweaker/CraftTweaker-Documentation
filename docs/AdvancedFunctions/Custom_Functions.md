# Custom Functions

Sometimes the functions supplied by CT and addons just won't do it.
Here's how to write your own functions!
You can even nest functions in functions

## Basic Syntax
Generally, you declare a function using:

```Java
function NAME ([arguments[as type]]) [as returnType]{
	[Statements]
	[return VALUE;]
}
```

The things in brackets are optional, depending on what you want to achieve.
Let's take a closer look at specific functions.


## Void functions

Void functions are functions that will not return any value.

```Java
//calls the function tens() without arguments
tens();

//calls the function realTens() with the String "Hello World!" as argument
realTens("Hello World!");


//crates function tens() with no required arguments
function tens(){
	//Calls function realTens() with "" as argument
	realTens("");
}


//creates function realTens() with one string required as argument
function realTens(a as string){
	//prints the argument 10 times
	for i in 1 to 11{
		print(a);
	}
}
```

## Return functions

You can also specify a value that should be returned by a function. 
It is recommended using the `as` keyword to define the return type.

```Java
//calls add function with 1 and 99 as parameters
val result = add(1,99);
print(result);

//you can place the add function inside the print function as well
print(add(2,64));

//defines function add() with a and b as parameters (both set to be Integers!) and sets the return type to Integer
function add(a as int,b as int) as int{
	//returns the sum of a and b
	return a+b;
}
```

## Recipe functions

CT's shaped and shapeless recipes natively support functions to alter the recipe's outputs
After declaring a recipe's output and inputs, you can add a function as third parameter, that will require 3 parameters: (output, inputs, craftingInfo)

To show this, we're gonna create a recipe that repairs your precious diamond Pickaxe using diamonds:

```Java
val diaPick = <minecraft:diamond_pickaxe>;

//we start normal, by writing the output
recipes.addShapeless(diaPick,

//followed by the input array. One change though - we mark the diamond pickaxe, so we can use it in the function later
[diaPick.anyDamage().marked("mark"),<minecraft:diamond>],

//now we start declaring the function. 
//It needs 3 parameters, one for the output, one for the inputs and one for crafting info. 
//We'll only need the input parameter, though.
function(out, ins, cInfo){
	
	//now we return the pickaxe with either 0 DMG or Current damage -10, whatever is higher. This is to prevent negative damage values.
	return ins.mark.withDamage(max(0,ins.mark.damage - 10));
});
```