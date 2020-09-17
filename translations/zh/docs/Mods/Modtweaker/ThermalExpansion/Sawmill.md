# 锯木厂

## 所属包名

`thermalext.Sawmill`

## 添加配方

```zenscript
mods.thermalext.Sawmill.addRecipe(IItemStack output, IItemStack input, int energy, @Optional IItemStack secondaryOutput, @Optional int secondaryChance);

mods.thermalext.Sawmill.addRecipe(<minecraft:diamond>, <minecraft:stick>, 1500, <minecraft:stone>, 20);
```

## 删除配方

```zenscript
mods.thermallipl.Sawmill.removeRecipe(IItemStack 输入);

mods.thermallipl.Sawmill.removeRecipe(<minecraft:painting>);
```