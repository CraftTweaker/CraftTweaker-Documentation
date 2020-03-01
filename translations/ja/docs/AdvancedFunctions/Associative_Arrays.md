# 連想配列

連想配列(しばしばMapやDictionaryとも称される)とは、複数の要素を格納できるという点において、通常の[配列](Arrays_and_Loops/)と似ています。 [配列](Arrays_and_Loops/)と異なる点は、好みの型をインデックス、もしくはキー(Mapではこう呼ぶ)に使うことができるところです。

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

通常の[配列](Arrays_and_Loops/)の要素へアクセスするのと同じ方法で、連想配列の要素へとアクセスできます。  
`Array[index]`  
違いは、インデックスには整数以外も使用できますが、配列を宣言する型は何でも可能です。

```zenscript
<br />val dirt = <minecraft:dirt>;
val assocArray = {
    <minecraft:dirt> : "This is me"
} as string[IItemStack];

//array[index]
print(assocArray[<minecraft:dirt>]);

//変数の型が正しいときに限り、ここで変数を用いることもできます
print(assocArray[dirt]);
```

特殊なケースとしては、文字列をインデックスに使用する場合です。  
この場合は、次のようにmemberGetterを使用することができます。

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

配列と同じく、`array[index] = newValue`を通して連想配列内の要素を操作することができます。  
ただし、1つ大きな違いがあります。  
配列は大きさが固定されていますが、連想配列はそうではありません。 すなわち、未使用のインデックスに要素を設定することによって、いつでもエントリを追加できます。

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

連想配列のすべてのキーを配列に格納したものがkeySet、  
連想配列のすべての値を配列に格納したものがvalueSet、  
連想配列のすべてのエントリを配列に格納したものがentrySetです(以下を参照ください)。

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

連想配列のエントリはキーと値によって成り立っています。  
現状このオブジェクトは連想配列のentrySetメソッドを用いることによってのみ取得できます。

getterとして`key`と`value`が用意されています。

```zenscript
//マップを既存のマップ/連想配列への参照に置き換えます
val myEntry = map.entrySet[0];


myEntry.key;    //エントリのキーを返します
myEntry.value;  //エントリの値を返します
```