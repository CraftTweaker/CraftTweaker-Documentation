# 精炼厂

精炼厂是一个使用热量将一个输入流体转换为两个或多个输出流体的多方块结果。 该多方块结构包含 2 （包含）至 4 （包含）个精炼厂方块，而可能的输出数量有精炼厂方块的数量限制。

在版本 v0.9.0 以前，任何精炼厂配方的所需最小温度（即加工开始的温度）一直是 373K，即 100℃。 但是，在版本 v0.9.0 及以后，可以在添加配方时指定一个最小温度。

精炼厂将在到达最低温度时开始工作，温度越高，工作速度越快。

注：可以有输入相同的配方，只要输出的个数不同。 In this case, the recipe producing the most possible outputs (given the number of refinery blocks in the multiblock) will be used.

## 导入

You can call the Refinery package using `mods.pneumaticcraft.refinery`.

## 移除配方

This function removes the first recipe it finds which matches all of the given [IIngredient](/Vanilla/Variable_Types/IIngredient/) `outputs`:

```zenscript
mods.pneumaticcraft.refinery.removeRecipe(IIngredient[] outputs);
```

This function removes the first recipe it finds which matches the given [IIngredient](/Vanilla/Variable_Types/IIngredient/) `input`:

```zenscript
mods.pneumaticcraft.refinery.removeRecipes(IIngredient input);
```

This function will remove *all* Refinery recipes:

```zenscript
mods.pneumaticcraft.refinery.removeAllRecipes();
```

## Adding

These functions add a new recipe to the Refinery:

```zenscript
// Add a recipe with the default minimum temperature of 373K (100°C)
mods.pneumaticcraft.refinery.addRecipe(ILiquidStack input, ILiquidStack[] outputs);

// (v0.9.0+ required) Add a recipe with a given minimum temperature
mods.pneumaticcraft.refinery.addRecipe(int minimumTemperature, ILiquidStack input, ILiquidStack[] outputs);


// Example: both recipes use water as input
// First recipe will be used in a 2-block refinery
mods.pneumaticcraft.refinery.addRecipe(<liquid:water> * 10, [<liquid:lava> * 2, <liquid:oil> * 5]);
// Second recipe will be used in a 3- or 4-block refinery,
// and also requires a minimum temperature of 473K, or 200°C
mods.pneumaticcraft.refinery.addRecipe(473, <liquid:water> * 10, [<liquid:lava> * 2, <liquid:oil> * 5, <liquid:lpg> * 2]);
```