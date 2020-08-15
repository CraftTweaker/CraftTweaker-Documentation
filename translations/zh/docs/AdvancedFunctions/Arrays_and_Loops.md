# 数组（Arrays）

数组是一个包含多个相同类型项的列表。

## 声明数组

使用 ```[``` 和 ```]以声明数组```.

**Imortant**: you *must* initialize arrays to something, even if it's an empty array.

`浮点数组为浮点[]；` 不会给出语法错误，但在重新加载您的游戏时，您将会遇到一个错误，您的脚本将无法工作。

Instead, initialize empty arrays like this `var floatArray as float [] = [];`

```zenscript
//包含"你好"和"世界"的数组
val stringArray = ["你好", "世界"] as string[];

//包含数字 1-3 的数组
val intArray = [1,2,3] as int[];
```

如果你现在觉得“等待，我以前没有看到这些括号？”，你就有了。 记住密码 ```增加(输出、[]、[]、[]、[]])；```? 这使用三个数组，每个数组包含最多三个条目来定义一个图表配方。

## 创建数组

你肯定已经注意到，这里所有数组都有 `作为` 语句。  
你为什么要问？ 这是因为ZenScript 有时无法预测数组中的项目类型。 This can be the cause of strange conversion error logs!  
Better be safe than sorry and cast the Arrays to their correct types!  
Also, if you cast to non-primitive types (everything except strings, ints and the same) be sure to [import](/AdvancedFunctions/Import/) the corresponding package and be sure to do so at the TOP of the script:

```zenscript
import crafttweaker.item.IItemStack;
val IArray = [<minecraft:gold_ingot>, <minecraft:iron_ingot>] as IItemStack[];
```

## 嵌套数组

你可以在数组中放置数组。

```zenscript
val stringArray1 = ["你好","世界"] as string[];
val stringArray2 = ["我","是"] as string[];
val stringArray3 = ["一只","漂亮的"] as string[];
val stringArrayAll = [stringArray1,stringArray2,stringArray3,["蝴蝶","！"]] as string[][];
```

## 引用数组中的项

您可以通过使用它在列表中的位置来引用数组中的元素。 数组中的第一个项目是 同上，第1号等。

如果您想要在嵌套数组中提及某个项目， 你需要两个或更多的咨询者，因为每个咨询者都会移除列表的一个层。

```zenscript
/*
stringArray[0] 为 "你好"
stringArray[1] 为 "世界"
stringArray[2] 为 "我"
stringArray[3] 为 "是"
*/
val stringArray = ["你好","世界","我","是"] as string[];

//打印"你好"
print(stringArray[0]);


//嵌套数组
val stringArray1 = ["你好","世界"] as string[];
val stringArray2 = ["我","是"] as string[];
val stringArray3 = ["一只","美丽的"] as string[];
val stringArrayAll = [stringArray1,stringArray2,stringArray3,["蝴蝶","！"]] as string[][];

/*
stringArrayAll[0] 为 ["你好","世界"]
stringArrayAll[1] 为 ["我","是"]
stringArrayAll[2] 为 ["一只","美丽的"]
stringArrayAll[3] 为 ["蝴蝶","！"]

stringArrayAll[0][0] 为 "你好"
stringArrayAll[0][1] 为 "世界"
以此类推
*/

//打印 "世界"
print(stringArrayAll[0][1]);
```

# 循环

循环是一个重复的函数。 您可以使用循环来对数组中的所有元素应用操作

## For 循环

循环的主要用途是通过一个数组迭代。 迭代意味着对数组的所有元素采取行动。  
您可以使用 `断开` 关键字来提前中断循环。

```zenscript
import crafttweaker.item.IItemStack;

val IArray = [<minecraft:dirt>,<minecraft:planks>,<minecraft:diamond>] as IItemStack[];
val JArray = [<minecraft:grass>,<minecraft:log>,<minecraft:gold_ingot>] as IItemStack[];
val KArray = [<minecraft:wooden_axe>,<minecraft:golden_shovel>,<minecraft:emerald>] as IItemStack[];


//for [序数名称, ] 项名称 in IArray {代码}

for item in IArray {
    //定义变量 "item" ，它会遍历 IArray 中的每一项。 (例如 <minecraft:dirt>,<minecraft:planks>,<minecraft:diamond>)
    //然后就可以使用这个变量了！
    recipes.remove(item);
}

for i, item in IArray {
    //定义变量 “i" ，它会遍历 IArray 中的所有序号（例如 0,1,2,...)
    //定义变量 ”item" ，它会遍历 IArray 中的每一项（例如 <minecraft:dirt>,<minecraft:planks>,<minecraft:diamond>）
    //然后就可以使用这些变量了！

    //使用 JArry 数组的物品和 KArray 数组的物品来合成 IArray 数组中的物品（例如用木斧和草方块合成泥土，用木板和木头合成金铲，用金锭和绿宝石合成钻石）
    recipes.addShapeless(item,[JArray[i],KArray[i]]);
}

for i in 0 to 10 {
    //定义变量 "i" ，它会遍历 0 至 9 的每一个整数（例如 0,1,2,...,8,9）
    print(i);
}

for i in 10 .. 20 {
    //定义变量 “i" ，它会遍历 10 至 19 的每一个整数（例如 10,11,12,...18,19）
    print(i);
}

for item in loadedMods["minecraft"].items {
    //定义变量 "item" ，它会遍历所有模组 ID 为 ”minecraft“ 的物品并移除它们的合成配方
    recipes.remove(item);
}
```

## While 循环

循环执行给定的代码，只要给定条件为 `true`。  
或者，您可以使用 `断开` 关键字。

```zenscript
var i = 0; 

//将输出 0 - 9 ，因为在下一轮循环中，由于 i 等于 10，使得 i < 10 的判断结果为false。
while i < 10 {
    print(i); 
    i += 1;
} 

print("After loop: " + i);


//会输出 10 - 6，因为在下一轮循环中 i== 5，使循环中断
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

# 向数组中添加项

虽然不建议添加一些对象到数组是可能的。  
您只能将单个对象添加到一个数组，您不能添加两个数组。  
您使用 `+` 运算符来添加阵列：

```zenscript
import crafttweaker.item.IItemStack;

val iron = <minecraft:iron_ingot>;
var array as IItemStack[] = [iron, iron, iron];

array += iron;
for item in array {
    print(item.displayName);
}
```