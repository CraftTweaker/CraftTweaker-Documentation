# MeccanicalSqueezer

Questo pacchetto consente di modificare le ricette per lo spremitore meccanico.

## Importazione del pacchetto

Se vuoi importare questo pacchetto, qui vai:

```zenscript
import mods.integrateddynamics.MechanicalSqueezer;
```

## Aggiunta Di Ricette

```zenscript
//MechanicalSqueezer.addRecipe(IItemStack inputStack, @Optional IItemStack outputStack, @Optional ILiquidStack outputFluid, @Optional(10) int duration);
MechanicalSqueezer. ddRecipe(<minecraft:melon>, <minecraft:stick>, <liquid:water> * 100, 10);



//MechanicalSqueezer. ddRecipe(IItemStack inputStack, 
// @Optional IItemStack outputStack1, @Optional float outputStackChance1,
// @Optional IItemStack outputStack2, @Optional float outputStackChance2,
// @Optional IItemStack outputStack3, @Optional float outputStackChance3,
// @Optional ILiquidStack outputFluid, @Optional(10) int duration);

MeccanicalSqueezer. ddRecipe(<minecraft:pumpkin>, 
    <minecraft:pumpkin_seeds>, 0.2,
    <minecraft:iron_nugget>, 0. 1,
    <minecraft:cactus>, 0,5,
    <liquid:water> * 100, 20);
```

## Rimozione Ricette

```zenscript
//MechanicalSqueezer.removeRecipe(IItemStack inputStack, @Optional IItemStack outputStack, @Optional ILiquidStack outputFluid, @Optional(10) int duration);
MechanicalSqueezer. emoveRecipe(<minecraft:melon>, <minecraft:stick>, <liquid:water> * 100, 10);

//MechanicalSqueezer. emoveRecipe(IItemStack inputStack,
// @Optional IItemStack outputStack1, @Optional float outputStackChance1,
// @Optional IItemStack outputStack2, @Optional float outputStackChance2,
// @Optional IItemStack outputStack3, @Optional float outputStackChance3,
// @Optional ILiquidStack outputFluid, @Optional(10) int duration);

MeccanicalSqueezer. emoveRecipe(<minecraft:pumpkin>, 
    <minecraft:pumpkin_seeds>, 0.2,
    <minecraft:iron_nugget>, 0. 1,
    <minecraft:cactus>, 0.5,
    <liquid:water> * 100, 20)



//MechanicalSqueezer. emoveRecipesWithOutput(@Optional IItemStack outputStack, @Optional ILiquidStack outputFluid);
//TODO

//MechanicalSqueezer. emoveRecipesWithOutput(@Optional IItemStack outputStack1, @Optional float outputStackChance1,
// @Optional IItemStack outputStack2, @Optional float outputStackChance2,
// @Optional IItemStack outputStack3, @Optional float outputStackChance3,
// @Optional ILiquidStack outputFluid);

MeccanicalSqueezer. emoveRecipesWithOutput(<minecraft:pumpkin_seeds>, 0.2,
    <minecraft:iron_nugget>, 0. 1,
    <minecraft:cactus>, 0,5,
    <liquid:water> * 100, 20);
```