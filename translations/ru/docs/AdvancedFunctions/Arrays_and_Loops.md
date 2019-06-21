# Массивы

Массив — это список, содержащий несколько предметов одинакового вида.

## Объявление массивов

Они объявляются с помощью ```[``` и ```]```.

    //Массив, содержащий "Hello" и "World"
    val stringArray = ["Hello", "World"] as string[];
    
    //Массив, содержащий 1-3
    val intArray = [1,2,3] as int[];
    

Если вы сейчас подумали "подождите, разве я не видел эти скобки раньше?", то "да", вы видели. Помните ```recipes.add(out,[[],[],[]]);```? Здесь используются три массива, где каждый содержит по три объекта, чтобы определить рецепт крафта в верстаке.

## Приведение к типу массива

Вы точно заметили, что все массивы имеют дополнительное указание`as`.  
Почему, вы спросите. Это потому что ZenScript иногда не может предсказать, предметы какого типа хранятся в массиве. This can be the cause of strange conversion error logs!  
Better be safe than sorry and cast the Arrays to their correct types!  
Also, if you cast to non-primitive types (everything except strings, ints and the same) be sure to [import](Import/) the corresponding package and be sure to do so at the TOP of the script:

    import crafttweaker.item.IItemStack;
    val IArray = [<minecraft:gold_ingot>, <minecraft:iron_ingot>] as IItemStack[];
    

## Вложенные массивы

Вы можете разместить массивы в массивах.

    val stringArray1 = ["Привет", "мир"] as string[];
    val stringArray2 = ["Я"," — "] as string[];
    val stringArray3 = ["очень","красивая"] as string[];
    val stringArrayAll = [stringArray1,stringArray2,stringArray3,["бабочка","!"]] as string[][];
    

## Обращение к элементам массива

Вы можете ссылаться на элемент в массиве, используя его место в списке. Первый элемент массива — номер 0, второй — номер 1 и так далее.

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
    

# Циклы

Цикл — это функция, которая повторяется. Вы можете использовать циклы, чтобы применить какое-то действие ко всем элементам массива.

## Цикл for

Основное использование цикла for — проход через массив. Проход через массив означает, что действие применяется ко всем элементам массива.  
Вы можете использовать ключевое слово `break`, чтобы прервать выполнение цикла досрочно.

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
    

## Цикл while

Цикл while выполняет данный код пока некоторое условие возвращает `true`.  
В качестве альтернативы, вы можете остановить его с помощью ключевого слова `break`.

    var i = 0; 
    
    //Будет выводить числа от 0 до 9, потому что i < 10 &mdash; ложь, когда i уже достигает 10.
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
    

# Добавление элементов к массиву

Пока что это не очень рекомендуется, но можно добавляет объекты к массивам.  
Вы можете добавлять объекты к массиву только по одному, нельзя соединить два массива.  
Оператор для добавления элементов к массиву &mdash; `&plus;`:

```java
import crafttweaker.item.IItemStack;

val iron = <minecraft:iron_ingot>;
var array as IItemStack[] = [iron, iron, iron];

array += iron;
for item in array {
    print(item.displayName);
}
```