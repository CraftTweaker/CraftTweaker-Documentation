# Sawmill

## 所属包
`mods.thermalexpansion.Sawmill`

## 添加

```zenscript
mods.thermalexpansion.Sawmill.addRecipe(IItemStack output, IItemStack input, int energy, @Optional IItemStack secondaryOutput, @Optional int secondaryChance);

mods.thermalexpansion.Sawmill.addRecipe(<minecraft:diamond>, <minecraft:stick>, 1500, <minecraft:stone>, 20);
```

## 移除

```zenscript
mods.thermalexpansion.Sawmill.removeRecipe(IItemStack input);

mods.thermalexpansion.Sawmill.removeRecipe(<minecraft:painting>);
```