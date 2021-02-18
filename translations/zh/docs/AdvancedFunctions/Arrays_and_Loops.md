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

If you now think "wait, haven't I seen these brackets before?", you have. Remember ```recipes.add(out,[[],[],[]]);```? This uses three arrays with each containing up to three entries to define a crafting table recipe.

## 创建数组

You surely have noticed that all arrays here have the `as` statement appended.  
Why you ask? This is because ZenScript sometimes cannot predict what type the items in the array are. This can be the cause of strange conversion error logs!  
Better be safe than sorry and cast the Arrays to their correct types!  
Also, if you cast to non-primitive types (everything except strings, ints and the same) be sure to [import](/AdvancedFunctions/Import/) the corresponding package and be sure to do so at the TOP of the script:

```zenscript
import crafttweaker.item.IItemStack;
val IArray = [<minecraft:gold_ingot>, <minecraft:iron_ingot>] as IItemStack[];
```

## 嵌套数组

You can place Arrays in Arrays.

```zenscript
val stringArray1 = ["你好","世界"] as string[];
val stringArray2 = ["我","是"] as string[];
val stringArray3 = ["一只","漂亮的"] as string[];
val stringArrayAll = [stringArray1,stringArray2,stringArray3,["蝴蝶","！"]] as string[][];
```

## 引用数组中的项

You can refer to an element within an array by using it's place in the list. The first item in an Array is No. 0, the 2nd No.1 and so on.

If you want to refer to an item in a nested Array, you need two or more referers, as each removes one layer of the lists.

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

A loop is a function that repeats itself. You can use loops to apply an action to all elements in an Array

## For 循环

The main use of the for-loop is iterating through an array. Iterating means doing an action to all elements of an array.  
You can use the `break` keyword to break the loop prematurely.

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

The while loop executes the given code as long as the given condition evaluates to `true`.  
Alternatively, you can stop it using the `break` keyword.

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

While it is not recommended to do so, it is possible to add some Objects to Arrays.  
You can only add single Objects to an array, you cannot add two arrays.  
You use the `+` operator for array Addition:

```zenscript
import crafttweaker.item.IItemStack;

val iron = <minecraft:iron_ingot>;
var array as IItemStack[] = [iron, iron, iron];

array += iron;
for item in array {
    print(item.displayName);
}
```