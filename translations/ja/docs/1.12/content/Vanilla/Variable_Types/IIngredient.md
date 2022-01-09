# IIngredient

An IIngredient is an ingredient for recipes.  
This could be [an item](/Vanilla/Items/IItemStack/), [an ore dictionary entry](/Vanilla/OreDict/IOreDictEntry/), [a liquid](/Vanilla/Liquids/ILiquidStack/) and much more.

## パッケージのインポート
It might be required for you to import the package if you encounter any issues (like casting an [Array](/AdvancedFunctions/Arrays_and_Loops/)), so better be safe than sorry and add the import.  
`import crafttweaker.item.IIngredient;`

## IIngredientパッケージをインポートする

Usually, you won't need this, but in some cases recipes won't work until you [import](/AdvancedFunctions/Import/) the IIngredient package.  
You can do this using the following import:
```zenscript
import crafttweaker.item.IIngredient;
```

## 関数
では、これで何が出来るのでしょうか。

### コマンド文字列
The command string is how you would call this item in ZS.  
This can be a bracket handler or something similar.
```zenscript
val item = <minecraft:iron_ingot>;

//prints "<minecraft:iron_ingot>"
print(item.commandString);
```

### マーク

IIngredientをマークして、後で[crafting functions](/Vanilla/Recipes/Crafting/Recipe_Functions/)において使用できるようにできます。 以前に適応されたMarkを取得することもできます。

```zenscript
//Marks the pick with the String Picky
//item.marked(name) <-- Name is a string!
val markedPick = <minecraft:diamond_pickaxe>.marked("Picky");

//prints "Picky"
print(markedPick.mark);
```

### Amount

If you want to use more than one of a given item, you can set an amount to an IIngredient.  
This is as easy as multiplying the IIngredient with an Integer.  
Retrieveing the amount is also possible.
```zenscript
val multipleApples = <minecraft:apple> * 3;

//prints 3
print(multipleApples.amount);
```

### IIgredientのユニオン化
時折、IIngredientのXとYの両方が使えるレシピを作りたいと思ったことはありませんか? そのことが、IIngredientにORメソッドが用意されている理由です。
```zenscript
val item1 = <minecraft:apple>;
val item2 = <minecraft:carrot>;

val either = item1 | item2;
val either2 = item1.or(item2);
```


### 取得可能なアイテム・液体の取得

Sometimes an IIngredient represents more than one item, for example if you are using an [OreDictEntry](/Vanilla/OreDict/IOreDictEntry/) or if you OR-ed two Ingredients.  
You can get all possible items for this IIngredient as a List<[IItemStack](/Vanilla/Items/IItemStack/)> List using the first function.  
The second function does the same as the first function but returns a [IItemStack](/Vanilla/Items/IItemStack/)[] instead of a list. 3番めに提示された液体に関する関数にも同じことが言えますが、これは[ILiquidStack](/Vanilla/Liquids/ILiquidStack/)のリストを返します。


```zenscript
//Returns an IItemStack List
//possible items: All iron ingots and the gold ingot from MC
val itemsIngredient = <ore:ingotIron> | <minecraft:gold_ingot>;


//Returns an ILiquidStack List|
//possible liquids: Lava and Water
val liquidsIngredient = <liquid:lava> | <liquid:water>;


for item in itemsIngredient.items{
    //Prints each possible item's Display name
    print(item.displayName);
}

for item in itemsIngredient.itemArray{
    //Prints each possible item's Display name
    print(item.displayName);
}

for liquid in liquidsIngredient.liquids{
    //Prints each possible liquid's Display name
    print(liquid.displayName);
}

for liquid in <minecraft:water_bucket>.liquids {
    //Prints the contained liquid, i.e. water.
    //May not work for every item, though.
    print(liquid.displayName);
}
```

### クラフト時のIIngredientの変換
Sometimes you want an item not to be consumed upon crafting but instead receive damaged or give back a completely different item.  
This is what item Transformers are there for.

```zenscript

val item = <minecraft:apple>;

//Item won't be consumed and will stay in the grid
transformedItem = item.reuse();

//Item won't be consumed and the whole stack will be given back to you (does /give).
transformedItem = item.giveBack();

//item will be consumed but will give the specified stack to you (the crafting slot will be cleared!).
transformedItem = item.giveBack(<minecraft:potato>);

//item will be replaced with the specified item, which will instead go to the crafting slot
transformedItem = item.transformReplace(<minecraft:potato>);

//damages the item by 1
transformedItem = item.transformDamage();

//damages the item by the given value
transformedItem = item.transformDamage(3);

//item will be consumed, no matter what.
transformedItem = item.noReturn();

//Causes multiple items to be consumed.
transformedItem = item.transformConsume(3);
```

### 素材の状態設定
あなたは時折素材に指定したタグがあったり、ダメージ値が設定されている(いない)場合にのみ動作するようにしたいと思うでしょう。 こういった条件は、次の構文を用いて素材に追加することができます。

```zenscript
val item = <minecraft:apple>;

//最低1以上のダメージ値を有する素材にのみ有効
var conditionedItem = item.onlyDamaged();

//指定した値以上のダメージ値を有する素材にのみ有効
conditionedItem = item.onlyDamageAtLeast(10);

//指定した値以下のダメージ値を有する素材にのみ有効
conditionedItem = item.onlyDamageAtMost(100);

//それぞれ最初の値 ≦ x ≦ 2番めの値となるダメージ値を有する素材のみ有効
conditionedItem = item.onlyDamageBetween(10,100);

//指定したタグを有する素材にのみ有効 指定したものより多いタグ、別のタグは無視してチェックされます
//JEIのレシピ画面にタグを表示させたい場合、"withTag(tag)"を使用してタグを追加する必要があります。
conditionedItem = item.onlyWithTag({display: {Name: "Tomato"}});

//指定したタグを有する素材にのみ有効 指定したものより多いタグ、別のタグは無視してチェックされます
//注意: アイテムを表すものではうまくいきますが、それ以外で確実に動くわけではありません JEIがレシピ上にタグを表示することが、これを用いる上での長所です
conditionedItem = item.withTag({display: {Name: "Tomato"}});

//指定した量の素材のみ有効 主にTransformerと組み合わせて使用されます
//注意: これを追加するだけでは、依然として1回のクラフト時つき1つのアイテムしか消費されません
conditionedItem = item.onlyStack(32);
```

### Matching
IItemStackがIIngredientと一致するかどうか確認したい場合、matchメソッドを用いて判別できます。 これはbooleanを返します。 IIngredientが液体を表す場合は、アイテムがその液体に適した容器なのかを確認します。

```zenscript
print(<ore:ingotIron>.matches(<minecraft:iron_ingot>));
print(<ore:ingotIron>.matchesExact(<minecraft:iron_ingot>));
```
You can also match two IIngredient Objects, in which case you'd need to use the `in` operator:

```zenscript
val ingots = <minecraft:iron_ingot> | <minecraft:gold_ingot>;
val oreIngot = <ore:ingotIron>;
val ingotGold = <minecraft:gold_ingot>;

//ingotsの中に<minecraft:gold_ingot>が含まれるためtrue
ingots has ingotGold;

//<minecraft:iron_ingot>は<ore:ingotGold>では見つからないためfalse
oreIngot has ingots;
```
