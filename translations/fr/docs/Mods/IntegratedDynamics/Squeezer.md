# Squeezer

Ce paquet vous permet de modifier les recettes du Squeezer.

## Importation du paquet

Si vous voulez importer ce paquet, voici :

```zenscript
Importer mods.integrateddynamics.Squeezer;
```

## Ajout de recettes

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
    <minecraft:cactus>, 0.5,
    <liquid:water> * 100);
```

## Suppression des recettes

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
Squeezer.removeRecipesWithOutput(<minecraft:pumpkin_seeds>, <liquid:water>);

//Squeezer. emoveRecipesWithOutput(@Optional IItemStack outputStack1, @Optional float outputStackChance1,
// @Optional IItemStack outputStack2, @Optional float outputStackChance2,
// @Optional IItemStack outputStack3, @Optional float outputStackChance3,
// @Optional ILiquidStack outputFluid);

Squeezer. emoveRecipesWithOutput(<minecraft:pumpkin_seeds>, 0.2,
    <minecraft:iron_nugget>, 0. 1,
    <minecraft:cactus>
, 0,5,
    <liquid:water> * 100);
```