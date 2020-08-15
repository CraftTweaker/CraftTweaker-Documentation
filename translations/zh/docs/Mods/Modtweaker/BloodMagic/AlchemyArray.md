# 炼金术阵列

## 所属包名

`AlchemyArray`

## 添加配方

```zenscript
//mods.blemmagic.AlchemyArray.addRecipe(IItemStack output, IItemStack input, IItemStack catultureLocation);
mods.blemmagic.AlchemyArray ddRecipe(<minecraft:diamond>, <minecraft:stick>, <minecraft:grass>, "blemmagic:textures/models/AlchemyArrays/LightSigil.png");
mods.blemagic. lchemyArray.addRecipe(<minecraft:diamond>, <minecraft:stick>, <minecraft:grass>);
// 创建一个带有钻石输出的炼金机阵列配方。 放入数组的第一个项目是棍子(输入)，然后是草(催化剂)
```

## 删除配方

```zenscript
//mods.blemmagic.AlchemyArray.removeRecipe(IItemStack input, IItemStack catalyst);
mods.blemmagic.AlchemyArray.removeRecipe(<minecraft:redstone>, <bloodmagic:slate:3>);
```