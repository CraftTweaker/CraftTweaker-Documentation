# Refinery

精炼厂是一个使用热量将一个输入流体转换为两个或多个输出流体的多方块结果。  该多方块结构包含 2 （包含）至 4 （包含）个精炼厂方块，而可能的输出数量有精炼厂方块的数量限制。

在版本 v0.9.0 以前，任何精炼厂配方的所需最小温度（即加工开始的温度）一直是 373K，即 100℃。  但是，在版本 v0.9.0 及以后，可以在添加配方时指定一个最小温度。

精炼厂将在到达最低温度时开始工作，温度越高，工作速度越快。

注：可以有输入相同的配方，只要输出的个数不同。  这时，产出流体个数最多的配方（在精炼厂方块数量允许的情况下）将被使用。

## 导入

你可以通过`mods.pneumaticcraft.refinery`调用这个包。

## 移除配方

该方法移除其找到的第一个以指定的[IIngredient](/Vanilla/Variable_Types/IIngredient/)作为`输出`的合成配方：

```zenscript
mods.pneumaticcraft.refinery.removeRecipe(IIngredient[] outputs);
```

该方法移除其找到的第一个以指定的[IIngredient](/Vanilla/Variable_Types/IIngredient/)作为`输入`的合成配方：

```zenscript
mods.pneumaticcraft.refinery.removeRecipes(IIngredient input);
```

This function will remove *all* Refinery recipes:

```zenscript
mods.pneumaticcraft.refinery.removeAllRecipes();
```

## 添加

这些方法添加新的精炼厂配方：

```zenscript
// 添加一个最小温度为默认（373K，100℃）的配方
mods.pneumaticcraft.refinery.addRecipe(ILiquidStack input, ILiquidStack[] outputs);

// （需要版本大于 等于 v0.9.0）添加一个具有给定的最小温度的配方
mods.pneumaticcraft.refinery.addRecipe(int minimumTemperature, ILiquidStack input, ILiquidStack[] outputs);


// 例子：下列两个配方都使用水作为输入
// 第一个配方将会在高度为 2 的精炼厂内使用
mods.pneumaticcraft.refinery.addRecipe(<liquid:water> * 10, [<liquid:lava> * 2, <liquid:oil> * 5]);
// 第二个配方将会在高度为 3 或 4 的精炼厂内使用，
// 并且需要最小温度为 473K，200℃
mods.pneumaticcraft.refinery.addRecipe(473, <liquid:water> * 10, [<liquid:lava> * 2, <liquid:oil> * 5, <liquid:lpg> * 2]);
```
