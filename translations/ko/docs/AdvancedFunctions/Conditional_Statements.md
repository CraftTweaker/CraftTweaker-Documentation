# 조건문

만약 특정 상황에서만 동작할 수 있는 코드, 즉 분기를 넣고 싶을때 사용되는 것이 조건문입니다.

## If

if문은 조건문의 첫 파트입니다. 선언된 조건이 true일때 if문 내의 코드가 수행되도록 합니다. 두 값이 같은지 비교하기 위해선 '==' 연산자를 사용하는 것에 유의하세요. (=이 한 개인 '=' 연산자는 값을 선언할 때 쓰는 대입 연산자입니다!)

```Java
val test = 0;

if(test == 0) {    // true여야 수행, 즉 test가 0일 때 수행
     print("Test is zero!");
}
```

## Else

Else문은 조건문의 끝에 붙일 수 있습니다. if문의 조건이 false일 경우 수행될 코드가 옵니다.

```Java
var test = 0;

if (test == 0) { // true
    // test의 값이 0일때 실행
    print("Test is zero!");
} else {
    // test의 값이 0이 아닐때 실행
    print("Test is NOT zero!");
}

test = -1;
if (test == 0) { // false
    // test의 값이 0일때 실행
    print("Now, test is zero!");
} else { 
    // test의 값이 0이 아닐때 실행
    print("Now, test is NOT zero!");
}

```

## 짚고 가야 할 것

지원되는 산술 연산자는 덧셈(`+`), 뺄셈(`-`), 곱셈(`*`), 나눗셈(`/`), 나머지(`mod`), 문자열 간 결합(`~`)이 있습니다.

지원되는 논리 연산자는 AND(`&`), OR(`|`), XOR(`^`)가 있습니다. (비트 연산은 지원되지 않습니다.)

```Java
// 정수형(int) 상수 선언
val a = 0 as int;
if (a == 0) {
    print("NumVal");}

// 숫자 연산
val b = 1;
val c = 5;
// 모두 true
if (b + c == 6) { print("Num1!");}
if (b * c == 5) { print("Num2!");}
if (b / c == 0.2) { print("Num3!");}

// 문자열 간 결합 (Concatenation)
val d = "Hello";
val e = "World";
val f = d ~ e; // f = "HelloWorld", 물결표(~) 는 두 값을 하나의 문자열로 이어줍니다.

// OR, XOR, AND
// |(OR) 는 둘 중 하나라도 조건을 만족하면 true입니다.
if (d == "Hello" | e == "Hello") { print("OR1!");}       //true
if (d == "Hello" | e == "World") { print("OR2!");}       //true

// ^(XOR) 는 두 조건의 상태가 서로 달라야만 true입니다.
if (d == "Hello" ^ e == "Hello") { print("XOR1!");}      //true
if (d == "Hello" ^ e == "World") { print("XOR2!");}      //false

// &(AND) 는 두 조건을 모두 만족해야 true입니다.
if (d == "Hello" & e == "Hello") { print("AND1!");}      //false
if (d == "Hello" & e == "World") { print("AND2!");}      //true
```

## 삼항 연산자

매번 if문을 사용하기 번거로운 분들에게 권해드리는 연산자입니다. 특히 조건이나 경우가 단순할 수록 이 `?` 연산자가 왜 구현됐는지 알 수 있습니다. 본질적으로 if/else문과 사용 방식이 비슷하지만, 더 짧게 표현할 수 있습니다. 문법은 &lt;condition&gt; ? if : else</code>와 같은 형태로 사용하실 수 있습니다.

```Java
val switchy = false;

// switchy의 상태를 출력합니다.
print("Switchy is " ~ switchy);

// switchy가 true일 경우 1, 그렇지 않으면 2를 vint에 저장합니다.
val vInt = switchy ? 1 : 2;
print(vInt);   // 2

// switchy가 true면 Hello를, 그렇지 않으면 Bye를 출력합니다.
print(switchy ? "Hello" : "Bye");

// switchy가 true면 Bye를, 그렇지 않으면 Hello를 출력합니다.
switchy ? print("Bye") : print("Hello");

```

## 연산자

아래와 같은 연산자를 사용하실 수 있습니다. 모든 예시는 true의 값을 가집니다.

| 이름               | 토큰      | 설명                                                            | 예시           |
| ---------------- | ------- | ------------------------------------------------------------- | ------------ |
| Not              | `!`     | boolean 타입의 논리값을 반대로 바꿉니다.                                    | !false       |
| Not Equal        | `!=`    | 두 값이 다른지 확인합니다.                                               | 1 != 2       |
| Equal            | `==`    | 두 값이 같은지 확인합니다.                                               | 1 == 1       |
| Greater than     | `>`  | 왼쪽이 오른쪽보다 큰지 확인합니다.                                           | 1 > 2        |
| Greater or Equal | `>=` | 왼쪽이 오른쪽보다 크거나 같은지 확인합니다.                                      | 1 >= 1       |
| Lesser then      | `<`  | 왼쪽이 오른쪽보다 작은지 확인합니다.                                          | 1 < 2        |
| Lesser or Equal  | `<=` | 왼쪽이 오른쪽보다 작거나 같은지 확인합니다.                                      | 1 <= 1       |
| AND              | `&` | 두 논리값이 전부 true일 경우 true를 반환합니다.                               | true & true  |
| OR               | `|`     | 두 논리값 중 하나라도 true일 경우 true를 반환합니다. 물론 둘 다 true여도 true를 반환합니다. | true | true  |
| XOR              | `^`     | 두 논리값이 서로 다를 경우 true를 반환합니다.                                  | true ^ false |

## in/has 연산자

`in` 연산자와 `has` 연산자는 배열이나 리스트같은 컬렉션 자료에 특정 원소가 있는지 확인합니다. 특정 원소가 들어있는지 확인할 컬렉션을 먼저 쓰고, 그 다음 `in` 또는 `has` 연산자를 쓴 다음 확인할 원소를 작성합니다. `in`과 `has`은 ZenScript에서 동일한 키워드지만, 대부분 영문법에 따라 if문의 조건에서 사용할 때는 `has`를 선호하고, for 반복문 안에 사용할 때는 `in`을 선호합니다. 

### loadedMods 리스트

`in` 연산자와 `has` 연산자를 통해 loadedMods 리스트에서 어떤 모드가 로드되었는지 확인할 수 있습니다.

```Java
// in도 사용할 수 있습니다.
if(loadedMods in "mcp"){
    print("Minecraft Coder Pack loaded");
}

// 하지만 has가 사용하기에 더 자연스럽습니다.
if(loadedMods has "mcp"){
    print("Minecraft Coder Pack loaded");
}
```

### IIngredient에서의 in/has 사용

in/has 연산자로 아이템이 특정 IIngredients(보통 Ore Dictionary)의 포함되는지 확인할 수도 있습니다.   
이때 혼동하지 말아야 할 것은 `in` 연산자는 '원소 in 컬렉션'이 언뜻 맞아 보이지만 반드시 컬렉션이 연산자의 앞에 위치해야 합니다. 즉 '컬렉션 in 원소'가 적합한 표현입니다.   
대신에 `has` 연산자를 사용하는 것을 권장합니다. '컬렉션 has 원소'와 같은 형태로 사용하면 훨씬 더 자연스러운 코드를 작성하실 수 있습니다.

```Java
if(<ore:ingotIron> in <minecraft:iron_ingot>){
    print("Iron ingots are in the right oreDic");
}

if(<ore:ingotIron> has <minecraft:iron_ingot>){
    print("Iron ingots are in the right oreDic");
}
```

단일 원소가 아닌 IIngredients도 컬렉션에 포함되는지 확인할 수 있습니다. 이 경우엔 오른쪽에 올 IIngredients의 모든 원소가 왼쪽의 컬렉션에 포함된다면 true를 반환합니다. 물론 이 경우에도 컬렉션은 왼쪽, 들어있는지 확인할 원소는 오른쪽에 위치해야 합니다.   
아래의 예제에서 `allDusts`가 레드스톤이나 발광석 등의 가루 아이템을 모두 포함한다고 가정해봅시다.

```java
val redstone = <minecraft:redstone>;
val glowstone = <minecraft:glowstone>
val allDusts = <ore:dustAll>;
allDusts.add(redstone, glowstone);

// allDusts가 레드스톤을 포함하고 있다면 true를 반환합니다.
if(allDusts has redstone) {

}

// allDusts의 모든 원소가 레드스톤으로 구성되어 있으면 true를 반환하지만, 이 경우에선 발광석이 있으므로 false를 반환합니다.
if(redstone has allDusts) {

}
```