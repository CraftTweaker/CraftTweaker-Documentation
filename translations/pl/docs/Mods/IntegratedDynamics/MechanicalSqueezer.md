# MechanicalSqueezer

Ten pakiet pozwala na modyfikowanie przepisów dla mechanicznego Squeezera.

## Importowanie pakietu

Jeśli chcesz zaimportować ten pakiet, tutaj:

```zenscript
importuj mods.integrateddynamics.MechanicalSqueezer,
```

## Dodawanie przepisów

```zenscript
//MechanicalSqueezer.addRecipe(IItemStack inputStack, @Optional IItemStack outputStack, @Optional ILiquidStack outputFluid, @Optional(10) int duration);
MechanicalSqueezer. ddRecipe(<minecraft:melon>, <minecraft:stick>, <liquid:water> * 100, 10);



//MechanicalSqueezer. ddRecipe(IItemStack inputStack, 
// @Optional IItemStack outputStack1, @Optional float outputStackChance1,
// @Optional IItemStack outputStack2, @Optional float outputStackChance2,
// @Optional IItemStack outputStack3, @Optional float outputStackChance3,
// @Optional ILiquidStack outputFluid, @Optional(10) int duration);

MechanicalSqueezer. ddRecipe(<minecraft:pumpkin>, 
    <minecraft:pumpkin_seeds>, 0.2,
    <minecraft:iron_nugget>, 0. 1,
    <minecraft:cactus>, 0.5,
    <liquid:water> * 100, 20);
```

## Usuwanie przepisów

```zenscript
//MechanicalSqueezer.removeRecipe(IItemStack inputStack, @Optional IItemStack outputStack, @Optional ILiquidStack outputFluid, @Optional(10) int duration);
MechanicalSqueezer. emoveRecipe(<minecraft:melon>, <minecraft:stick>, <liquid:water> * 100, 10);

//MechanicalSqueezer. emoveRecipe(IItemStack inputStack,
// @Optional IItemStack outputStack1, @Optional float outputStackChance1,
// @Optional IItemStack outputStack2, @Optional float outputStackChance2,
// @Optional IItemStack outputStack3, @Optional float outputStackChance3,
// @Optional ILiquidStack outputFluid, @Optional(10) int duration);

MechanicalSqueezer. emoveRecipe(<minecraft:pumpkin>, 
    <minecraft:pumpkin_seeds>, 0.2,
    <minecraft:iron_nugget>, 0. 1,
    <minecraft:cactus>, 0.5,
    <liquid:water> * 100, 20)



//MechanicalSqueezer. emoveRecipesWithOutput(@Optional IItemStack outputStack, @Optional ILiquidStack outputFluid);
//TODO

//MechanicalSqueezer. emoveRecipesWithOutput(@Optional IItemStack outputStack1, @Optional float outputStackChance1,
// @Optional IItemStack outputStack2, @Optional float outputStackChance2,
// @Optional IItemStack outputStack3, @Optional float outputStackChance3,
// @Optional ILiquidStack outputFluid

MechanicalSqueezer. emoveRecipesWithOutput(<minecraft:pumpkin_seeds>, 0.2,
    <minecraft:iron_nugget>, 0. 1,
    <minecraft:cactus>, 0.5,
    <liquid:water> * 100, 20);
```