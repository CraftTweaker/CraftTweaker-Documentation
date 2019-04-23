# Пользовательские функции

Иногда функций, предоставляемые CT и аддонами, просто не будет хватать. Вот как писать свои собственные функции! Вы можете даже вложить функции в функции

## Базовый синтаксис

В целом, вы определяете функцию статически с помощью:

```Java
function имя([arguments[as тип данных]]) [as возвращаемый тип]{
    [выражения]
    [return значение;]
}
```

То, что в скобках необязательно в зависимости от того, что вы хотите достичь. Давайте рассмотрим конкретные функции.

## Статические функции

Static functions are created before the script is run and can be accessed from anywhere in the script.  
You can even access functions declared outside the script using the [cross-script reference](Cross-Script_Reference).

### Функции без возвращаемого значения

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

### Функции с возвращаемым значением

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

## Функции как переменные

You can also use functions like variables. In this case, they will be created as separate classes. Other than that, they work pretty much the same as static functions, you call them by their variable name.  
You can even use them as [global variables](/AdvancedFunctions/Global_Static_Variables/) this way.

If you need to cast the method (as you do for globals) you can use this:

    global addition as function(int, int)int = function (a as int, b as int) as int {
        return a + b;
    };
    
    print(addition(1,2));