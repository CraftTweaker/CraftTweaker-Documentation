# 条件语句

你可能需要仅在满足某些条件 (或除了某些条件) 时才执行的代码。 这就是你需要条件语句的地方。

## If

if 语句是条件语句的第一部分。 它用于声明接下来的代码块只有在判定条件为 true 才会执行。 **Be careful, you need TWO EQUALS when comparing values! (That's because one equal is for declaring values!)**

```zenscript
val test = 0;

if (test == 0) { //true
    print("Test is zero!");
}
```

## Else

Else 语句需要加在条件语句的后，用于声明当 if 语句的条件为 False 时候执行的代码块。 

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

## 注意事项

支持`+`、`-`、`*`、`/`、`mod`和`链接字符串(~)`运算符

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

## ? 运算符

总是不停地输入 if/else 判定结构显得十分的冗余， 尤其是当你只需要做普通的条件判定时。 这就是 `?` 运算符存在的意义。 它的逻辑和 if/else 完全一致，只是大大减少了代码量。 语法： `boolean ? if : else`

```zenscript
val switchy = false;

//打印 switchy 的值
print("Switchy is " ~ switchy);

//如果 switchy 的值为 true，那么 vInt = 1，反之 vInt = 2
val vInt = switchy ? 1 : 2;
print(vInt);

//如果 switchy 的值为 true 则打印"你好"，反之打印"再见"
print(switchy ? "你好" : "再见");

//如果 switchy 的值为 true 则打印"再见"，反之打印"你好"
switchy ? print("再见") : print("你好");

```

## 运算符

你可以使用下面的操作符。 所有的例子结果都为 true。

| 名称          | 运算符          | 解释                                                                                                                                                                           | 例子                |
| ----------- | ------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------- |
| 非           | `!`          | 反转布尔值                                                                                                                                                                        | !false            |
| 不等于         | `!=`         | 判断符号前的值是否不等于符号后的值                                                                                                                                                            | 1 != 2            |
| 等于          | `==`         | 判断符号前的值是否等于符号后的值                                                                                                                                                             | 1 == 1            |
| 大于          | `>`       | 判断符号前的值是否大于符号后的值                                                                                                                                                             | 1 > 2             |
| 大于等于        | `>=`      | 判断符号前的值是否大于等于符号后的值                                                                                                                                                           | 1 >= 1            |
| Lesser than | `<`       | 判断符号前的值是否小于符号后的值                                                                                                                                                             | 1 < 2             |
| 小于等于        | `<=`      | 判断符号前的值是否小于等于符号后的值                                                                                                                                                           | 1 <= 1            |
| Logical AND | `&&` | Checks if both before and after values are true, false if one or both are false                                                                                              | true && true      |
| Logical OR  | `\|\|`     | Checks if either the value before or after are true, false if neither are true                                                                                               | false \|\| true |
| Bitwise XOR | `^`          | Checks if exactly one of the before or after values is true, false if both or none are true                                                                                  | true ^ false      |
| Bitwise AND | `&`      | Performs a bitwise AND operation on the before and after values. See [this](https://stackoverflow.com/questions/4014535/differences-in-boolean-operators-vs-and-vs) for more | true && true      |
| Bitwise OR  | `\|`        | Performs a bitwise OR operation on the before and after values. See [this](https://stackoverflow.com/questions/4014535/differences-in-boolean-operators-vs-and-vs) for more  | false \|\| true |

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

## In/has 操作符

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