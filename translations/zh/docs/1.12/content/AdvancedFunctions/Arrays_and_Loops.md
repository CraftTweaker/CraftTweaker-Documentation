# 数组（Arrays）

数组是一个包含多个相同类型项的列表。


## 声明数组
It is declared using `[` and `]`.

**Imortant**: you *must* initialize arrays to something, even if it's an empty array.

`浮点数组为浮点[]；` 不会给出语法错误，但在重新加载您的游戏时，您将会遇到一个错误，您的脚本将无法工作。

而是将这样的空数组初始化为像这样 `var floatArray as float [] = [];`

```zenscript
//包含"你好"和"世界"的数组
val stringArray = ["你好", "世界"] as string[];

//包含数字 1-3 的数组
val intArray = [1,2,3] as int[];
```

如果你现在认为“等等，我以前没有看过这些括号！”，那么你就错了。 Remember `recipes.add(out,[[],[],[]]);`? 这里就使用了三个数组，每个数组又包含三个条目，以此来定义工作台配方。

## 创建数组
You surely have noticed that all arrays here have the `as` statement appended.  
Why you ask? 这是因为 ZenScript 有时无法预测数组中项的类型。 This can be the cause of strange conversion error logs!  
Better be safe than sorry and cast the Arrays to their correct types!  
Also, if you cast to non-primitive types (everything except strings, ints and the same) be sure to [import](/AdvancedFunctions/Import/) the corresponding package and be sure to do so at the TOP of the script:
```zenscript
import crafttweaker.item.IItemStack;
val IArray = [<minecraft:gold_ingot>, <minecraft:iron_ingot>] as IItemStack[];
```

## 嵌套数组
数组中可以嵌套数组。

```zenscript
val stringArray1 = ["Hello","World"] as string[];
val stringArray2 = ["I","am"] as string[];
val stringArray3 = ["a","beatuful"] as string[];
val stringArrayAll = [stringArray1,stringArray2,stringArray3,["Butterfly","!"]] as string[][];
```

## 引用数组中的项
你可以通过一个项在数组中的位置引用这个项。 The first item in an Array is No. 0, the 2nd No.1 and so on.

如果要引用嵌套数组中的项，则需要两个或多个序数表示它的位置，因为每个序数仅指代一个数组中的项。

```zenscript
/*
stringArray[0] is "Hello"
stringArray[1] is "World"
stringArray[2] is "I"
stringArray[3] is "am"
*/
val stringArray = ["Hello","World","I","am"] as string[];

//prints "Hello"
print(stringArray[0]);


//Nested Arrays
val stringArray1 = ["Hello","World"] as string[];
val stringArray2 = ["I","am"] as string[];
val stringArray3 = ["a","beautiful"] as string[];
val stringArrayAll = [stringArray1,stringArray2,stringArray3,["Butterfly","!"]] as string[][];

/*
stringArrayAll[0] is ["Hello","World"]
stringArrayAll[1] is ["I","am"]
stringArrayAll[2] is ["a","beautiful"]
stringArrayAll[3] is ["Butterfly","!"]

stringArrayAll[0][0] is "Hello"
stringArrayAll[0][1] is "World"
etc.
*/

//prints "World"
print(stringArrayAll[0][1]);
```


# 循环
循环是一个重复自身的函数。 它用于将操作应用于数组中的所有元素

## For 循环
For 循环的主要用途是遍历数组中的每一个项。 Iterating means doing an action to all elements of an array.  
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
    //defines the variable "i" with each element Number of IArray (i.e. 0,1,2,...)
    //defines the variable "item" with each element of IArray (i.e. <minecraft:dirt>,<minecraft:planks>,<minecraft:diamond>)
    //Just use these variables now!

    //Crafts Item of IArray using item of JArray and KArray (i.e. Dirt with grass and wooden axe, planks with wood and golden shovel, diamond with gold ingot and emerald)
    recipes.addShapeless(item,[JArray[i],KArray[i]]);
}

for i in 0 to 10 {
    //defines the variable "i" with each number from 0 to 9 (i.e. 0,1,2,...,8,9)
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
