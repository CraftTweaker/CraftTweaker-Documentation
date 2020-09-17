# Alchemy Array

## パッケージ

`mods.bloodmagic.AlchemyArray`

## 加算

```zenscript
//mods.bloodmagic.AlchemyArray.addRecipe(IItemStack output, IItemStack input, IItemStack catalyst, @Optional string textureLocation);
mods.bloodmagic.AlchemyArray.addRecipe(<minecraft:diamond>, <minecraft:stick>, <minecraft:grass>, "bloodmagic:textures/models/AlchemyArrays/LightSigil.png");
mods.bloodmagic.AlchemyArray.addRecipe(<minecraft:diamond>, <minecraft:stick>, <minecraft:grass>);
// creates an alchemy array recipe with the output of diamond. 配列に配置された最初の項目はスティック(入力)、次に草(触媒)
```

## 削除

```zenscript
//mods.bloodmagic.Alchemy Array.removeRecipe(IItemStack input, IItemStack 触媒);
mods.bloodmagic.AlchemyArray.removeRecipe(<minecraft:redstone>, <bloodmagic:slate:3>);
```