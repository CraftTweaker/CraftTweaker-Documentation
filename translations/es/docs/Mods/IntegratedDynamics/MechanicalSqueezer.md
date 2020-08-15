# Esquina mecánica

Este paquete le permite modificar las recetas para la plaza mecánica.

## Importando el paquete

Si quieres importar este paquete, aquí vas:

```zenscript
importar mods.integrateddynamics.MechanicalSquare
```

## Añadiendo recetas

```zenscript
//MechanicalSqueezer.addRecipe(IItemStack inputStack, @Optional ItemStack outputStack, @Optional ILiquidStack outputFluid, @Optional(10) int duration);
MechanicalSqueezer. ddRecipe(<minecraft:melon>, <minecraft:stick>, <liquid:water> * 100, 10);



//MechanicalSqueezer. ddRecipe(IItemStack inputStack, 
// @Optional ItemStack outputStack1, @Optional float outputStackChance1,
// @Optional ItemStack outputStack outputStack2, @Optional float outputStackChance2,
// @Optional ItemStack outputStack3, @Optional float outputStackChance3,
// @Optional ILiquidStack outputFluid, @Optional(10) int duration);

Plaza Mecánica. ddReceta(<minecraft:pumpkin>, 
    <minecraft:pumpkin_seeds>, 0.2,
    <minecraft:iron_nugget>, 0. 1,
    <minecraft:cactus>, 0.5,
    <liquid:water> * 100, 20);
```

## Eliminando recetas

```zenscript
//MechanicalSqueezer.removeRecipe(IItemStack inputStack, @Optional ItemStack outputStack, @Optional ILiquidStack outputFluid, @Optional(10) int duration);
MechanicalSqueezer. emoveRecipe(<minecraft:melon>, <minecraft:stick>, <liquid:water> * 100, 10);

//MechanicalSqueezer. emoveRecipe(IItemStack inputStack,
// @Optional ItemStack outputStack1, @Optional float outputStackChance1,
// @Optional ItemStack outputStack outputStack2, @Optional float outputStackChance2,
// @Optional ItemStack outputStack3, @Optional float outputStackChance3,
// @Optional ILiquidStack outputFluid, @Optional(10) int duration);

Plaza Mecánica. emoveRecipe(<minecraft:pumpkin>, 
    <minecraft:pumpkin_seeds>, 0.2,
    <minecraft:iron_nugget>, 0. 1,
    <minecraft:cactus>, 0.5,
    <liquid:water> * 100, 20)



//MechanicalSqueezer. emoveRecipesWithOutput(@Optional ItemStack outputStack, @Optional ILiquidStack outputFluid);
//TODO

///MechanicalSqueezer. emoveRecipesWithOutput(@Optional ItemStack outputStack1, @Optional float outputStackChance1,
// @Optional ItemStack outputStack2, @Optional float outputStackChance2,
// @Optional ItemStack outputStack3, @Optional float outputStackChance3,
// @Optional ILiquidStack outputFluid);

MechanicalSqueezer. emoveRecipesWithSalida(<minecraft:pumpkin_seeds>, 0.2,
    <minecraft:iron_nugget>, 0. 1,
    <minecraft:cactus>, 0.5,
    <liquid:water> * 100, 20);
```