# 木工师

ModTinflow允许您添加或移除林业木工配方

## 导入包

您可以使用 `mods.forestry.Carpenter` 调用软件包。

## 删除配方

```zenscript
//mods.forestry.Carpenter.removeRecipe(IItemStack output, @Optional ILiquidStack fluidInput);
mods.forestry.Carpenter.removeRecipe(<forestry:portable_alyzer>);
mods.forestry.Carpenter.removeRecipe(<forestry:wood_pulp>, <liquid:water>);
```

## 配方添加

```zenscript
//mods.forestry.Carpenter.addRecipe(IItemStack output, IIngredient[] components, int packingTime, @Optional ILiquidStack fluidInput, @Optional IItemStack box)
mods.forestry.Carpenter.addRecipe(<minecraft:redstone> * 9, [<minecraft:redstone_block>], 30);
mods.forestry.Carpenter. ddRecipe(<minecraft:gold_ingot>, [[<minecraft:gold_block>]], 30, <liquid:for.honey> * 100);
mods.forestry.Carpenter. ddRecipe(<minecraft:redstone_block>, [[<minecraft:redstone>,<minecraft:redstone>,<minecraft:redstone>],[<minecraft:redstone>,<minecraft:redstone>,<minecraft:redstone>], [<minecraft:redstone>,<minecraft:redstone>,<minecraft:redstone>], 60, <liquid:water> * 200, <minecraft:stone>;
```