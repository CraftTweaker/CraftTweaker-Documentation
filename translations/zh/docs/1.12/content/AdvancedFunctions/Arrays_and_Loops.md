# 数组（Arrays）

数组是一个包含多个相同类型项的列表。


## 声明数组
使用 `[]` 来声明。

**重要事项</ 0>：即使是空数组，也*必须*初始化其值。 </p>

`var floatArray as float [];` 不会给出语法错误，但在重新加载你的游戏时会发生错误，你的脚本将无法工作。

与之相反，要像这样初始化空数组 `var floatArray as float [] = [];`

```zenscript
//包含"你好"和"世界"的数组
val stringArray = ["你好", "世界"] as string[];

//包含数字 1-3 的数组
val intArray = [1,2,3] as int[];
```

也许你会想：“等等，我以前是不是见过这些数组？”你确实见过。 记得 `recipes.add(out,[[],[],[]]);` 吗？ 这里就使用了三个数组，每个数组又包含三个条目，以此来定义工作台配方。

## 创建数组
你肯定注意到这里的所有数组都有 ` as ` 语句。  
你问为什么会这样？ 这是因为 ZenScript 有时无法预测数组中项的类型。 这就会导致游戏中会出现类型转换错误日志！  
保险起见，你应该在构建数组的时候就指定正确的类型！  
还有一点，如果你创建了一个非基本类型（即除字符串，整型等外的其他类型）的数组，请确保你在脚本的头部[导入](/AdvancedFunctions/Import/)对应的包：
```zenscript
import crafttweaker.item.IItemStack;
val IArray = [<minecraft:gold_ingot>, <minecraft:iron_ingot>] as IItemStack[];
```

## 嵌套数组
数组中可以嵌套数组。

```zenscript
val stringArray1 = ["你好","世界"] as string[];
val stringArray2 = ["我","是"] as string[];
val stringArray3 = ["只","漂亮的"] as string[];
val stringArrayAll = [stringArray1,stringArray2,stringArray3,["蝴蝶","！"]] as string[][];
```

## 引用数组中的项
你可以通过一个项在数组中的位置引用这个项。 数组中的第一项是0号，第2项是1号，以此类推。

如果要引用嵌套数组中的项，则需要两个或多个序数表示它的位置，因为每个序数仅指代一个数组中的项。

```zenscript
/*
stringArray[0] 对应 "你好"
stringArray[1] 对应 "世界"
stringArray[2] 对应 "我"
stringArray[3] 对应 "是"
*/
val stringArray = ["你好","世界","我","是"] as string[];

//输出"你好"
print(stringArray[0]);


//嵌套数组
val stringArray1 = ["你好","世界"] as string[];
val stringArray2 = ["我","是"] as string[];
val stringArray3 = ["只","美丽的"] as string[];
val stringArrayAll = [stringArray1,stringArray2,stringArray3,["蝴蝶","！"]] as string[][];

/*
stringArrayAll[0] is ["你好","世界"]
stringArrayAll[1] is ["我","是"]
stringArrayAll[2] is ["只","漂亮的"]
stringArrayAll[3] is ["蝴蝶","！"]

stringArrayAll[0][0] 对应 "你好"
stringArrayAll[0][1] 对应 "世界"
etc.
*/

//输出“世界”
print(stringArrayAll[0][1]);
```


# 循环
循环函数重复自身。 可通过循环函数，将操作应用至数组中所有元素。

## For 循环
For 循环的主要用途是遍历数组中的每一个项。 遍历指对数组中的每一项执行一次操作。  
使用 `break` 关键字中断循环。

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
    //定义变量 "i" ，它会遍历 IArray 中的每一项（例如0、1、2……）
    //为每个 IArray 元素（例如 <minecraft:dirt>、<minecraft:planks>、<minecraft:diamond>）定义变量“item”
    //然后就可以使用这些变量了！

    //使用 JArray 和 KArray 数组中的物品以合成 IArray 数组中的物品（例如 以草与木斧合成泥土，以木头与金锹合成木板，以金锭与绿宝石合成钻石）
    recipes.addShapeless(item,[JArray[i],KArray[i]]);
}

for i in 0 to 10 {
    //定义变量“i”，它会遍历 0 至 9 的每一个整数（例如 0,1,2,...8,9）
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
While 循环只在给定条件为 `true` 时执行循环。  
也可以使用 `break` 关键字中断循环。

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

虽然不建议这样做，但向数组添加项中是可行的。  
你只能将单个项添加到单个数组中。   
使用 ` + ` 运算符向数组中添加项：

```zenscript
import crafttweaker.item.IItemStack;

val iron = <minecraft:iron_ingot>;
var array as IItemStack[] = [iron, iron, iron];

array += iron;
for item in array {
    print(item.displayName);
}
```
