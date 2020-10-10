# Массивы

Массив — это список, содержащий несколько предметов одинакового вида.

## Объявление массивов

Они объявляются с помощью ```[``` и ```]```.

**Важно**: вы *должны* инициализировать массивы любыми значениями, даже если это пустой массив.

`var floatArray as float [];` не вызовет синтаксические ошибки, но после перезагрузки игры вы получите ошибку и ваш скрипт не будет работать.

Вместо этого, инициализируйте пустые массивы вот так `var floatArray as float [] = [];`

```zenscript
//Массив, содержащий "Hello" и "World"
val stringArray = ["Hello", "World"] as string[];

//Массив, содержащий 1-3
val intArray = [1,2,3] as int[];
```

Если вы сейчас подумали "подождите, разве я не видел эти скобки раньше?", то "да", вы их видели. Запомните ```recipes.add(out,[[],[],[]]);```? Здесь используются три массива, где каждый содержит по три объекта, чтобы определить рецепт крафта в верстаке.

## Приведение к типу массива

Вы наверняка заметили, что все эти массивы в конце имеют указание `as` .  
Почему, спросите вы? This is because ZenScript sometimes cannot predict what type the items in the array are. This can be the cause of strange conversion error logs!  
Better be safe than sorry and cast the Arrays to their correct types!  
Also, if you cast to non-primitive types (everything except strings, ints and the same) be sure to [import](/AdvancedFunctions/Import/) the corresponding package and be sure to do so at the TOP of the script:

```zenscript
import crafttweaker.item.IItemStack;
val IArray = [<minecraft:gold_ingot>, <minecraft:iron_ingot>] as IItemStack[];
```

## Вложенные массивы

Вы можете размещать массивы в массивах.

```zenscript
val stringArray1 = ["Привет", "мир"] as string[];
val stringArray2 = ["Я"," — "] as string[];
val stringArray3 = ["очень","красивая"] as string[];
val stringArrayAll = [stringArray1,stringArray2,stringArray3,["бабочка","!"]] as string[][];
```

## Обращение к элементам массива

You can refer to an element within an array by using it's place in the list. The first item in an Array is No. 0, the 2nd No.1 and so on.

If you want to refer to an item in a nested Array, you need two or more referers, as each removes one layer of the lists.

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

# Циклы

A loop is a function that repeats itself. You can use loops to apply an action to all elements in an Array

## Цикл for

The main use of the for-loop is iterating through an array. Iterating means doing an action to all elements of an array.  
You can use the `break` keyword to break the loop prematurely.

```zenscript
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
    //defines the variable "i" with each number from 10 to 19 (i.e. 10,11,12,...,18,19)
    print(i);
}

for item in loadedMods["minecraft"].items {
    //defines the variable "item" with each item added by the mod with the modID "minecraft" and removes its crafting recipe
    recipes.remove(item);
}
```

## Цикл while

The while loop executes the given code as long as the given condition evaluates to `true`.  
Alternatively, you can stop it using the `break` keyword.

```zenscript
var i = 0; 

//Будет выводить числа от 0 до 9, потому что i < 10 &mdash; ложь, когда i уже достигает 10.
while i < 10 {
    print(i); 
    i += 1;
} 

print("After loop: " + i);


//Напечатает от 10 до 6, потому что на итерации, где i == 5, цикл прерывается.
while (i > 0) {
    if i == 5
        break;
    print(i);
    i -= 1;
}

print("После цикла 2: " + i);


for k in 1 .. 10 {
    if (k == 5)
        break;
    print(k);
}
```

# Добавление элементов к массиву

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