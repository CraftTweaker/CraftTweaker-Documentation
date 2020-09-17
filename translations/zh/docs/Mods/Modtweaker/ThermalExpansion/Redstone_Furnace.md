# 红石炉子

## 所属包名

`thermalext.RedstoneFurnace`

## 添加配方

```zenscript
//mods.thermalext.RedstoneFurnace.addRecipe(IItemStack output, IItemStack input, int energy);
mods.thermalext.RedstoneFurnace.addRecipe(<minecraft:gold_ingot>, <minecraft:iron_ingot>, 3600);
```

## 删除配方

```zenscript
//mods.thermalext. RedstoneFurnace.removeRecipe(IItemStack input);
mods.thermalext.RedstoneFurnace.removeRecipe(<minecraft:gold_ore>);
```

## Pyrorotic 加成

***请注意，能量乘以 `1.5`。 如果您指定 `2000` 能量，该配方实际上将花费 `3000` RF。 同样，如果您指定 `1500`，它将花费 `2250` RF。***

以示例配方将木炭转化为煤炭，在这一过程中生产250毫巴的浮油。

```zenscript
//mods.thermalproplus.RedstoneFurnace.addPyroroysisRecipe(StemStack output, IItemStack input, int energy, int creosote);
mods.thermalextuseFurnace.addPyrolysisRecipe(<thermalfoundation:material:802>, <minecraft:coal:1>, <minecraft:coal:1> , 2000, 250);
```

## Pyrorotic 加权移除

移除配方将煤转化为煤炭。

```zenscript
//mods.thermalreplos.RedstoneFurnace.removePyrolysisRecipe(IItemStack 输入)；
mods.thermalexplos.RedstoneFurnace.removePyrolysisRecipe(<minecraft:coal>)；
```