# Bassin d'assèchement mécanique

Ce paquet vous permet de modifier les recettes du bassin de séchage mécanique.

## Importation du paquet

Si vous voulez importer ce paquet, voici :

```zenscript
Importer mods.integrateddynamics.MechanicalDryingBasin;
```

## Ajout de recettes

```zenscript
//MechanicalDryingBasin.addRecipe(@Optional IItemStack inputStack, @Optional ILiquidStack inputFluid, @Optional IItemStack outputStack, @Optional ILiquidStack outputFluid, @Optional(10) int duration);

MechanicalDryingBasin. ddRecipe(<minecraft:melon>, <liquid:lava> * 100, <minecraft:stick>, <liquid:water> * 100, 10);
```

## Suppression des recettes

```zenscript
//MechanicalDryingBasin.removeRecipe(@Optional IItemStack inputStack, @Optional ILiquidStack inputFluid, @Optional IItemStack outputStack, @Optional ILiquidStack outputFluid, @Optional(10) int duration);
MechanicalDryingBasin. emoveRecipe(<minecraft:melon>, <liquid:lava> * 100, <minecraft:stick>, <liquid:water> * 100, 10 );


//MechanicalDryingBasin. emoveRecipesWithOutput(@Optional IItemStack outputStack, @Optional ILiquidStack outputFluid);
MechanicalDryingBasin.removeRecipesWithOutput(<minecraft:leather>, null);
```