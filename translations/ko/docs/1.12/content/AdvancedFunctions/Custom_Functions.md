# 사용자 정의 함수

때로는 CT와 에드온에 의해 제공되는 기능이 작동하지 않을 수도 있습니다. 여기 여러분만의 기능을 쓰는 방법이 있습니다! 함수에 함수를 내포할 수도 있습니다.

## 기본 구문
일반적으로 다음과 같이 함수를 정의합니다.

```zenscript
function NAME ([arguments[as type]]) [as returnType]{
    [Statements]
    [return VALUE;]
}
```

{} 안에 작성하는 구문들은 선택적인 부분이며 원하시는 기능을 구현하면 됩니다. 구체적인 기능들을 자세히 살펴보겠습니다.


## 정적 함수
Static functions are created before the script is run and can be accessed from anywhere in the script.  
You can even access functions declared outside the script using the [cross-script reference](/AdvancedFunctions/Cross-Script_Reference).


### 보이드 함수

보이드 함수는 값을 반환하지 않는 함수입니다.

```zenscript
// 인자없이 tens함수를 호출
tens();

// "Hello World!" 문자열을 인자로 넣어서 realTens함수를 호출
realTens("Hello World!");

// 인자가 없는 tens함수를 생성
function tens(){
    // "" 인자를 넣어서 realTens함수를 호출
    realTens("");
}

// 한개의 문자열 매개변수를 갖는 realTens함수를 생성
function realTens(a as string){
    // 넘겨받은 인자를 10번 출력
    for i in 1 to 11{
        print(a);
    }
}
```

### 함수의 반환

함수로 반환해야 하는 값을 지정할 수도 있습니다. 반환 타입는 `as` 키워드를 사용하는 것을 추천합니다.

```zenscript
// 1과 99를 인자로 넣어 add함수를 요청
val result = add(1,99);
print(result);

// add함수의 호출을 print함수 안에 넣을 수 있습니다. 
print(add(2,64));

// a와 b의 정수형 매개변수를 갖고 정수형값을 반환하는 add함수를 정의
function add(a as int,b as int) as int{
    // a와 b의 합계를 반환
    return a+b;
}
```

## Default arguments

You can also set some parameters default value. These parameters can be ignored and use default value when you call the function.

```zenscript
function name(a as int, b as int = 2, c as int = 3) as void {
    print(a + b + c);
}

name(1); // print 6 [1 + 2 (default) + 3 (default)] 
name(1, 3); // print 7 [1 + 3 + 3 (default)] 
name(1, 1, 4); // print 6 [1 + 1 + 4] 
```

* You can use bracket handlers and functions for default arguments. But variables are not allowed.
* Once a parameter has a default argument, the parameters after it also require a default argument.

## Functions as variables
You can also use functions like variables. In this case, they will be created as separate classes. Other than that, they work pretty much the same as static functions, you call them by their variable name.  
You can even use them as [global variables](/AdvancedFunctions/Global_Static_Variables/) this way.

If you need to cast the method (as you do for globals) you can use this:
```
global addition as function(int, int)int = function (a as int, b as int) as int {
    return a + b;
};

print(addition(1,2));
```