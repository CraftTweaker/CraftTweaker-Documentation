::requiredMod[Immersive Intelligence]{builtIn=true modLink=https://www.curseforge.com/minecraft/mc-mods/immersive-intelligence}

# Coagulator

The `Coagulator` package can be used to modify the Immersive Intelligence Coagulator recipes.

## Importing the Package

```zenscript
import mods.immersiveintelligence.Coagulator;
```

## Adding Recipes

### Parameters

| Type                                               | Name            | Required |
|----------------------------------------------------|-----------------|----------|
| [IItemstack](/Vanilla/Variable_Types/IIngredient/) | Item Output     | Yes      |
| [ILiquidStack](/Vanilla/Liquids/ILiquidstack/)     | Fluid Input     | Yes      |
| [ILiquidStack](/Vanilla/Liquids/ILiquidstack/)     | Coagulant Input | Yes      |
| int                                                | Energy          | Yes      |
| int                                                | Time            | Yes      |

### Syntax

```zenscript
mods.immersiveintelligence.Coagulator.addRecipe(IItemStack itemOutput, ILiquidStack fluidInput, ILiquidStack coagulantInput, int energy, int mixingTime);
```

### Example

```zenscript

mods.immersiveintelligence.Coagulator.addRecipe(<minecraft:diamond>, <liquid:water>, <liquid:lava>, 1234 , 4637);
```

## Removing Recipes

### Parameters

| Type                                     | Name   | Required  |
|------------------------------------------|--------|-----------|
| [IItemStack](/Vanilla/Items/IItemStack/) | Output | Yes       |

### Syntax

```zenscript
mods.immersiveintelligence.Coagulator.removeRecipe(IItemStack output);
```

### Example

```zenscript
mods.immersiveintelligence.Coagulator.removeRecipe(<minecraft:diamond>);
```