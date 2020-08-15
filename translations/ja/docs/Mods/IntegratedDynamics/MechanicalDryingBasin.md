# MechanicalDryingBasin

このパッケージでは、メカニカルドライビング盆地のレシピを変更できます。

## パッケージのインポート

このパッケージをインポートしたい場合は、次のようにします。

```zenscript
import mods.integrateddynamics.MechanicalDryingBasin;
```

## レシピを追加中

```zenscript
//MechanicalDryingBasin.addRecipe(@Optional IItemStack inputStack, @Optional ILiquidStack inputFluid, @Optional IItemStack outputStack, @Optional ILiquidStack outputFluid, @Optional(10) int duration);

MechanicalDryingBasin.addRecipe(<minecraft:melon>, <liquid:lava> * 100, <minecraft:stick>, <liquid:water> * 100, 10);
```

## レシピを削除

```zenscript
//MechanicalDryingBasin.removeRecipe(@Optional IItemStack inputStack, @Optional ILiquidStack inputFluid, @Optional IItemStack outputStack, @Optional ILiquidStack outputFluid, @Optional(10) int duration);
MechanicalDryingBasin.removeRecipe(<minecraft:melon>, <liquid:lava> * 100, <minecraft:stick>, <liquid:water> * 100, 10);


//MechanicalDryingBasin.removeRecipesWithOutput(@Optional IItemStack outputStack, @Optional ILiquidStack outputFluid);
MechanicalDryingBasin.removeRecipesWithOutput(<minecraft:leather>, null);
```