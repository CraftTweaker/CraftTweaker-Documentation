# 配列

配列とは同じ種類のものをリスト化したものをいいます。

## 配列の作り方

配列は、次のものを用いて作成します。 ```[``` ```]```。

**重要**: 空の配列であろうと、配列は*必ず*何かで初期化してください。

`var floatArray as float [];` 構文エラーにはなりませんが、ゲームをリロードするとエラーが発生し、スクリプトが実行されません。

代わりに、配列を`var floatArray as float [] = [];`のように初期化してください。

```zenscript
//"Hello"と "World"を格納する配列
val stringArray = ["Hello", "World"] as string[];

//1から3の数値を格納する配列
val intArray = [1,2,3] as int[];
```

「待てよ、この括弧は今まで見たことが無いぞ?」と思いましたか?前にも見たはずです。 思い出してください、 ```recipes.add(out,[[],[],[]]);```? これは、クラフティングテーブル用のレシピを定義するための、3つの要素を含む3つの配列を使用しています。

## 配列へのキャスト

これまでの配列の全てに、`as`という演算子がくっついていることに気が付いたしょう。なぜでしょうか? それは、Zenscriptは配列の要素の型を検出できないことがままあるからです。 それは、Zenscriptは配列の要素の型を検出できないことがままあるからです。 これが変なエラーログの原因になっていることがあります。  
お手数ですが、正しい型の配列にキャストしてあげてください。  
また、非プリミティブ型(文字列や整数といったもの以外)の配列にキャストする場合、スクリプトの先頭にてその型に対応するパッケージもスクリプトの**先頭**にて[インポート](/AdvancedFunctions/Import/)してあげてください。

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

リスト内の場所を使って配列内の要素にアクセスできます。 最初の番号は 0、そして2番めは1というように番号が振られます。 最初の番号は 0、そして2番めは1というように番号が振られます。

ネストされた配列にアクセスするためには、2度参照する必要があります。

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

ループとは自己反復するための機能です。 ループを用いて、同じ操作を配列内要素全てに行うことができます。 ループを用いて、同じ操作を配列内要素全てに行うことができます。

## Forループ構文

forループ構文の主な使い方は配列の反復処理です。 forループ構文の主な使い方は配列の反復処理です。 反復処理とは、配列内要素全てに操作を行うことです。  
`break`キーワードを使ってループを早期に脱出することができます。

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

whileループは、与えられた条件が`true`と評価される限り操作を繰り返します。  
また、`break`によって脱出できます。

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

推奨されませんが、配列にオブジェクトを追加することができます。  
配列には単一のオブジェクトを追加することができます。2つの配列を追加することはできません。  
配列への追加には、`+`演算子を用います。

```zenscript
import crafttweaker.item.IItemStack;

val iron = <minecraft:iron_ingot>;
var array as IItemStack[] = [iron, iron, iron];

array += iron;
for item in array {
    print(item.displayName);
}
```