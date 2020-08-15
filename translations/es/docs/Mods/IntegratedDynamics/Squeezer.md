# Cuadrante

Este paquete le permite modificar las recetas para el Squareezer.

## Importando el paquete

Si quieres importar este paquete, aquí vas:

```zenscript
importar mods.integrateddynamics.Square
```

## Añadiendo recetas

```zenscript
//Squeezer.addRecipe(IItemStack inputStack, @Optional ItemStack outputStack, @Optional ILiquidStack outputFluid);
Squeezer.addRecipe(<minecraft:melon>, <minecraft:stick>, <liquid:water> * 100);



//Squeezer. ddRecipe(IItemStack inputStack, 
// @Optional ItemStack outputStack1, @Optional float outputStackChance1,
// @Optional ItemStack outputStack outputStack2, @Optional float outputStackChance2,
// @Optional ItemStack outputStack3, @Optional float outputStackChance3,
// @Optional ILiquidStack outputFluid);


Cuadrillo. ddReceta(<minecraft:pumpkin>, 
    <minecraft:pumpkin_seeds>, 0.2,
    <minecraft:iron_nugget>, 0. 1,
    <minecraft:cactus>, 0.5,
    <liquid:water> * 100);
```

## Eliminando recetas

```zenscript
//Squeezer.removeRecipe(ItemStack inputStack, @Optional ItemStack outputStack, @Optional ILiquidStack outputFluid);
//TODO

//Squeezer. emoveRecipe(IItemStack inputStack,
// @Optional ItemStack outputStack1, @Optional float outputStackChance1,
// @Optional ItemStack outputStack outputStack2, @Optional float outputStackChance2,
// @Optional ItemStack outputStack3, @Optional float outputStackChance3,
// @Optional ILiquidStack outputFluid);

Squeezer. emoveRecipe(<minecraft:pumpkin>, 
    <minecraft:pumpkin_seeds>, 0.2,
    <minecraft:iron_nugget>, 0. 1,
    <minecraft:cactus>, 0.5,
    <liquid:water> * 100);



//Squeezer. emoveRecipesWithOutput(@Optional ItemStack outputStack, @Optional ILiquidStack outputFluid);
Squeezer.removeRecipesWithOutput(<minecraft:pumpkin_seeds>, <liquid:water>);

//Squeezer. emoveRecipesWithOutput(@Optional ItemStack outputStack1, @Optional float outputStackChance1,
// @Optional ItemStack outputStack2, @Optional float outputStackChance2,
// @Optional ILiquidStack outputStack3, @Optional float outputStackChance3,
// @Optional ILiquidStack outputFluid);

Squeezer. emoveRecipesWithSalida(<minecraft:pumpkin_seeds>, 0.2,
    <minecraft:iron_nugget>, 0. 1,
    <minecraft:cactus>, 0.5,
    <liquid:water> * 100);
```