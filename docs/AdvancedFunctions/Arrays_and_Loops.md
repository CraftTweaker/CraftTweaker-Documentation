# 数组

数组是一个列表，它包含一些相似的条目。


## 声明数组
使用 ```[``` 和 ```]``` 来声明数组

```js
//包含“你好”和“世界”的数组
val stringArray = ["你好", "世界"] as string[];

//包含数字 1,2,3 的数组
val intArray = [1,2,3] as int[];
```

也许你会说：“等等，我可从未用过这些数组……”，呃……其实你一直在用。
还记得 ```recipes.add(out,[[],[],[]]);``` 么？
这一块就用了三个数组，每个数组又包含三个条目，借此来定义工作台上的合成。

## 构建数组
你可能注意到了，所有的数组都有一个 `as` 附加声明。  
这是做什么的？你也许会问  
ZenScript 有时候并不能预测数组中物品属于何种类型，这就会导致游戏中会出现类型转换错误！    
为此，最安全的方法就是在构建数组的时候就指定正确的类型！  
同时，如果你构建了一个非基本类型（即字符串，整型类似的类型之外的其他类型），要确定你[导入](Import)了正确的包，并将它们放在脚本的最顶上：  
```js
// 下面的例子就演示了最推荐的数组构建方式
import crafttweaker.item.IItemStack;  // 首先是导入包，这个一定要放在脚本的最顶上
val IArray = [<minecraft:gold_ingot>, <minecraft:iron_ingot>] as IItemStack[];  // 使用 as 附加声明，指定其为 IItemStack（物品堆）类型
```

## 数组嵌套
数组中可以嵌套数组。

```
val stringArray1 = ["你好","世界"] as string[];
val stringArray2 = ["我","是"] as string[];
val stringArray3 = ["一只","漂亮的"] as string[];
val stringArrayAll = [stringArray1,stringArray2,stringArray3,["蝴蝶","！"]] as string[][];
```

## 访问数组中的元素
你可以通过下标来访问数组中的元素。  
数组中的第一个元素通过下标 0 来访问，第二个元素通过下标 1 来访问，以此类推。

如果你想要访问嵌套数组中的元素，则需要指定多个下标来访问。

```js
/*
stringArray[0] is "你好"
stringArray[1] is "世界"
stringArray[2] is "我"
stringArray[3] is "是"
*/
val stringArray = ["你好","世界","我","是"] as string[];

//打印输出“你好”
print(stringArray[0]);


//嵌套数组
val stringArray1 = ["你好","世界"] as string[];
val stringArray2 = ["我","是"] as string[];
val stringArray3 = ["一只","漂亮的"] as string[];
val stringArrayAll = [stringArray1,stringArray2,stringArray3,["蝴蝶","！"]] as string[][];

/*
stringArrayAll[0] is ["你好","世界"]
stringArrayAll[1] is ["我","是"]
stringArrayAll[2] is ["一只","漂亮的"]
stringArrayAll[3] is ["蝴蝶","！"]

stringArrayAll[0][0] is "你好"
stringArrayAll[0][1] is "世界"
以此类推
*/

//打印输出“世界”
print(stringArrayAll[0][1]);
```


# 循环
循环是一个能够重复执行的函数。你能够通过循环来对一个数组中所有的元素进行一些修改应用。

## For 循环
For循环的主要用途是遍历数组中的每一个元素。遍历指的是对一个数组中的所有元素执行一段代码。
你可以使用`break`关键字提前结束循环。
```js
import crafttweaker.item.IItemStack;

val IArray = [<minecraft:dirt>,<minecraft:planks>,<minecraft:diamond>] as IItemStack[];
val JArray = [<minecraft:grass>,<minecraft:log>,<minecraft:gold_ingot>] as IItemStack[];
val KArray = [<minecraft:wooden_axe>,<minecraft:golden_shovel>,<minecraft:emerald>] as IItemStack[];


//for [IntegerName, ] 元素名 in IArray {需要循环执行的代码}

for item in IArray {
	//定义一个变量叫做“item”，遍历 IArray 中的每一个元素（就是类似于 <minecraft:dirt>,<minecraft:planks>,<minecraft:diamond> 这样的东西）
	//然后就能用这些变量了！
	recipes.remove(item);
}

for i, item in IArray {
	//定义变量“i”来获取 IArray 中每个元素的下标（比如 0,1,2,3…… 这样的）
	//定义一个变量叫做“item”，遍历 IArray 中的每一个元素（就是类似于 <minecraft:dirt>,<minecraft:planks>,<minecraft:diamond> 这样的东西）
	//然后就能用这些变量了！

	//使用 JArry 数组的物品和 KArray 数组的物品来合成 IArray 数组中的物品（比如泥土由玻璃和木斧合成，木板由木头和金锄合成，钻石由金锭和绿宝石合成）
	recipes.addShapeless(item,[JArray[i],KArray[i]]);
}

for i in 0 to 10 {
	//定义一个变量 i 遍历数字 0~9（0,1,2,...,8,9）
    print(i);
}

for i in 10 .. 20 {
	//定义一个变量 i 遍历数字 10~19（10,11,12,...,18,19）
    print(i);
}

for item in loadedMods["minecraft"].items {
	//定义一个变量“item”来遍历所有 modID 为“minecraft”的物品，并移除它们的合成
	recipes.remove(item);
}
```

## While 循环
While循环只要后面的条件为`true`就会循环执行给定的代码。
另外，可以使用`break`关键字结束循环。

```
var i = 0;

//会输出 0 - 9 ，因为在下一轮循环中，i等于10，因此 i<10 判断结果为false 
while i < 10 {
	print(i);
	i += 1;
}

print("After loop: " + i);


//会输出 10 - 6, 应为在下一轮循环中 i== 5 ,使循环中断
while (i > 0) {
	if i == 5
		break;
	print(i);
	i -= 1;
}

print("After loop 2: " + i);


for k in 1 .. 10 {
	if (k == 5)
	    break;
	print(k);
}
```

# 向数组中添加对象

虽然很不推荐这么做，但是向数组中添加对象是可行的；  
每次只能对一个数组添加一个元素，无法同时对多个数组添加元素；  
使用符号 `+` 来添加为数组添加元素。

```js
import crafttweaker.item.IItemStack;

val iron = <minecraft:iron_ingot>;
var array as IItemStack[] = [iron, iron, iron];

array += iron;
for item in array {
	print(item.displayName);
}
```
