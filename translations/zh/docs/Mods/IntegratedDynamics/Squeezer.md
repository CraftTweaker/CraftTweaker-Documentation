# 挤压器

此软件包允许您修改Squeezer配方。

## 导入相关包

如果您想导入这个包，您可以在这里：

```zenscript
导入 mods.integrateddynamics.Squeezer;
```

## 添加配方

```zenscript
//Squeezer.addRecipe(IItemStack inputStack, @Optional IItemStack outputStack, @Optional ILiquidStack outputFluid);
Squeezer.addRecipe(<minecraft:melon>, <minecraft:stick>, <liquid:water> * 100);



//Squeezer. ddRecipe(IItemStack inputStack, 
// @Optional IItemStack outputStack1, @Optional float outputStackChance1,
// @Optional IItemStack outputStack2, @opultifloat outputStackChance2,
// @Optional IItemStack outputStack3, @Optional float outputStackChance3,
// @Optional ILiquidStack outputFluid);


Squeezer。 ddRecipe(<minecraft:pumpkin>, 
    <minecraft:pumpkin_seeds>, 0.2,
    <minecraft:iron_nugget>, 0 1、
    <minecraft:cactus>、 0.5、
    <liquid:water> * 100；
```

## 删除配方

```zenscript
//Squeezer.removeRecipe(IItemStack inputStack, @Optional IItemStack outputStack, @Optional ILiquidStack outputFluid);
//TODO

//Squeezer。 emoveRecipe(IItemStack inputStack,
// @Optional IItemStack outputStack1, @opultifloat outputStackChance1,
// @Optional IItemStack outputStack2, @opultifloat outputStackChance2,
// @Optional IItemStack outputStack3, @Optional float outputStackChance3,
// @Optional ILiquidStack outputFluid);

Squeezer。 emoveRecipe(<minecraft:pumpkin>, 
    <minecraft:pumpkin_seeds>, 0.2,
    <minecraft:iron_nugget>, 0 1、
    <minecraft:cactus>、 0.5、
    <liquid:water> * 100;



/Squeezer emoveRecipesWOutput(@Optional IItemStack outputStack, @Optional ILiquidStack outputFluid);
Squeezer.removeRecipesWidOutput(<minecraft:pumpkin_seeds>, <liquid:water>);

/Squeezer. emoveRecipesWiOutput(@Optional IItemStack outputStack1, @opultifloat outputStackChance1,
// @Optional IItemStack outputStack, @opultifloat outputStackChance2,
// @Optional IItemStack outputStack3, @Optional float outputStackChance3,
// @Optional ILiquidStack outputFluid);

Squeezer。 表情配方输出(<minecraft:pumpkin_seeds>, 0.2,
    <minecraft:iron_nugget>, 0. 1、
    <minecraft:cactus>, 0.5、
    <liquid:water> * 100；
```