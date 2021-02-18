# 조건문

만약 특정 상황에서만 동작할 수 있는 코드, 즉 분기를 넣고 싶을때 사용되는 것이 조건문입니다.

## If

if문은 조건문의 첫 파트입니다. 선언된 조건이 true일때 if문 내의 코드가 수행되도록 합니다. **Be careful, you need TWO EQUALS when comparing values! (That's because one equal is for declaring values!)**

```zenscript
val test = 0;

if (test == 0) { //true
    print("Test is zero!");
}
```

## Else

Else문은 조건문의 끝에 붙일 수 있습니다. if문의 조건이 false일 경우 수행될 코드가 옵니다.

```zenscript
var test = 0;

if (test == 0) { //true
    //will be executed when test is equal to 0
    print("Test is zero!");
} else {
    //will be executed when test is not equal to 0
    print("Test is NOT zero!");
}

test = 1;
if (test == 0) { //false
    //will be executed when test is equal to 0
    print("Now, test is zero!");
} else {
    //will be executed when test is not equal to 0
    print("Now, test is NOT zero!");
}

```

## 짚고 가야 할 것

지원되는 산술 연산자는 덧셈(`+`), 뺄셈(`-`), 곱셈(`*`), 나눗셈(`/`), 나머지(`mod`), 문자열 간 결합(`~`)이 있습니다.

Supported Operands are `Logical OR(||)`, `Logical AND(&&)`, `Bitwise OR(|)`, `Bitwise AND(&)`, and `Bitwise XOR(^)`

```zenscript
//You can check for:


//Number values
val a = 0 as int;
if (a == 0) { print("NumVal"); }

//Calculated number values
val b = 1;
val c = 5;
//All evaluate to true
if (b+c == 6) { print("Num1!"); }
if (b*c == 5) { print("Num2!"); }
if (b/c == 0.2) { print("Num3!"); }

//OR, XOR, AND
val d = "Hello";
val e = "World";
val f = d~e; //f = "HelloWorld", the Tilde just concatenates one thing to another

//||(OR) means, as long as one of the criteria is met, it evaluates to true
if (d == "Hello" || e == "Hello") { print("OR1!"); }        //true
if (d == "Hello" || e == "World") { print("OR2!"); }        //true

//^(XOR) means, ONLY ONE criteria may be met, otherwise it evaluates to false
if (d == "Hello" ^ e == "Hello") { print("XOR1!"); }        //true
if (d == "Hello" ^ e == "World") { print("XOR2!"); }        //false

//&&(AND) means, both criteria need to be met, otherwise it evaluates to false
if (d == "Hello" && e == "Hello") { print("AND1!"); }       //false
if (d == "Hello" && e == "World") { print("AND2!"); }       //true
```

## 삼항 연산자

매번 if문을 사용하기 번거로운 분들에게 권해드리는 연산자입니다. 특히 조건이나 경우가 단순할 수록 이 `?` 연산자가 왜 구현됐는지 알 수 있습니다. 본질적으로 if/else문과 사용 방식이 비슷하지만, 더 짧게 표현할 수 있습니다. 문법은 &lt;condition&gt; ? if : else</code>와 같은 형태로 사용하실 수 있습니다.

```zenscript
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

| 이름               | 토큰           | 설명                                                                                                                                                                           | 예시                |
| ---------------- | ------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------- |
| Not              | `!`          | boolean 타입의 논리값을 반대로 바꿉니다.                                                                                                                                                   | !false            |
| Not Equal        | `!=`         | 두 값이 다른지 확인합니다.                                                                                                                                                              | 1 != 2            |
| Equal            | `==`         | 두 값이 같은지 확인합니다.                                                                                                                                                              | 1 == 1            |
| Greater than     | `>`       | 왼쪽이 오른쪽보다 큰지 확인합니다.                                                                                                                                                          | 1 > 2             |
| Greater or Equal | `>=`      | 왼쪽이 오른쪽보다 크거나 같은지 확인합니다.                                                                                                                                                     | 1 >= 1            |
| Lesser than      | `<`       | 왼쪽이 오른쪽보다 작은지 확인합니다.                                                                                                                                                         | 1 < 2             |
| Lesser or Equal  | `<=`      | 왼쪽이 오른쪽보다 작거나 같은지 확인합니다.                                                                                                                                                     | 1 <= 1            |
| Logical AND      | `&&` | Checks if both before and after values are true, false if one or both are false                                                                                              | true && true      |
| Logical OR       | `\|\|`     | Checks if either the value before or after are true, false if neither are true                                                                                               | false \|\| true |
| Bitwise XOR      | `^`          | Checks if exactly one of the before or after values is true, false if both or none are true                                                                                  | true ^ false      |
| Bitwise AND      | `&`      | Performs a bitwise AND operation on the before and after values. See [this](https://stackoverflow.com/questions/4014535/differences-in-boolean-operators-vs-and-vs) for more | true && true      |
| Bitwise OR       | `\|`        | Performs a bitwise OR operation on the before and after values. See [this](https://stackoverflow.com/questions/4014535/differences-in-boolean-operators-vs-and-vs) for more  | false \|\| true |

### Difference between `|` and `||` (and `&` and `&&`)

The main difference between the single and the double, with semantics aside, is that the double performs a check after each condition and exits early - this is called short-circuiting. However, the single goes through the entire chain of conditions, even if the first one would have cancelled the entire condition. This not only saves resources, but also allows for easier scripting such as **null checks** and chained conditions.

```zenscript
var a = 5;
var item = ... as IItemStack;

// Even though a is 5, it still goes through all of the conditions listed
if (a == 5 | a == 3 | a == 10 | a == -1) {
    ...
}

// Even though a is 5 and the condition is impossible (a variable can't be both 3 and 5), it still goes through all of the conditions listed
if (a == 3 & a < 2 & a > 8 & a == 5) {
    ... 
}

// Checks if item is not null before accessing variables from item
if (!isNull(item) && item.amount == 1) {
    ...
}

// Checks if item is not null while accessing variables from a potentially null item, throwing an error if the item is null
if (!isNull(item) & item.amount == 1) {
    ...
}
```

## in/has 연산자

The `in` and the `has` operator check if something is in something.  
First you need the list you want to check in, then the `in`/`has` then the value you want to check for. `in` and `has` are the same keyword for ZS, but in most cases people use `has` for checking if a collection contains an item and in for loops as this represents the English grammar.

### in/has loadedMods

You can check, if a mod is loaded by checking if it's in the loadedMods list

```zenscript
//While contains checks can use in
if (loadedMods in "mcp") {
    print("Minecraft Coder Pack loaded");
}

//Most people prefer using has
if (loadedMods has "mcp") {
    print("Minecraft Coder Pack loaded");
}
```

### in/has IIngredient

You can also check if an item matches a definition by comparing two IIngredients.  
With this one you need to be a bit careful as not to confuse the two entries:  
This is only true when the IIngredient AFTER the `in` can also be found completely in the one BEFORE the `in`.  
In most cases you will use the `has` keyword instead as it's intention is more clear and it does exactly the same.

```zenscript
// Checks if the iron ingot is in the oreDict "ingotIron"
if (<ore:ingotIron> in <minecraft:iron_ingot>) {
    print("Iron ingots are in the right oreDict");
}

// Preferred, same function as previous
if (<ore:ingotIron> has <minecraft:iron_ingot>) { 
    print("Iron ingots are in the right oreDict");
}
```

This is only true when ALL matching items from the IIngredient AFTER the `has` can also be found in the IIngredient BEFORE `has`: Say we have an IIngredient that contains all dusts (e.g. redstone and glowstone dust):

```zenscript
val redstone = <minecraft:redstone>;
val glowstone = <minecraft:glowstone>;
val allDusts = <ore:dustAll>;
allDusts.add(redstone, glowstone);

//True as redstone is a part of alldusts
if (allDusts has redstone) {

}

//False as allDusts consists of redstone and glowstone, and redstone only consists of redstone.
if (redstone has allDusts) {

}
```