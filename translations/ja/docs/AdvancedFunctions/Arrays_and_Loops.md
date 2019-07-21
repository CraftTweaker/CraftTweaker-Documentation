# 配列

配列とは同じ種類のものをリスト化したものをいいます。

## 配列の作り方

配列は、次のものを用いて作成します。 ```[``` ```]```.

    //"Hello"と "World"を格納する配列
    val stringArray = ["Hello", "World"] as string[];
    
    //1から3の数値を格納する配列
    val intArray = [1,2,3] as int[];
    

「まって、今までこの括弧を見たことがない」と思いましたか? 前にも見たはずです。 思い出してください。 ```recipes.add(out,[[],[],[]]);```? これはそれぞれ3つまでの要素を含む3つの配列を使用した、クラフティングテーブル用のレシピです。

## 配列へのキャスト

これまでの配列全てに、`as`という演算子がくっついていることに気づいたでしょう。  
どうしてでしょう? それは、ZenScriptは配列を構成する要素の型を検出できないことがよくあるからです。 これが変なエラーログの原因になっていることがあります。  
お手数ですが、正しい型の配列にキャストしてあげてください。  
また、非プリミティブ型(文字列や整数といったもの以外)の配列にキャストする場合、スクリプトの先頭にてその型に対応するパッケージも[インポート](Import/)してあげてください。

    import crafttweaker.item.IItemStack;
    val IArray = [<minecraft:gold_ingot>, <minecraft:iron_ingot>] as IItemStack[];
    

## 配列のネスト

配列の中に配列を入れることができます。

    val stringArray1 = ["Hello","World"] as string[];
    val stringArray2 = ["I","am"] as string[];
    val stringArray3 = ["a","beatuful"] as string[];
    val stringArrayAll = [stringArray1,stringArray2,stringArray3,["Butterfly","!"]] as string[][];
    

## 配列内要素へのアクセス

リスト内の場所を利用して、配列の中の要素にアクセスできます。 最初の番号は 0から始まり、2番めは1、というように続きます。

入れ子になった配列の中へアクセスするには、2回参照する必要があります。

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
    

# ループ

ループとは自分自身を反復するための機能です。 ループを用いて何らかの働きかけを配列内要素全てに行うことができます。

## Forループ構文

forループ構文の主な使い方は配列の反復処理です。 反復処理とは、配列内のすべての要素に処理を行うことです。  
`break`キーワードでループを早く抜けることができます。

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
    

## While ループ

whileループは、与えられた条件が`true`と評価される限り操作を繰り返します。  
また、`break`によって停止することもできます。

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
    

# 配列への追加

あまり推奨できませんが、配列にオブジェクトを追加することができます。  
配列には単一のオブジェクトを追加することができます。2つの配列を追加することはできません。  
配列への追加には、演算子`+`を用います。

```java
import crafttweaker.item.IItemStack;

val iron = <minecraft:iron_ingot>;
var array as IItemStack[] = [iron, iron, iron];

array += iron;
for item in array {
    print(item.displayName);
}
```