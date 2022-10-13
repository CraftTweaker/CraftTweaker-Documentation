# 配列

配列とは同じ種類のものをリスト化したものをいいます。


## 配列の作り方
It is declared using `[` and `]`.

**Imortant**: you *must* initialize arrays to something, even if it's an empty array.

`var floatArray as float [];` 構文エラーにはなりませんが、ゲームをリロードするとエラーが発生し、スクリプトが実行されません。

代わりに、配列を`var floatArray as float [] = [];`のように初期化してください。

```zenscript
//"Hello"と "World"を格納する配列
val stringArray = ["Hello", "World"] as string[];

//1から3の数値を格納する配列
val intArray = [1,2,3] as int[];
```

「待てよ、この括弧は今まで見たことが無いぞ?」と思いましたか?前にも見たはずです。 Remember `recipes.add(out,[[],[],[]]);`? これは、クラフティングテーブル用のレシピを定義するための、3つの要素を含む3つの配列を使用しています。

## 配列へのキャスト
You surely have noticed that all arrays here have the `as` statement appended.  
Why you ask? それは、Zenscriptは配列の要素の型を検出できないことがままあるからです。 This can be the cause of strange conversion error logs!  
Better be safe than sorry and cast the Arrays to their correct types!  
Also, if you cast to non-primitive types (everything except strings, ints and the same) be sure to [import](/AdvancedFunctions/Import/) the corresponding package and be sure to do so at the TOP of the script:
```zenscript
import crafttweaker.item.IItemStack;
val IArray = [<minecraft:gold_ingot>, <minecraft:iron_ingot>] as IItemStack[];
```

## 配列のネスト
配列の中に配列を格納できます。

```zenscript
val stringArray1 = ["Hello","World"] as string[];
val stringArray2 = ["I","am"] as string[];
val stringArray3 = ["a","beatuful"] as string[];
val stringArrayAll = [stringArray1,stringArray2,stringArray3,["Butterfly","!"]] as string[][];
```

## 配列内要素へのアクセス
リスト内の場所を使って配列内の要素にアクセスできます。 最初の番号は 0、そして2番めは1というように番号が振られます。 The first item in an Array is No. 0, the 2nd No.1 and so on.

ネストされた配列にアクセスするためには、2度参照する必要があります。

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


# ループ
ループとは自己反復するための機能です。 ループを用いて、同じ操作を配列内要素全てに行うことができます。 ループを用いて、同じ操作を配列内要素全てに行うことができます。

## Forループ構文
forループ構文の主な使い方は配列の反復処理です。 Iterating means doing an action to all elements of an array.  
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

for i in 10 ..
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


for k in 1 ..
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
