# DryingBasin

このパッケージでは、乾燥盆地のレシピを変更できます。

## パッケージのインポート

このパッケージをインポートしたい場合は、次のようにします。

```zenscript
import mods.integrateddynamics.DryingBasin;
```

## レシピを追加中

```zenscript
//DryingBasin.addRecipe(@Optional IItemStack inputStack, @Optional ILiquidStack inputFluid, @Optional IItemStack outputStack, @Optional ILiquidStack outputFluid, @Optional(10) int duration);

DryingBasin.addRecipe(<minecraft:melon>, <liquid:lava> * 100, <minecraft:stick>, <liquid:water> * 100, 10);
```

## レシピを削除

```zenscript
//DryingBasin.removeRecipe(@Optional IItemStack inputStack, @Optional ILiquidStack inputFluid, @Optional IItemStack outputStack, @Optional ILiquidStack outputFluid, @Optional(10) int duration);
DryingBasin.removeRecipe(<minecraft:melon>, <liquid:lava> * 100, <minecraft:stick>, <liquid:water> * 100, 10);


//DryingBasin.removeRecipesWithOutput(@Optional IItemStack outputStack, @Optional ILiquidStack outputFluid);
DryingBasin.removeRecipesWithOutput(<minecraft:leather>, null);
```