# 加农器

## 所属包名

`导入mods.ic2.Canner；`

## 方法

- **[IItemStack](/Vanilla/Items/IItemStack/) 输出** 产品
- **[Ingredient](/Vanilla/Variable_Types/IIngredient/) container** 要填充的“成分”
- **[Ingredient](/Vanilla/Variable_Types/IIngredient/) filler** 填充到容器中的成分</strong>

## 添加瓶子

```zenscript
mods.ic2.Canner.addBotleRecipe(IItemStack output, IIngredient container, IIngredient filler);

mods.ic2.Canner.addBotleRecipe(<minecraft:water_bucket>, <minecraft:bucket>, <minecraft:ice>);
```

## 添加新配方

```zenscript
mods.ic2.Canner.addEnrichRecipe(ILiquidStack 输出, ILiquidStack 输入, IIngredient additive);

mods.ic2.Canner.addEnrichRecipe(<liquid:lava> * 1000, <liquid:water> * 1000, <minecraft:redstone>);
```