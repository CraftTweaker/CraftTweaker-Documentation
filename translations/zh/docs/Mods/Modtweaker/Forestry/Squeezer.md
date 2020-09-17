# 挤压器

ModTinflow允许您添加或移除林业挤压器配方

## 导入包

您可以使用 `mods.forestry.Squeezer` 来调用软件包。

## 删除配方

请注意，您不能移除填充液体容器或排流液体容器的配方，如森林罐！

```zenscript
//mods.forestry.Squeezer.removeRecipe(ILiquidStack 液体, @Optional IIngredient[……]成分);
mods.forestry.Squeezer.removeRecipe(<liquid:juice>);
mods.forestry.Squeezer.removeRecipe(<liquid:seed.oil>, [<minecraft:wheat_seeds>]);
```

## 配方添加

```zenscript
//mods.forestry.Squeezer.addRecipe(ILiquidStack fluidOutput, IItemStack[…]成分, int timePerItem,@Optional WeightedItemStack itemOutput);
/mods. orestry.Squeezer.addRecipe(<liquid:lava>, [<minecraft:redstone>], 120);
mods.forestry.Squeezer.addRecipe(<liquid:lava>, [<minecraft:obsidian>], 120, <minecraft:redstone> % 20);
```

| 参数          | 类型                                             | 描述           |
| ----------- | ---------------------------------------------- | ------------ |
| fluidOutput | [ILiquidStack](/Vanilla/Liquids/ILiquidStack/) | 矩形的输出        |
| 成分：         | [IItemStack](/Vanilla/Items/IItemStack/)[]     | 矩阵的项目输入(s)   |
| timePerItem | 整数                                             | 有机项目上的输入流量需要 |
| itemOutput  | [重量物品](/Vanilla/Items/WeightedItemStack/)      | 输出倍数         |