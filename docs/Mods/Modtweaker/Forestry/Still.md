# Still

ModTweaker allows you to add or remove forestry Still Recipes

## Calling
You can call the  package using `mods.forestry.Still`

## Recipe Removal

```JAVA
//mods.forestry.Still.removeRecipe(IIngredient output, @Optional ILiquidStack fluidInput);
mods.forestry.Still.removeRecipe(<liquid:bioethanol>);
mods.forestry.Still.removeRecipe(<liquid:turpentine>, <liquid:resin>);
```


## Recipe Addition

```JAVA
//mods.forestry.Still.addRecipe(ILiquidStack fluidOutput, ILiquidStack fluidInput, int timePerUnit);
mods.forestry.Still.addRecipe(<liquid:lava>, <liquid:water>, 200);
```

