# Alchemy Array

## 所属包名

`mods.bloodmagic.AlchemyArray`

## 添加配方

```zenscript
//mods.bloodmagic.AlchemyArray.addRecipe(IItemStack output, IItemStack input, IItemStack catalyst, @Optional string textureLocation);
mods.bloodmagic.AlchemyArray.addRecipe(<minecraft:diamond>, <minecraft:stick>, <minecraft:grass>, "bloodmagic:textures/models/AlchemyArrays/LightSigil.png");
mods.bloodmagic.AlchemyArray.addRecipe(<minecraft:diamond>, <minecraft:stick>, <minecraft:grass>);
// creates an alchemy array recipe with the output of diamond. the first item placed into the array is the stick (the input), followed by the grass (the catalyst)
```

## 删除配方

```zenscript
//mods.bloodmagic.AlchemyArray.removeRecipe(IItemStack input, IItemStack catalyst);
mods.bloodmagic.AlchemyArray.removeRecipe(<minecraft:redstone>, <bloodmagic:slate:3>);
```