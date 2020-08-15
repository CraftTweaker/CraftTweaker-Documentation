# Condenser
**Note: Partially Broken**

## Importing the Package
`mods.nuclearcraft.Condenser`

## Rezepte hinzufügen
```zenscript
mods.nuclearcraft.Condenser.addRecipe(ILiquidStack fluidInput, ILiquidStack fluidOutput, @Optional double coolingRequired, @Optional int condensingTemperature);
```

## Rezepte entfernen
```zenscript
mods.nuclearcraft.Condenser.removeRecipeWithInput(ILiquidStack fluidInput);
mods.nuclearcraft.Condenser.removeRecipeWithOutput(ILiquidStack fluidOutput);
mods.nuclearcraft.Condenser.removeAllRecipes();
```