# 数组（Arrays）

数组是一个包含多个相同类型项的列表。

## 声明数组

使用 ```[``` 和 ```]以声明数组```.

    //包含"你好"和"世界"的数组
    val stringArray = ["你好", "世界"] as string[];
    
    //包含数字 1-3 的数组
    val intArray = [1,2,3] as int[];
    

也许你会说：“等等，我以前好想见过这些数组……”你确实见过。 还记得 ```recipes.add(out,[[],[],[]]);吗？```? 这里就使用了三个数组，每个数组又包含三个条目，以此来定义工作台配方。

## 创建数组

您肯定注意到这里的所有数组都有 ` as ` 语句。  
你问为什么会这样？ 这是因为 ZenScript 有时无法预测数组中项的类型。 这就会导致游戏中会出现类型转换错误日志！  
为此，最安全的方法就是在构建数组的时候就指定正确的类型！  
还有一点，如果你构建了一个非基本类型（即字符串，整型类似的类型之外的其他类型）的数组，请确保你在脚本的最顶上[导入](Import/)对应的包：

    import crafttweaker.item.IItemStack;
    val IArray = [<minecraft:gold_ingot>, <minecraft:iron_ingot>] as IItemStack[];
    

## 嵌套数组

数组中可以嵌套数组。

    val stringArray1 = ["你好","世界"] as string[];
    val stringArray2 = ["我","是"] as string[];
    val stringArray3 = ["一只","漂亮的"] as string[];
    val stringArrayAll = [stringArray1,stringArray2,stringArray3,["蝴蝶","！"]] as string[][];
    

## 引用数组中的项

你可以通过一个项在数组中的位置引用这个项。 数组中的第一项的序数是 0，第二项是1，以此类推。

如果要引用嵌套数组中的项，则需要两个或多个序数表示它的位置，因为每个序数仅指代一个数组中的项。

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
    

# 循环

循环是一个重复自身的函数。 它用于将操作应用于数组中的所有元素

## For 循环

For 循环的主要用途是遍历数组中的每一个项。 遍历指对数组中的每一项执行一次操作。  
使用 `break` 关键字中断循环。

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
    

## While 循环

While 循环会在给定条件为 `true` 时执行循环。  
另外也可以使用 `break` 关键字中断循环。

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
    

# 向数组中添加项

虽然不建议这样做，但向数组添加项中是可行的。  
你只能将单个项添加到数组中，也不能添加两个数组。  
使用 ` + ` 运算符向数组中添加项：

```java
import crafttweaker.item.IItemStack;

val iron = <minecraft:iron_ingot>;
var array as IItemStack[] = [iron, iron, iron];

array += iron;
for item in array {
    print(item.displayName);
}
```