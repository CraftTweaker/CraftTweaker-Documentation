# IItemDefinitions を使用してメタアイテムを参照するときに多くの時間を節約します

## 問題

いくつかの特定の色のウールのレシピを削除したいとしましょう。  
白のウールにはメタ0があり、メタ1からメタ15までのすべての色範囲があるため、合計で16個あります。

メタ3から12のウールを削除します。 What do we do?  
We can't just remove all of them (in other words, use `<minecraft:wool:*>`), but we also don't want to write 10 times the same thing.  
While in this example this would totally work, in large scale this becomes pretty annoying!

## 私たちが知るべきこと/知るべきこと

- recipes.remove には [IIngredient](/Vanilla/Variable_Types/IIngredient/) オブジェクトが必要です
- [IItemStack](/Vanilla/Items/IItemStack/) は [IIngredient](/Vanilla/Variable_Types/IIngredient/) として [IItemstack](/Vanilla/Items/IItemStack/) 拡張 [IIngredient](/Vanilla/Variable_Types/IIngredient/) として使用できます。
- [IItemDefinitions](/Vanilla/Items/IItemDefinition/) を使用して [IItemStacks](/Vanilla/Items/IItemStack/) を作成することができます

## 対応

We use [IItemDefinitions](/Vanilla/Items/IItemDefinition/) and an Integer Range and iterate through latter.  
If we can't use an int range we can also use a number array, but that would require you to type in all required numbers.  
You can also use this to Except some items from being used.

```zenscript
val itemDef = <minecraft:wool>.definition;

//does this for <minecraft:wool:3> to <minecraft:wool:12>
for i in 3 to 13{
    recipes.remove(itemDef.makeStack(i));
}


val numArray = [3,4,5,6,7,8,9,10,11,12] as int[];


//<minecraft:wool:3> to <minecraft:wool:12>
for i in numArray{
    itemDef.makeStack(i).addTooltip("Un-Craftable");
}

//<minecraft:wool:3> to <minecraft:wool:12>, but without 5 and 9
for i in 3 .. 13{
    if(i != 5 & i != 9){
        itemDef.makeStack(i).addShiftTooltip("Help me!");
    }
}

```