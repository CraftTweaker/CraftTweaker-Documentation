# Gasification Unit

## Importing the Package
```zenscript
import mods.magneticraft.GasificationUnit;
```

## Adding Recipes
```zenscript
//mods.magneticraft.GasificationUnit.addRecipe(IIngredidnt input, IItemStack output, ILiquidStack liquidOut, float ticks, float minTemperature);
mods.magneticraft.GasificationUnit.addRecipe(<ore:logWood>, <minecraft:coal>, <liquid:wood_gas> * 100, 10, 2500);
```

## Removing Recipes
```zenscript
//mods.magneticraft.GasificationUnit.removeRecipe(IItemStack input);
mods.magneticraft.GasificationUnit.removeRecipe(<minecraft:stone>);
```
