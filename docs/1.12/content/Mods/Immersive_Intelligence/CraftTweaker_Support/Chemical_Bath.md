::requiredMod[Immersive Intelligence]{builtIn=true modLink=https://www.curseforge.com/minecraft/mc-mods/immersive-intelligence}

# Chemical Bath

The `ChemicalBath` package can be used to modify the Immersive Intelligence Chemical Bath recipes.

## Importing the Package

```zenscript
import mods.immersiveintelligence.ChemicalBath;
```

## Adding Recipes

### Parameters

| Type                                                                    | Name        | Required  |
|-------------------------------------------------------------------------|-------------|-----------|
| [IIngredient](/Vanilla/Variable_Types/IIngredient/)                     | Item Input  | Yes       |
| [IItemStack](/Vanilla/Items/IItemStack/)                                | Item Output | Yes       |
| [ILiquidStack](/Vanilla/Variable_Types/ILiquidStack/)                   | Fluid Input | Yes       |
| int                                                                     | Energy      | Yes       |
| int                                                                     | Time        | Yes       |

### Syntax

```zenscript
mods.immersiveintelligence.ChemicalBath.addRecipe(IIngredient itemInput, IItemStack itemOutput, ILiquidStack fluidInput, int energy, int time);
```

### Example

```zenscript
mods.immersiveintelligence.ChemicalBath.addRecipe(<ore:ingotIron>, <minecraft:diamond>, <liquid:lava>, 2000, 200);
```

## Adding Washing Recipes

Washing recipes are functionally the same as regular recipes, but are placed in a different category in JEI.  

### Parameters

| Type                                                                    | Name        | Required  |
|-------------------------------------------------------------------------|-------------|-----------|
| [IIngredient](/Vanilla/Variable_Types/IIngredient/)                     | Item Input  | Yes       |
| [IItemStack](/Vanilla/Items/IItemStack/)                                | Item Output | Yes       |
| [ILiquidStack](/Vanilla/Variable_Types/ILiquidStack/)                   | Fluid Input | Yes       |
| int                                                                     | Energy      | Yes       |
| int                                                                     | Time        | Yes       |

### Syntax

```zenscript
mods.immersiveintelligence.ChemicalBath.addWashingRecipe(IIngredient itemInput, IItemStack itemOutput, ILiquidStack fluidInput, int energy, int time);
```

### Example

```zenscript
mods.immersiveintelligence.ChemicalBath.addWashingRecipe(<ore:ingotIron>, <minecraft:diamond>, <liquid:water>, 2000, 200);
```


## Removing Recipes

### Parameters

| Type                                     | Name   | Required  |
|------------------------------------------|--------|-----------|
| [IItemStack](/Vanilla/Items/IItemStack/) | Output | Yes       |

### Syntax

```zenscript
mods.immersiveintelligence.ChemicalBath.removeRecipe(IItemStack output);
```

### Example

```zenscript
mods.immersiveintelligence.ChemicalBath.removeRecipe(<minecraft:diamond>);
```