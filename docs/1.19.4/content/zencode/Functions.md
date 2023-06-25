# Custom Functions

Functions are a way to simplify and clean up code. In ZenCode, a function is a piece of code, that executes some code.
That's the most bare-bones definition of it. An actual function is an abstract chunk of code that takes parameters and executes code based on them, with an optional return type. 

## Declaring a Custom Function 

Declaring a custom function is done through a syntax similar to this: 

```zenscript
<public> function functionName(params... as ParamTypes) as ReturnType {
 //Function body goes here.
 //If the function has a return type, a return statement will be necessary:
 return value;
}
```

Let's break this down, shall we?

`<public>` This is an optional access keyword. Adding the public keyword will make the function accessible through other scripts. 

`function` This is standard function declaration. This tells the ZenCode engine to treat whatever is coming as a function.

`functionName` The function needs a unique name, which is how it will be executed. 

`(params... as ParamTypes)` A function can have parameters. Parameters are declared by typing in the parameter name and casting it to the desired type. The parameter name is used in the function's body, while the parameter type is used by the ZenCode engine to ensure that, when calling the function, the desired and used types for the parameters match.

`as ReturnType` A function must have a return type. If it should return nothing, `void` should be use. Otherwise, you use whatever type you wish the function to return.

`{` This marks the beginning of the function's body. Code that interacts with the supplied parameters will be placed here. If a function has a return type that's not `void`, a return statement is necessary.

`}` This marks the ending of a function's body and declaration. No semicolons are necessary after this.

## Calling a function

Calling or executing a function is pretty easy. It requires you to use the function's name and it's parameters.

```zenscript

functionName(params);

```

## Example

Let's take a look at different kinds of functions. These do different things, from niche things to simplifying our code.
For simplicity's sake, they have been split into declaration and execution, but the order they are placed in a script does not matter.



```zenscript

function hide(item as crafttweaker.api.item.IItemStack) as void {
    craftingTable.remove(item);
    
    //This will only work in a Forge Environment
    mods.jei.JEI.hideIngredient(item);
}

public function printStartScript(scriptName as string) as void {
    println("=====================================================");
    println("          STARTING SCRIPT: "+scriptName+"                  ");
    println("=====================================================");
}

function addition(a as int, b as int) as int {
    //We are using this to return a value and use it!
    return a + b;
}


printStartScript("Functions");

var sum = addition(5, 3);
println("The sum of 5 and 3 is: "+ sum);

hide(<item:minecraft:pumpkin>);

```

## Why functions?

Function definitions can be used to define functions which do not exist within the context of a surrounding class. They are mostly useful to define utility functions or helper functions inside scripts.

Sometimes though, it's better to make a custom Object or Class through the use of a ZenClass.
