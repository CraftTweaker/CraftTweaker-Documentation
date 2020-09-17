# Squeezer

Questo pacchetto ti permette di modificare le ricette per lo Squeezer.

## Importazione del pacchetto

Se vuoi importare questo pacchetto, qui vai:

```zenscript
import mods.integrateddynamics.Squeezer;
```

## Aggiunta Di Ricette

```zenscript
//Squeezer.addRecipe(IItemStack inputStack, @Optional IItemStack outputStack, @Optional ILiquidStack outputFluid);
Squeezer.addRecipe(<minecraft:melon>, <minecraft:stick>, <liquid:water> * 100);



//Squeezer. ddRecipe(IItemStack inputStack, 
// @Optional IItemStack outputStack1, @Optional float outputStackChance1,
// @Optional IItemStack outputStack2, @Optional float outputStackChance2,
// @Optional IItemStack outputStack3, @Optional float outputStackChance3,
// @Optional ILiquidStack outputFluid);


Squeezer. ddRecipe(<minecraft:pumpkin>, 
    <minecraft:pumpkin_seeds>, 0.2,
    <minecraft:iron_nugget>, 0. 1,
    <minecraft:cactus>, 0,5,
    <liquid:water> * 100);
```

## Rimozione Ricette

```zenscript
//Squeezer.removeRecipe(IItemStack inputStack, @Optional IItemStack outputStack, @Optional ILiquidStack outputFluid);
//TODO

//Squeezer. emoveRecipe(IItemStack inputStack,
// @Optional IItemStack outputStack1, @Optional float outputStackChance1,
// @Optional IItemStack outputStack2, @Optional float outputStackChance2,
// @Optional IItemStack outputStack3, @Optional float outputStackChance3,
// @Optional ILiquidStack outputFluid);

Squeezer. emoveRecipe(<minecraft:pumpkin>, 
    <minecraft:pumpkin_seeds>, 0.2,
    <minecraft:iron_nugget>, 0. 1,
    <minecraft:cactus>, 0.5,
    <liquid:water> * 100);



//Squeezer. emoveRecipesWithOutput(@Optional IItemStack outputStack, @Optional ILiquidStack outputFluid);
Squeeezer.removeRecipesWithOutput(<minecraft:pumpkin_seeds>, <liquid:water>);

//Squeezer. emoveRecipesWithOutput(@Optional IItemStack outputStack1, @Optional float outputStackChance1,
// @Optional IItemStack outputStack2, @Optional float outputStackChance2,
// @Optional IItemStack outputStack3, @Optional float outputStackChance3,
// @Optional ILiquidStack outputFluid);

Squeezer. emoveRecipesWithOutput(<minecraft:pumpkin_seeds>, 0.2,
    <minecraft:iron_nugget>, 0. 1,
    <minecraft:cactus>, 0,5,
    <liquid:water> * 100);
```