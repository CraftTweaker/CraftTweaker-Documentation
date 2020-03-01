# 配列

配列とは同じ種類のものをリスト化したものをいいます。

## 配列の作り方

配列は、次のものを用いて作成します。 ```[``` ```]```.

**Imortant**: you *must* initialize arrays to something, even if it's an empty array.

`var floatArray as float [];` won't give syntax errors, but upon reloading your game, you will get an error and your script won't work.

Instead, initialize empty arrays like this `var floatArray as float [] = [];`

```zenscript
//"Hello"と "World"を格納する配列
val stringArray = ["Hello", "World"] as string[];

//1から3の数値を格納する配列
val intArray = [1,2,3] as int[];
```

If you now think "wait, haven't I seen these brackets before?", you have. Remember ```recipes.add(out,[[],[],[]]);```? This uses three arrays with each containing up to three entries to define a crafting table recipe.

## 配列へのキャスト

You surely have noticed that all arrays here have the `as` statement appended.  
Why you ask? This is because ZenScript sometimes cannot predict what type the items in the array are. This can be the cause of strange conversion error logs!  
Better be safe than sorry and cast the Arrays to their correct types!  
Also, if you cast to non-primitive types (everything except strings, ints and the same) be sure to [import](Import/) the corresponding package and be sure to do so at the TOP of the script:

```zenscript
import crafttweaker.item.IItemStack;
val IArray = [<minecraft:gold_ingot>, <minecraft:iron_ingot>] as IItemStack[];
```

## 配列のネスト

You can place Arrays in Arrays.

```zenscript
val stringArray1 = ["Hello","World"] as string[];
val stringArray2 = ["I","am"] as string[];
val stringArray3 = ["a","beatuful"] as string[];
val stringArrayAll = [stringArray1,stringArray2,stringArray3,["Butterfly","!"]] as string[][];
```

## 配列内要素へのアクセス

You can refer to an element within an array by using it's place in the list. The first item in an Array is No. 0, the 2nd No.1 and so on.

If you want to refer to an item in a nested Array, you need two or more referers, as each removes one layer of the lists.

```zenscript
/*
stringArray[0] → "Hello"
stringArray[1] → "World"
stringArray[2] → "I"
stringArray[3] → "am"
*/
val stringArray = ["Hello","World","I","am"] as string[];

//"Hello"を出力
print(stringArray[0]);


//入れ子になった配列
val stringArray1 → ["Hello","World"] as string[];
val stringArray2 → ["I","am"] as string[];
val stringArray3 → ["a","beautiful"] as string[];
val stringArrayAll → [stringArray1,stringArray2,stringArray3,["Butterfly","!"]] as string[][];

/*
stringArrayAll[0] → ["Hello","World"]
stringArrayAll[1] → ["I","am"]
stringArrayAll[2] → ["a","beautiful"]
stringArrayAll[3] → ["Butterfly","!"]

stringArrayAll[0][0] → "Hello"
stringArrayAll[0][1] → "World"
etc.
*/

//"World"を出力
print(stringArrayAll[0][1]);
```

# ループ

A loop is a function that repeats itself. You can use loops to apply an action to all elements in an Array

## Forループ構文

The main use of the for-loop is iterating through an array. Iterating means doing an action to all elements of an array.  
You can use the `break` keyword to break the loop prematurely.

```zenscript
import crafttweaker.item.IItemStack;

val IArray = [<minecraft:dirt>,<minecraft:planks>,<minecraft:diamond>] as IItemStack[];
val JArray = [<minecraft:grass>,<minecraft:log>,<minecraft:gold_ingot>] as IItemStack[];
val KArray = [<minecraft:wooden_axe>,<minecraft:golden_shovel>,<minecraft:emerald>] as IItemStack[];


//for [IntegerName, ] elementName in IArray {code}

for item in IArray {
    //IArrayの各要素 (i.e. <minecraft:dirt>,<minecraft:planks>,<minecraft:diamond>)は変数"item"に入ります
    //それでこれは使えるようになります
    recipes.remove(item);
}

for i, item in IArray {
    //IArrayの各番号 (i.e. 0,1,2,...)は変数"i"に入ります
    //IArrayの各要素 (i.e. <minecraft:dirt>,<minecraft:planks>,<minecraft:diamond>)は変数"item"に入ります
    //それでこれらは使えるようになります

    //JArrayとKArray(i.e. Dirt with grass and wooden axe, planks with wood and golden shovel, diamond with gold ingot and emerald)のアイテムを用いた、IArrayのアイテムのクラフト
    recipes.addShapeless(item,[JArray[i],KArray[i]]);
}

for i in 0 to 10 {
    //0から9 (i.e. 0,1,2,...,8,9)の各数値は変数"i"に入る
    print(i);
}

for i in 10 .. 20 {
    //10から19 (i.e. 10,11,12,...,18,19)の各数値は変数"i"に入る
    print(i);
}

for item in loadedMods["minecraft"].items {
    //modIDが"minecraft"のアイテムを変数"item"に格納し、そのクラフトレシピを削除する
    recipes.remove(item);
}
```

## While ループ

The while loop executes the given code as long as the given condition evaluates to `true`.  
Alternatively, you can stop it using the `break` keyword.

```zenscript
var i = 0; 

//0から9を出力します。なぜなら、i以降の繰り返しにおいて、iが10のために i < 10 がfalseと評価されるからです。
while i < 10 {
    print(i); 
    i += 1;
} 

print("After loop: " + i);


//10から6を出力します。i == 5の時にbreakでループから脱出します。
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

# 配列への追加

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