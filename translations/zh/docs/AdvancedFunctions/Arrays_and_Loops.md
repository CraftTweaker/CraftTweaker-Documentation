# 数组（Arrays）

数组是一个包含多个相同类型项的列表。

## 声明数组

使用 ```[``` 和 ```]以声明数组```.

    //包含"你好"和"世界"的数组
    val stringArray = ["你好", "世界"] as string[];
    
    //包含数字 1,2,和3 的数组
    val intArray = [1,2,3] as int[];
    

也许你会说：“等等，我以前好想见过这些数组……”你确实见过。 还记得 ```recipes.add(out,[[],[],[]]);吗？```? 这一块就用了三个数组，每个数组又包含三个条目，以此来定义工作台配方。

## 创建数组

您肯定注意到这里的所有数组都有 ` as ` 语句。  
为什么？ 这是因为 ZenScript 有时无法预测数组中项的类型。 这就会导致游戏中会出现类型转换错误！  
为此，最安全的方法就是在构建数组的时候就指定正确的类型！  
还有一点，如果你构建了一个非基本类型（即字符串，整型类似的类型之外的其他类型）数组，请确保你[导入](Import/)了对应的包，并将它放在脚本的最顶上：

    import crafttweaker.item.IItemStack;
    val IArray = [<minecraft:gold_ingot>, <minecraft:iron_ingot>] as IItemStack[];
    

## 嵌套数组

数组中可以嵌套数组。

    val stringArray1 = ["你好","世界"] as string[];
    val stringArray2 = ["我","是"] as string[];
    val stringArray3 = ["一只","漂亮的"] as string[];
    val stringArrayAll = [stringArray1,stringArray2,stringArray3,["蝴蝶","！"]] as string[][];
    

## 访问数组中的元素

你可以通过这个元素在数组中的位置以访问这个元素。 数组中的第一项是0号， 第二项是1号，以此类推。

If you want to refer to an item in a nested Array, you need two or more referers, as each removes one layer of the lists.

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
    

# Loops

A loop is a function that repeats itself. You can use loops to apply an action to all elements in an Array

## For Loop

The main use of the for-loop is iterating through an array. Iterating means doing an action to all elements of an array.  
You can use the `break` keyword to break the loop prematurely.

    import crafttweaker.item.IItemStack;
    
    val IArray = [<minecraft:dirt>,<minecraft:planks>,<minecraft:diamond>] as IItemStack[];
    val JArray = [<minecraft:grass>,<minecraft:log>,<minecraft:gold_ingot>] as IItemStack[];
    val KArray = [<minecraft:wooden_axe>,<minecraft:golden_shovel>,<minecraft:emerald>] as IItemStack[];
    
    
    //for [IntegerName, ] elementName in IArray {code}
    
    for item in IArray {
        //defines the variable "item" with each element of IArray (i.e. <minecraft:dirt>,<minecraft:planks>,<minecraft:diamond>)
        //Just use this variable now!
        recipes.remove(item);
    }
    
    for i, item in IArray {
        //defines the variavle "i" with each element Number of IArray (i.e. 0,1,2,...)
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
        //defines the variable "i" with each number from 10 to 19 (i.e. 10,11,12,...,18,19)
        print(i);
    }
    
    for item in loadedMods["minecraft"].items {
        //defines the varaible "item" with each item added by the mod with the modID "minecraft" and removes its crafting recipe
        recipes.remove(item);
    }
    

## While Loop

The while loop executes the given code as long as the given condition evaluates to `true`.  
Alternatively, you can stop it using the `break` keyword.

    var i = 0; 
    
    //Will print 0 - 9, because in the iteration after that, i < 10 is false since i is 10 then.
    while i < 10 {
        print(i); 
        i += 1;
    } 
    
    print("After loop: " + i);
    
    
    //Will print 10 - 6, because in the iteration after that i == 5 and it will break.
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
    

# Adding items to an Array

While it is not recommended to do so, it is possible to add some Objects to Arrays.  
You can only add single Objects to an array, you cannot add two arrays.  
You use the `+` operator for array Addition:

```java
import crafttweaker.item.IItemStack;

val iron = <minecraft:iron_ingot>;
var array as IItemStack[] = [iron, iron, iron];

array += iron;
for item in array {
    print(item.displayName);
}
```