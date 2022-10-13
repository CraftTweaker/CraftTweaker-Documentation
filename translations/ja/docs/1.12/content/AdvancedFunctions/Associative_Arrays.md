# 連想配列

連想配列(しばしばMapやDictionaryとも称される)とは、複数の要素を格納できるという点において、通常の[配列](/AdvancedFunctions/Arrays_and_Loops/)と似ています。 [配列](/AdvancedFunctions/Arrays_and_Loops/)と異なる点は、好みの型をインデックス、もしくはキー(Mapではこう呼ぶ)に使うことができるところです。 [配列](/AdvancedFunctions/Arrays_and_Loops/)と異なる点は、好みの型をインデックス、もしくはキー(Mapではこう呼ぶ)に使うことができるところです。

## 連想配列の作り方

中括弧`{}`とコロン`:`を使用して、連想配列を宣言できます。
```zenscript
val myAssocArray = {
    dirt : <minecraft:dirt>,
    gold : <minecraft:gold_ingot>
} as IItemStack[string];
```

では、これをばらして見てみましょう。

- `val myAssocArray =` 普通の変数宣言
- `{` これが、連想配列の宣言です、どうぞ
- `dirt : <minecraft:dirt>` `<minecraft:dirt>`を`dirt`にマッピングします
- `,` そして、次に続きます
- `gold : <minecraft:gold_ingot>` `<minecraft:gold_ingot>`を`gold`にマッピングします
- `}` これで連想配列の宣言を終了します、どうぞ
- `as IItemStack[string];`インデックスに文字列を使用し、要素にIItemStackを格納する連想配列です


さて、使用する際には、何を考えなければならないでしょう。

- Zenscriptで使用可能な全ての型を、キー及び要素にできます。
- テキストだと明示されたものは文字列として解釈されるため、連想配列の宣言(`{}`を使用する)でのキーに変数を設定することはできません。


## 連想配列の要素へのアクセス

You refer to items inside an Associative Array the same way you refer to items inside a normal [Array](/AdvancedFunctions/Arrays_and_Loops/):  
`Array[index]`  
Only difference is this time, you don't necessarily need to use an Integer as index, but whatever type you declared your Array to be!
```zenscript

val dirt = <minecraft:dirt>;
val assocArray = {
    <minecraft:dirt> : "This is me"
} as string[IItemStack];

//array[index]
print(assocArray[<minecraft:dirt>]);

//You can also use variables here, as long as the variable is of the correct type
print(assocArray[dirt]);
```


There is one special case, that is when you use strings as indeces:  
In this case you can also use the memberGetter like this:
```zenscript
val assocWithStrings = {
    //必要であれば「""」が使えます
    "one" : "1",

    //こうする必要はありません
    two : "2"
} as string[string];

//memberGetterを使用できます
print(assocWithStrings.one);

//index Getterも使用できます
print(assocWithStrings["two"]);
```

## 連想配列の要素への操作

As in Arrays, you can manipulate items inside an Associative Array using `array[index] = newValue`.  
There is one major differenc though:  
While Arrays have a fixed size, maps don't. すなわち、未使用のインデックスに要素を設定することによって、いつでもエントリを追加できます。

```zenscript
val changingArray = {
    <minecraft:dirt> : "this is me",
    <minecraft:gold_ingot> : "and I hate it"
} as string[IItemStack];

val gg = <minecraft:gold>;

//gold_ingotの値を変更します
changingArray[gg] = "and I love it";

//新しいエントリを追加します
changingArray[<minecraft:grass>] = "Power!";
```

## 連想配列のキーおよびエントリセットの取得

The KeySet is an array containing all the map's keys.  
The valueSet is an array containing all the map's values.  
The entrySet is an array containing all the map's entries (see below).

```zenscript
myAssocArray.keySet   //keySet
myAssocArray.keys     //keySet
myAssocArray.values   //valueSet
myAssocArray.valueSet //valueSet
myAssocArray.entrySet //entrySet
```


## 連想配列の反復処理

連想配列では次の2つのイテレータで反復処理が可能です。

- キーイテレータ: キーを反復し、1つの変数を使用
- キー・値イテレータ: キーと値両方を反復し、2つの変数を使用

では、反復処理されるクラフトレシピを保持する連想配列を作ってみましょう。

- キーはクラフト成果で、[IItemStack](/Vanilla/Items/IItemStack/)とする
- 値はクラフト材料で、[IIngredient](/Vanilla/Variable_Types/IIngredient/)とする
- 次のような構文のキーイテレータを使用: `for key in assocArray {doSth;}`
- 次のような構文のキー・値イテレータを使用: `for key, value in assocArray {doSth;}`


```zenscript
import crafttweaker.item.IItemStack;
import crafttweaker.item.IIngredient;

val dirt = <minecraft:dirt>;
val recipeMapShaped = {
    <minecraft:grass> : [[dirt, dirt, dirt],[dirt, dirt, dirt],[dirt, dirt, dirt]],
    <minecraft:gold_ingot> : [[dirt, dirt, dirt],[dirt, <minecraft:gold_ingot>, dirt],[dirt, dirt, dirt]]
} as IIngredient[][][IItemStack];

recipeMapShaped[dirt] = [[dirt, dirt, dirt],[dirt, null, dirt],[dirt, dirt, dirt]];

//キーはgrass, goldIngot, dirt
for key in recipeMapShaped {
    recipes.addShaped(key, recipeMapShaped[key]);
}


//キーはgrass, goldIngot, dirt、値はそれらのレシピ
for key, value in recipeMapShaped {
    recipes.addShaped(key, value);
}
```

# ZenType Entry
A map Entry consists of a key and a value.  
Currently the only way to get such an object is via a map's entrySet method.

getterとして`key`と`value`が用意されています。

```zenscript
//マップを既存のマップ/連想配列への参照に置き換えます
val myEntry = map.entrySet[0];


myEntry.key;    //エントリのキーを返します
myEntry.value;  //エントリの値を返します
myEntry.value;  //エントリの値を返します
```
