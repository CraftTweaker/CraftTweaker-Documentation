# Bassin de séchage

Ce paquet vous permet de modifier les recettes du bassin de séchage.

## Importation du paquet

Si vous voulez importer ce paquet, voici :

```zenscript
Importer mods.integrateddynamics.DryingBasin;
```

## Ajout de recettes

```zenscript
//DryingBasin.addRecipe(@Optional IItemStack inputStack, @Optional ILiquidStack inputFluid, @Optional IItemStack outputStack, @Optional ILiquidStack outputFluid, @Optional(10) int duration);

DryingBasin. ddRecipe(<minecraft:melon>, <liquid:lava> * 100, <minecraft:stick>, <liquid:water> * 100, 10);
```

## Suppression des recettes

```zenscript
//DryingBasin.removeRecipe(@Optional IItemStack inputStack, @Optional ILiquidStack inputFluid, @Optional IItemStack outputStack, @Optional ILiquidStack outputFluid, @Optional(10) int duration);
DryingBasin. emoveRecipe(<minecraft:melon>, <liquid:lava> * 100, <minecraft:stick>, <liquid:water> * 100, 10 );


//DryingBasin. emoveRecipesWithOutput(@Optional IItemStack outputStack, @Optional ILiquidStack outputFluid);
DryingBasin.removeRecipesWithOutput(<minecraft:leather>, null);
```