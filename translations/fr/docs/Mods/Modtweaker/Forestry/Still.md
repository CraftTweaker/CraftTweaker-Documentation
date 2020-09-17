# En cours

ModTweaker vous permet d'ajouter ou de supprimer des recettes encore en bois

## Appel en cours

You can call the package using `mods.forestry.Still`

## Suppression de la recette

```zenscript
//mods.forestry.Still.removeRecipe(ILiquidStack output, @Optional ILiquidStack fluidInput);
mods.forestry.Still.removeRecipe(<liquid:bio.ethanol>);
mods.forestry.Still.removeRecipe(<liquid:refinedcanolaoil>,<liquid:canolaoil>);
```

## Ajout de recette

```zenscript
//mods.forestry.Still.addRecipe(ILiquidStack fluidOutput, ILiquidStack fluidInput, int timePerUnit);
mods.forestry.Still.addRecipe(<liquid:lava>, <liquid:water>, 200);
```