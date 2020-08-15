# 机械冻结器

这个软件包允许您修改机械臂章的配方。

## 导入相关包

如果您想导入这个包，您可以在这里：

```zenscript
导入 mods.integrateddynamics.MechanicalSqueezer;
```

## 添加配方

```zenscript
/MechanicalSqueezer.addRecipe(IItemStack inputStack, @Optional IItemStack outputStack, @Optional ILiquidStack outputFluid, @Optional(10) int during);
MechanicalSqueezer. ddRecipe(<minecraft:melon>, <minecraft:stick>, <liquid:water> * 100, 10);



// MechanicalSqueezer. ddRecipe(IItemStack inputStack, 
// @Optional IItemStack outputStack1, @Optional float outputStackChance1,
// @Optional IItemStack outputStack2, @opultifloat outputStackChance2,
// @Optional IItemStack outputStack3, @opultifloat outputStackChance3,
// @Optional(10) int during)；

MechanicalSqueezer。 ddRecipe(<minecraft:pumpkin>, 
    <minecraft:pumpkin_seeds>, 0.2,
    <minecraft:iron_nugget>, 0 1,
    <minecraft:cactus>, 0.5,
    <liquid:water> * 100, 20;
```

## 删除配方

```zenscript
/MechanicalSqueezer.removeRecipe(IItemStack inputStack, @Optional IItemStack outputStack, @Optional ILiquidStack outputFluid, @Optional(10) int during);
MechanicalSqueezer。 emoveRecipe(<minecraft:melon>, <minecraft:stick>, <liquid:water> * 100, 10);

//MechanicalSqueezer. emoveRecipe(IItemStack inputStack,
// @Optional IItemStack outputStack1, @opultifloat outputStackChance1,
// @Optional IItemStack outputStack2, @opultifloat outputStackChance2,
// @Optional IItemStack outputStack3, @opultifloat outputStackChance3,
// @Optional(10) int during)；

MechanicalSqueezer。 emoveRecipe(<minecraft:pumpkin>, 
    <minecraft:pumpkin_seeds>, 0.2,
    <minecraft:iron_nugget>, 0 1、
    <minecraft:cactus>、 0.5、
    <liquid:water> * 100、 20



/MechanicalSqueezer。 emoveRecipesWidOutput(@Optional IItemStack outputStack, @Optional ILiquidStack outputFluid);
//TODO

//MechanicalSqueezer. emoveRecipesWiOutput(@Optional IItemStack outputStack1, @opultifloat outputStackChance1,
// @Optional IItemStack outputStack, @opultifloat outputStackChance2,
// @Optional IItemStack outputStack3, @Optional float outputStackChance3,
// @Optional ILiquidStack outputFluid);

MechanicalSqueezer。 表情配方输出(<minecraft:pumpkin_seeds>, 0.2,
    <minecraft:iron_nugget>, 0 1,
    <minecraft:cactus>, 0.5,
    <liquid:water> * 100, 20;
```