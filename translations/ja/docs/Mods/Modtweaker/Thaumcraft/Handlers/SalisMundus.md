# Salis Mundus

このパッケージでは、thaumcraft の salis mundus ハンドラの変換ハンドラを追加できます。  
Thaumcraft の salis mundus で世界のブロックをクリックすると、これらのハンドラーが呼び出されます。

その結果がブロックの場合、ワールドに配置されます。そうでない場合はアイテムとしてドロップされます。

## パッケージをインポート

メソッド呼び出しを短くするには、 [パッケージを](/AdvancedFunctions/Import/) インポートすることができます。

```zenscript
import mods.thaumcraft.SalisMundus;
```

## レシピを追加

You can either specify an [IBlock](/Vanilla/Blocks/IBlock/) or an [IOreDictEntry](/Vanilla/OreDict/IOreDictEntry/).  
If you don't specify a research, this recipe will always be possible, if you do decide to specify a research string, you need to have the research unlocked in order for the conversion to work.

```zenscript
//mods.thaumcraft.SalisMundus.addSingleConversion(IBlock in, IItemStack out, @Optional String research);
SalisMundus.addSingleConversion(<blockstate:minecraft:dirt>.block, <minecraft:bedrock>);

//mods.thaumcraft.SalisMundus.addSingleConversion(IOreDictEntry in, IItemStack out, @Optional String research);
mods.thaumcraft.SalisMundus.addSingleConversion(IOreDictEntry in, IItemStack out, @Optional String research);
SalisMundus.addSingleConversion(<ore:blockIron>, <minecraft:bedrock>);
```

## レシピを削除

You can also remove all recipes that return a matching item.  
This handler checks if the parameter provided matches with the output itemStack, so you could also remove all recipes using the wildcard ingredient `<*>`.

```zenscript
mods.thaumcraft.SalisMundus.removeSingleConversion(IIngredient output);

//登録されたすべてのハンドラを削除します。
mods.thaumcraft.SalisMundus.removeSingleConversion(<*>);

//るつぼのハンドラを削除します。
mods.thaumcraft.SalisMundus.removeSingleConversion(<thaumcraft:crucible>);
```