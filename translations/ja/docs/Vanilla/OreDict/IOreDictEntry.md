# IOreDictEntry

When the [IOreDict](/Vanilla/OreDict/IOreDict/) is the lexicon, the IOreDictEntries are the lexicon's entries.  
They consist of a name (OreDictionary name) and an explanation (all matching items).

## パッケージのインポート

It might be required for you to import the package if you encounter any issues (like casting an [Array](/AdvancedFunctions/Arrays_and_Loops/)), so better be safe than sorry and add the import.  
`import crafttweaker.oredict.IOreDictEntry;`

## そのようなオブジェクトを取得しています。

IOreDictEntry オブジェクトを取得するには複数の方法があります: まだ存在しないoreDictを参照すると、作成されます。

- [IOreDict](/Vanilla/OreDict/IOreDict/) クラスを使用する。
- [鉱石ブラケットハンドラ](/Vanilla/Brackets/Bracket_Ore/)を使用する。
- [IItemDefinitionの `は` ゲッター](/Vanilla/Items/IItemDefinition/)を使用します。

## ZenGetters

これらのゲッターを使用して、オレディクの情報を取得できます:

| 名前        | 説明                    | 戻り値の種類                                   |
| --------- | --------------------- | ---------------------------------------- |
| 名前        | オレディクトの名前を返します        | 文字列                                      |
| 空         | oreDict が空の場合に返します。   | bool                                     |
| firstItem | オレディクトの項目の最初の項目を返します。 | [IItemStack](/Vanilla/Items/IItemStack/) |

## ZenMethods

IOreDictEntry オブジェクトでこれらのメソッドを使用できます。

### アイテムの追加/削除

```zenscript
val oreDictEnt = <ore:ingotIron>;

//oreDictEnt.add(IItemStack... item_items);
oreDictEnt.add(<minecraft:grass>);
oreDictEnt.add(<minecraft:iron_ore>, <minecraft:dirt>);

//oreDictEnt.addItems(IItemStack[] items);
oreDictEnt.addItems([<minecraft:redstone>, <minecraft:gold_ore>]);

//oreDictEnt.addAll(IOreDictEntry otherEntry);
oreDictEnt.addAll(<ore:ingotGold>);



//oreDictEnt.remove(IItemStack... item_items);
oreDictEnt.remove(<minecraft:grass>);
oreDictEnt.remove(<minecraft:iron_ore>, <minecraft:dirt>);

//oreDictEnt.removeItems(IItemStack[] items);
oreDictEnt.removeItems([<minecraft:redstone>, <minecraft:gold_ore>]);
```

### IOreDictEntry に項目が含まれているかどうかを確認します。

IOreDictEntry に `の` または `に` キーワードがあるかを確認できます:

```zenscript
val oreDictEnt = <ore:ingotIron>;

//While using in is possible
if(oreDictEnt in <minecraft:iron_ingot>){
    print("Iron is in the oreDict!");
}

//many prefer using has as it might make more sense grammar-wise
if(oreDictEnt has <minecraft:iron_ingot>){
    print("Iron still is in the oreDict!");
}
```

### IOreDictEntry をミラーする

IOreDictEntry をミラーリングすることは、他の oreDictEntry 内のすべての項目が oreDictEntry 内の項目に置き換えられることを意味します。

```zenscript
//make iron and copper equivalent
val iron = <ore:ingotIron>;
val copper = <ore:ingotCopper>;

//adds all entries from iron to copper so that Copper contains both, the iron and copper oreDic entries
iron.addAll(copper); 


//mirrors copper to iron, so all items in iron will be replaced by all the ones in copper.
//この場合は、すべての鉄と銅の oreDictEntries
copper.mirror(iron);
```

## IIngredient実装

IOreDictEntry extends [IIngredient](/Vanilla/Variable_Types/IIngredient/). これは、 [IIngredient](/Vanilla/Variable_Types/IIngredient/) で利用可能なすべてのメソッドが、IOreDictEntries でも利用できることを意味します。 IIngredient配列(レシピメソッドの作成時など)にIOreDictEntryを入れることもできます。

### oreDictEntryのアイテムを繰り返しています

```zenscript
val iron = <ore:ingotIron>;

for item in iron.items{
    recipe.remove(item);
}
```