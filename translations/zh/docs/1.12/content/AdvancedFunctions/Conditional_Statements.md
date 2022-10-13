# 条件语句

你可能需要仅在满足某些条件 (或除了某些条件) 时才执行的代码。 这就是你需要条件语句的地方。

## If

if 语句是条件语句的第一部分。 它用于声明接下来的代码块只有在判定条件为 true 才会执行。 **注意，你需要双等号来比较值！ （因为单等号是用来赋值的！）**

```zenscript
val test = 0;

if (test == 0) { //结果为 true
    print("Test 等于零！");
}
```

## Else

Else 语句需要加在条件语句的后面，用于声明当 if 语句的条件为 False 时候执行的代码块。

```zenscript
var test = 0;

if (test == 0) { //true
    //当变量 Test 等于 0 时将执行
    print("Test 是 0！");
} else {
    //当变量 Test 不等于 0 时将执行
    print("Test 不是 0！");
}

test = 1;
if (test == 0) { //false
    //当变量 Test 等于 0 时将执行
    print("现在 Test 是 0！");
} else {
    //当变量 Test 不等于 0 时将执行
    print("现在 Test 不是 0！");
}

```

## 注意事项
支持`+`、`-`、`*`、`/`、`mod`和`链接字符串(~)`运算符

支持的运算有 `逻辑或 (||)`, `逻辑与 (&&)`, `按位或 (|)`, `按位与 (&)` 以及 `按位异或 (^)`

```zenscript
//可检测：


//数值
val a = 0 as int;
if (a == 0) { print("NumVal"); }

//带运算数值
val b = 1;
val c = 5;
//使所有条件表达式为 true
if (b+c == 6) { print("Num1!"); }
if (b*c == 5) { print("Num2!"); }
if (b/c == 0.2) { print("Num3!"); }

//或、异或、与
val d = "你好";
val e = "世界";
val f = d~e; //f = "你好世界"，波浪号就是用于链接字符串

//||(或) 表示，当有判据通过，该条件表达式为 true
if (d == "Hello" || e == "Hello") { print("OR1!"); }        //true
if (d == "Hello" || e == "World") { print("OR2!"); }        //true

//^(异或) 表示，当仅有一个判据通过，该条件表达式为 true
if (d == "Hello" ^ e == "Hello") { print("XOR1!"); }        //true
if (d == "Hello" ^ e == "World") { print("XOR2!"); }        //false

//&&(与) 当所有判据通过，该条件表达式为 true
if (d == "Hello" && e == "Hello") { print("AND1!"); }       //false
if (d == "Hello" && e == "World") { print("AND2!"); }       //true
```

## ? 运算符
总是不停地输入 if/else 判定结构显得十分的冗余， 尤其是当你只需要做普通的条件判定时。 这就是 `?` 运算符存在的意义。 它的逻辑和 if/else 完全一致，只是大大减少了代码量。 语法： `boolean ? if : else`

```zenscript
val switchy = false;

//输出 switchy 的值
print("Switchy is " ~ switchy);

//如果 switchy 的值为 true，那么 vInt = 1，反之 vInt = 2
val vInt = switchy ? 1 : 2;
print(vInt);

//如果 switchy 的值为 true 则输出"你好"，反之输出"再见"
print(switchy ? "你好" : "再见");

//如果 switchy 的值为 true 则输出"再见"，反之输出"你好"
switchy ? print("再见") : print("你好");

```

## 运算符

你可以使用下面的操作符。 所有的例子结果都为 true。


| 名称   | 运算符          | 解释                                                                                                                 | 例子                |
| ---- | ------------ | ------------------------------------------------------------------------------------------------------------------ | ----------------- |
| 非    | `!`          | 反转布尔值                                                                                                              | !false            |
| 不等于  | `!=`         | 判断符号前的值是否不等于符号后的值                                                                                                  | 1 != 2            |
| 等于   | `==`         | 判断符号前的值是否等于符号后的值                                                                                                   | 1 == 1            |
| 大于   | `>`       | 判断符号前的值是否大于符号后的值                                                                                                   | 1 > 2             |
| 大于等于 | `>=`      | 判断符号前的值是否大于等于符号后的值                                                                                                 | 1 >= 1            |
| 小于   | `<`       | 判断符号前的值是否小于符号后的值                                                                                                   | 1 < 2             |
| 小于等于 | `<=`      | 判断符号前的值是否小于等于符号后的值                                                                                                 | 1 <= 1            |
| 逻辑与  | `&&` | 检查其前后条件表达式的值，当存在 false 时输出 false                                                                                   | true && true      |
| 逻辑或  | `\|\|`     | 检查其前后条件表达式的值，当皆不为 true 时输出 false                                                                                   | false \|\| true |
| 按位异或 | `^`          | 检查其前后条件表达式的值，当没有 true 或皆为 true 时输出 false                                                                           | true ^ false      |
| 按位与  | `&`      | 对其前后条件表达式进行按位与运算。 点[此](https://stackoverflow.com/questions/4014535/differences-in-boolean-operators-vs-and-vs)了解更多 | true && true      |
| 按位或  | `\|`        | 对其前后条件表达式进行按位或运算。 点[此](https://stackoverflow.com/questions/4014535/differences-in-boolean-operators-vs-and-vs)了解更多 | false \|\| true |

### `|` 与 `||`（以及 `&` 与 `&&`）的不同之处

除语法外，双写与单写运算符的主要区别，在于双写运算符检查完其之前的所有条件，可以直接停止判断。——这被称为“短路运算” 然而，使用单写运算符，即使从第一个条件便可判断结果，也会将所有条件逐一检查。 这不仅可以节省资源，也能更方便地完成如 **null 检查** 、链式条件之类的脚本。

```zenscript
var a = 5;
var item = ... as IItemStack;

// 即使已经满足条件 a 为 5，其仍然会对后面的所有条件继续检查
if (a == 5 | a == 3 | a == 10 | a == -1) {
    ...
// 即使 a 为 5，整个条件不可能成立（变量不能同时为 3 和 5 ），其仍然会对后面的所有条件继续检查
if (a == 3 & a < 2 & a > 8 & a == 5) {
    ... 
}

// 在访问变量前确认项目是否为 null
if (!isNull(item) && item.amount == 1) {
    ...
}

// 在从可能为 null 的项目中访问变量时检查项目是否不为 null，如果项目为 null 则抛出错误
if (!isNull(item) & item.amount == 1) {
    ...
}
```

## In/has 运算符

`in `和` has `运算符用来检查某个东西是否存在于某个东西中。  
首先需要一个先要检索的列表，接下来使用` in `/` has `操作符来检查给定数值是否存在。 对于 Zenscript 而言，`in `和` has `操作符没有任何区别，但通常在检测一个项目是否属于一个集合以及 for 循环中使用 `has`，因为这更加符合英语语法。

### in/has loadedMods（检测加载模组）

你可以检测某个指定模组是否在 loadedMods 列表中

```zenscript
//尽管可以使用 in
if(loadedMods in "mcp"){
    print("已加载 Minecraft Coder Pack");
}

//但大多数人倾向于使用 has
if(loadedMods has "mcp"){
    print("已加载 Minecraft Coder Pack");
}
```

### in/has IIngredient（检测材料）

你也可以通过对比两个 IIngredients 对象，来检查一个物品是否满足定义。  
注意不要混淆两个条目：  
只有在` in `之后的条件语句对象包含于` in `时，判断结果才为 true。  
在大部分情况下你会使用` has `关键字，因为 has 比 in 更容易理解且功能完全相同。

```zenscript
// 检测铁锭是否在“ingotIron”矿物词典中
if (<ore:ingotIron> in <minecraft:iron_ingot>) {
    print("铁锭在正确的矿物词典中");
}

// 更推荐的写法，与上述写法功能一致
if (<ore:ingotIron> has <minecraft:iron_ingot>) { 
    print("铁锭在正确的矿物词典中");
}
```

只有在 `has` 之前的材料对象包含于 `has` 之后的材料对象时，结果才为 true： 假设有一个包含所有粉状物品的材料对象（包括红石（redstone）和荧石（glowstone））：
```zenscript
val redstone = <minecraft:redstone>;
val glowstone = <minecraft:glowstone>;
val allDusts = <ore:dustAll>;
allDusts.add(redstone, glowstone);

//结果为 true，因为 redstone 属于 alldusts
if (allDusts has redstone) {

}

//结果为 false，因为 allDusts 包含 redstone 和 glowstone，但 redstone 只包含 redstone.
if (redstone has allDusts) {

}
```
