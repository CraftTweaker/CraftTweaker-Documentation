# 感应炉

## 所属包名

`thermalext.InductionSmelter`

## 添加配方

```zenscript
mods.thermalext.InductionSmelter.addRecipe(IItemStack primaryOutput, IItemStack primaryInput, IItemStack secondaryInput, int energy, @Optional IItemStack secondaryOut, @Opinion secondaryChance);

mods. hermalext.InductionSmelter.addRecipe(<minecraft:diamond>, <minecraft:stick>, <minecraft:iron_ore>, 1500, <minecraft:stone>, 20);
```

## 删除配方

```zenscript
mods.thermalext.InductionSmelter.removeRecipe( IItemStack primaryInput, IItemStack secondaryInput);

mods.thermalabov.InductionSmelter.removeRecipe(<minecraft:bucket>, <minecraft:sand>);
```