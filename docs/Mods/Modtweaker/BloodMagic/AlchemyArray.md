# 炼金矩阵

## 相关包
`mods.bloodmagic.AlchemyArray`

## 添加

```
//mods.bloodmagic.AlchemyArray.addRecipe(IItemStack input, IItemStack catalyst, IItemStack output, @Optional string textureLocation);
//input 输入
//catalyst 催化剂
//output 输出
//texturelocation 材质地址（可选）
mods.bloodmagic.AlchemyArray.addRecipe(<minecraft:stick>, <minecraft:grass>, <minecraft:diamond>, "bloodmagic:textures/models/AlchemyArrays/LightSigil.png");
mods.bloodmagic.AlchemyArray.addRecipe(<minecraft:stick>, <minecraft:grass>, <minecraft:diamond>);
```

## 移除

```
//mods.bloodmagic.AlchemyArray.removeRecipe(IItemStack input, IItemStack catalyst);
//input 输入
//catalyst 催化剂
mods.bloodmagic.AlchemyArray.removeRecipe(<minecraft:redstone>, <bloodmagic:slate:3>);
```
