# 脉冲器

## 所属包名

`thermalext.Pulverizer`

## 添加配方

```zenscript
mods.thermalext.Pulverizer.addRecipe(IItemStack output, IItemStack input, int energy, @Optional IItemStack secondaryOutput, @Optional int secondary Chance);

mods.thermalext.Pulverizer.addRecipe(<minecraft:diamond>, <minecraft:stick>, 1500, <minecraft:stone>, 20);
```

## 删除配方

```zenscript
mods.thermalext.Pulverizer.removeRecipe(StemStack 输入)；

mods.thermalabus.Pulverizer.removeRecipe(<thermalfoundation:material:136>)；
```