# スクイーザー

このパッケージでは、スクイーザーのレシピを変更できます。

## パッケージのインポート

このパッケージをインポートしたい場合は、次のようにします。

```zenscript
import mods.integrateddynamics.Sceezer;
```

## レシピを追加中

```zenscript
//Squeezer.addRecipe(IItemStack inputStack, @Optional IItemStack outputStack, @Optional ILiquidStack outputFluid);
Squeezer.addRecipe(<minecraft:melon>, <minecraft:stick>, <liquid:water> * 100);



//Squeezer.addRecipe(IItemStack inputStack, 
//  @Optional IItemStack outputStack1, @Optional float outputStackChance1,
//  @Optional IItemStack outputStack2, @Optional float outputStackChance2,
//  @Optional IItemStack outputStack3, @Optional float outputStackChance3,
//  @Optional ILiquidStack outputFluid);


Squeezer.addRecipe(<minecraft:pumpkin>, 
    <minecraft:pumpkin_seeds>, 0.2,
    <minecraft:iron_nugget>, 0.01,
    <minecraft:cactus>, 0.5,
    <liquid:water> * 100);
```

## レシピを削除

```zenscript
//Squeezer.removeRecipe(IItemStack inputStack, @Optional IItemStack outputStack, @Optional ILiquidStack outputFluid);
//TODO

//Squeezer.removeRecipe(IItemStack inputStack,
//  @Optional IItemStack outputStack1, @Optional float outputStackChance1,
//  @Optional IItemStack outputStack2, @Optional float outputStackChance2,
//  @Optional IItemStack outputStack3, @Optional float outputStackChance3,
//  @Optional ILiquidStack outputFluid);

Squeezer.removeRecipe(<minecraft:pumpkin>, 
    <minecraft:pumpkin_seeds>, 0.2,
    <minecraft:iron_nugget>, 0.01,
    <minecraft:cactus>, 0.5,
    <liquid:water> * 100);



//Squeezer.removeRecipesWithOutput(@Optional IItemStack outputStack, @Optional ILiquidStack outputFluid);
Squeezer.removeRecipesWithOutput(<minecraft:pumpkin_seeds>, <liquid:water>);

//Squeezer.removeRecipesWithOutput(@Optional IItemStack outputStack1, @Optional float outputStackChance1,
//  @Optional IItemStack outputStack2, @Optional float outputStackChance2,
//  @Optional IItemStack outputStack3, @Optional float outputStackChance3,
//  @Optional ILiquidStack outputFluid);

Squeezer.removeRecipesWithOutput(<minecraft:pumpkin_seeds>, 0.2,
    <minecraft:iron_nugget>, 0.01,
    <minecraft:cactus>, 0.5,
    <liquid:water> * 100);
```