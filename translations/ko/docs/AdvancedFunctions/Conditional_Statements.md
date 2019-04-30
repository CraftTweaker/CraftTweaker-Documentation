# 조건문

만약 특정 상황에서만 동작할 수 있는 코드, 즉 분기를 넣고 싶다면 그럴 때 사용되는 것이 조건문입니다.

## If

if문은 조건문의 첫 파트입니다. 값이 true여야 if문 내의 코드가 수행되는 조건이 선언됩니다. 두 값이 같은지 비교하기 위해선 '==' 연산자를 사용하는 것을 조심해주세요! (=이 한 개인 '=' 연산자는 값을 선언할 때 쓰는 대입 연산자입니다!)

```Java
val test = 0;

if(test == 0) {    // true여야 수행, 즉 test가 0일 때 수행
     print("Test is zero!");
}
```

## Else

else문은 조건문의 끝에 붙일 수 있습니다. if문의 모든 조건이 false일 경우 수행될 코드가 옵니다.

```Java
var test = 0;

if (test == 0) { // true
    // test의 값이 true일 때 실행
    print("Test is zero!");
}
else if (test >= 0) { // false
    // test의 값이 *0이 아닌* 양수일 때 실행
     print("Test is positive!");
}
else {
    // 모든 조건이 false, 즉 test가 음수일 때 실행
    print("Test is negative!");
}

test = -1;
if (test == 0) { // false
    // test의 값이 true일 때 실행
    print("Test is zero!");
}
else if (test >= 0) { // false
    // test의 값이 *0이 아닌* 양수일 때 실행
     print("Test is positive!");
}
else { 
    // 모든 조건이 false, 즉 test가 음수일 때 실행
    print("Test is negative!");
}


```

## 짚고 가야 할 것

지원되는 산술 연산자는 덧셈(`+`), 뺄셈(`-`), 곱셈(`*`), 나눗셈(`/`), 나머지(`mod`), 문자열 간 결합(`~`)이 있습니다.

지원되는 논리 연산자는 AND(`&`), OR(`|`), XOR(`^`)가 있습니다. (비트 연산은 지원되지 않습니다.)

```Java
// 정수형(int) 상수 선언
val a = 0 as int;
if (a == 0) {
    print("NumVal");
}

// 숫자 연산
val b = 1;
val c = 5;
// 모두 true
if (b + c == 6) {
    print("Num1!");
}
if (b * c == 5) {
    print("Num2!");
}
if (b / c == 0.2) {
    print("Num3!");
}

// 문자열 간 결합 (Concatenation)
val d = "Hello";
val e = "World";
val f = d ~ " " ~ e; // f = "Hello World", 물결표(~)는 두 값을 하나의 문자열로 이어줍니다.
val g = f ~ a; // g = "Hello World0", 문자열로 변환할 수 있는 값들은 자동으로 변환되어 이어줍니다.

// OR, XOR, AND
//|(OR) means, as long as one of the criteria is met, it evaluates to true
if(d=="Hello" | e == "Hello"){print("OR1!");}       //true
if(d=="Hello" | e == "World"){print("OR2!");}       //true

//^(XOR) means, ONLY ONE criteria may be met, otherwise it evaluates to false
if(d=="Hello" ^ e == "Hello"){print("XOR1!");}      //true
if(d=="Hello" ^ e == "World"){print("XOR2!");}      //false

//&(AND) means, both criteria need to be met, otherwise it evaluates to false
if(d=="Hello" & e == "Hello"){print("AND1!");}      //false
if(d=="Hello" & e == "World"){print("AND2!");}      //true
```

## The ? Operator

Surely, always typing out an if/else structure can be annoying. Especially if you just want to do an either or condition. That's why the `?` operator was implemented. It follows the same logic as an if/else statement, it only is by far less code required. Syntax: `boolean ? if : else`

```Java
val switchy = false;

//prints switchy state
print("Switchy is " ~ switchy);

//if switchy is true, vInt = 1, otherwise vInt = 2
val vInt = switchy ? 1 : 2;
print(vInt);

//Prints "Hello" if switchy is stue, otherwise prints "Bye"
print(switchy ? "Hello" : "Bye");

//Prints "Bye" if switchy is true, otherwise prints "Hello"
switchy ? print("Bye") : print("Hello");

```

## Operators

You can use these operators. All the examples given evaluate to true.

| Name             | token   | Explanation                                                                          | Example      |
| ---------------- | ------- | ------------------------------------------------------------------------------------ | ------------ |
| Not              | `!`     | Inverts a boolean                                                                    | !false       |
| Not Equal        | `!=`    | Checks if the value before and after are not equal                                   | 1 != 2       |
| Equal            | `==`    | Checks if the value before and after are equal                                       | 1 == 1       |
| Greater than     | `>`  | Checks if the value before is greater than after                                     | 1 > 2        |
| Greater or Equal | `>=` | Checks if the value before is greater than or equal with after                       | 1 >= 1       |
| Lesser then      | `<`  | Checks if the value before is fewer than after                                       | 1 < 2        |
| Lesser or Equal  | `<=` | Checks if the value before is fewer than or equal with after                         | 1 <= 1       |
| AND              | `&` | Checks whether both, value before and after are true, false if one or both are false | true & true  |
| OR               | `|`     | Checks if the value before or after is true. True, is both are true                  | true | true  |
| XOR              | `^`     | Checks if either the value before or after is true, false if both or none is true    | true ^ false |

## The in/has Operator

The `in` and the `has` operator check if something is in something.  
First you need the list you want to check in, then the `in`/`has` then the value you want to check for. `in` and `has` are the same keyword for ZS, but in most cases people use `has` for checking if a collection contains an item and in for loops as this represents the English grammar.

### in/has loadedMods

You can check, if a mod is loaded by checking if it's in the loadedMods list

```Java
//While contains checks can use in
if(loadedMods in "mcp"){
    print("Minecraft Coder Pack loaded");
}

//Most people prefer using has
if(loadedMods has "mcp"){
    print("Minecraft Coder Pack loaded");
}
```

### in/has IIngredient

You can also check if an item matches a definition by comparing two IIngredients.  
With this one you need to be a bit careful as not to confuse the two entries:  
This is only true when the IIngredeint AFTER the `in` can also be found completely in the one BEFORE the `in`.  
In most cases you will use the `has` keyword instead as it's intention is more clear and it does exactly the same.

```Java
if(<ore:ingotIron> in <minecraft:iron_ingot>){
    print("Iron ingots are in the right oreDic");
}

if(<ore:ingotIron> has <minecraft:iron_ingot>){
    print("Iron ingots are in the right oreDic");
}
```

This is only then true, when ALL matching items from the IIngredient AFTER the `has` can also be found in the IIngredient BEFORE `has`: Say we have an IIngredient that contains all dusts (e.g. redstone and glowstone dust):

```java
val redstone = <minecraft:redstone>;
val glowstone = <minecraft:glowstone>
val allDusts = <ore:dustAll>;
allDusts.add(redstone, glowstone);

//True as redstone is a part of alldusts
if(allDusts has redstone) {

}

//False as allDusts consists of redstone and glowstone, and redstone only consists of redstone.
if(redstone has allDusts) {

}
```