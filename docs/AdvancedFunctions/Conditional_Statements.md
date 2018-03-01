# 条件语句

你一定会用到哪些需要满足条件才允许执行的代码块。   
这正是条件语句所做的部分。

## If 关键词

If 关键词是书写条件语句判定条件的部分，只有判定条件为 true 才会执行接下来的代码块。  
注意！**两个等号** 才是比较运算符（一个等号是赋值运算符！）

```Js
val test = 0;

if(test == 0){ //true
	print("Test 等于0！");
}
```

## Else

Else 关键字用来条件语句的后半部分，当 if 语句处条件为 False 时候，就会执行此处的代码块。

```Js
var test = 0;

if(test == 0){//true
	//当 test 为 0 时候，执行此处语句
	print("Test 等于 0！");
} else {
	//当 test 不为 0 时候，执行此处语句
	print("Test 不等于 0！");
}

test = 1
if(test == 0){//false
	//当 test 为 0 时候，执行此处语句
	print("Now, test is zero!");
} else {
	//当 test 不为 0 时候，执行此处语句
	print("Now, test is NOT zero!");
}

```

## 需要注意的事项
支持 `+`，`-`，`*`，`/`，`mod`，`连接符(~)` 运算符

还支持 `或(|)`，`与(&)`，`异或(^)` 逻辑运算符

```Js
//You can check for:


//数值判定
val a = 0 as int;
if(a==0){print("NumVal");}

//计算数值判定
val b = 1;
val c = 5;
//所有的计算结果都为 true
if(b+c==6){print("Num1!");}
if(b*c==5){print("Num2!");}
if(b/c==0.2){print("Num3!");}

//或，异或，与
val d = "你好";
val e = "世界";
val f = d~e; //f = "你好世界"，波浪号只是合并字符串

//|（或）逻辑判断，只要满足一个条件，就会输出 true
if(d=="你好" | e == "你好"){print("OR1!");}		//true
if(d=="你好" | e == "世界"){print("OR2!");}		//true

//^（异或）逻辑判断，只要满足一个条件，就会输出 false
if(d=="你好" ^ e == "你好"){print("XOR1!");}		//true
if(d=="你好" ^ e == "世界"){print("XOR2!");}		//false

//&（与）逻辑判断，两个条件都满足才会输出 true
if(d=="你好" & e == "你好"){print("AND1!");}		//false
if(d=="你好" & e == "世界"){print("AND2!");}		//true
```

##  ? 操作符
总是不停地输入 if/else 判定结构显得十分的冗余，尤其是只做普通的条件判定时。  
使用 `?` 操作符即可解决；  
下面的逻辑和 if/else 完全一致，只不过代码量小了许多。  
语法结构：`boolean ? if : else` 

```js
val switchy = false;

//输出 switchy 数值
print("Switchy is " ~ switchy);

//如果 switchy 为 true, vInt = 1，否则 vInt = 2
val vInt = switchy ? 1 : 2;
print(vInt);

//如果 switchy 为 true 输出 "Hello"，否则输出 "Bye"
print(switchy ? "Hello" : "Bye");

//如果 switchy 为 true 输出 "Bye"，否则输出 "Hello"
switchy ? print("Bye") : print("Hello");

```

## 操作符

你可以使用下面的操作符：  
所有的示例都会输出 true


| 名称              | 符号        | 解释                                                                               | 举例            |
|:-----------------:|:------------:|:-----------------------------------------------------------------------------------------:|:------------------:|
| 非               | `!`          | 反转布尔值                                                                      | !false             |
| 不等于         | `!=`         | 检查符号前后数值是否不等                     | 1 != 2             |
| 等于             | `==`         | 检查符号前后数值是否相等                                | 1 == 1             |
| 大于      | `>`          | 检查符号前数值是否大于后面数值                             | 1 > 2              |
| 大于等于  | `>=`         | 检查符号前数值是否大于等于后面数值           | 1 >= 1             |
| 小于       | `<`          | 检查符号前数值是否小于后面数值                             | 1 < 2              |
| 小于等于   | `<=`         | 检查符号前数值是否小于等于后面数值           | 1 <= 1             |
| 与               | `&`          | 检查符号前数值与符号后数值是否同时为 true；有一个为 false，或者全为 false 则会输出 false | true & true        |
| 或                | `|`          | 检查符号前数值与符号后数值是否有一个为 true； | true |
| 异或               | `^`          | 检查符号前数值与符号后数值是否同时为 true；有一个为 false，或者全为 false 则会输出 True | true ^ false       |


## in 操作符

`in` 操作符用来检查某个给定数值是否存在  
首先需要一个先要检索的列表，接下来使用 `in` 操作符来检查给定数值是否存在  

### in loadedMods （检查加载模组）

通过检查某个指定模组是否在 loadedMods 列表中来判定加载

```Js
if(loadedMods in "mcp"){
	print("Minecraft Coder Pack 已经加载了");
}
```

### in IIngredient 

你也可以通过对比两个 IIngredients 对象，来检查一个物品是否满足定义。

```Java
if(<ore:ingotIron> in <minecraft:iron_ingot>){
	print("铁锭的矿物词典是正确的！");
}
```

With this one you need to be a bit careful as not to confuse the two entries:  
This is only then true, when ALL matching items from the IIngredient AFTER the `in` can also be found in the IIngredient BEFORE `in`.
