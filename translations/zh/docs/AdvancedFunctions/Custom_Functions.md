# 自定义函数

有时 Craft Tweaker 本身以及它的附属提供的函数根本不够用。 接下来我们将会讲解如何构建自定义函数！ 您甚至可以在函数中嵌套函数

## 基本语法

一般来说，你可以这样声明一个静态函数：

```Java
function NAME ([arguments[as type]]) [as returnType]{
    [Statements]
    [return VALUE;]
}
```

The things in brackets are optional, depending on what you want to achieve. Let's take a closer look at specific functions.

## Static Functions

Static functions are created before the script is run and can be accessed from anywhere in the script.  
You can even access functions declared outside the script using the [cross-script reference](Cross-Script_Reference).

### Void functions

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

### Return functions

You can also specify a value that should be returned by a function. It is recommended using the `as` keyword to define the return type.

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

## Functions as variables

You can also use functions like variables. In this case, they will be created as separate classes. Other than that, they work pretty much the same as static functions, you call them by their variable name.  
You can even use them as [global variables](/AdvancedFunctions/Global_Static_Variables/) this way.

If you need to cast the method (as you do for globals) you can use this:

    global addition as function(int, int)int = function (a as int, b as int) as int {
        return a + b;
    };
    
    print(addition(1,2));