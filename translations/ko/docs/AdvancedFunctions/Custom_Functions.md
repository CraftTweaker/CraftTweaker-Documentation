# 사용자 정의 함수

때로는 CT와 추가 기능에 의해 제공되는 기능이 작동하지 않을 수도 있습니다. 여기 여러분만의 기능을 쓰는 방법이 있습니다! 함수에 함수를 내포할 수도 있습니다.

## 기본 구문

일반적으로 다음을 사용하여 정적을 선언합니다.

```Java
function NAME ([arguments[as type]]) [as returnType]{
    [Statements]
    [return VALUE;]
}
```

괄호 안에 있는 것들은 여러분이 성공하고 싶은 것에 따라 선택적입니다. 구체적인 기능들을 자세히 살펴보겠습니다.

## 정적 기능

정적 기능은 스크립트를 실행하기 전에 생성되며 스크립트의 어느 곳에서나 액세스할 수 있습니다.  
[cross-script reference](Cross-Script_Reference)을 사용하여 스크립트 외부에 선언된 기능에 액세스할 수도 있습니다.

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