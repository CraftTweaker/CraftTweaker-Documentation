::requiredMod[Immersive Intelligence]{builtIn=true modLink=https://www.curseforge.com/minecraft/mc-mods/immersive-intelligence}

# Electrolyzer

The `Electrolyzer` package can be used to modify the Immersive Intelligence Electrolyzer recipes.

## Importing the Package

```zenscript
import mods.immersiveintelligence.Electrolyzer;
```

## Adding Recipes

### Parameters

| Type                                           | Name           | Required |
|------------------------------------------------|----------------|----------|
| [ILiquidStack](/Vanilla/Liquids/ILiquidstack/) | Main Input     | Yes      |
| [ILiquidStack](/Vanilla/Liquids/ILiquidstack/) | Compound Input | Yes      |
| int                                            | Mold           | Yes      |
| int                                            | Energy         | Yes      |
| [ILiquidStack](/Vanilla/Liquids/ILiquidstack/) | Time           | No       |

### Syntax

```zenscript
mods.immersiveintelligence.Electrolyzer.addRecipe(ILiquidStack fluidInput, ILiquidStack fluidOutput1, int energy, int time, @Optional ILiquidStack fluidOutput2);
```

### Example

```zenscript
mods.immersiveintelligence.Electrolyzer.addRecipe(<liquid:water>*4,<liquid:lava>*4,123,200,<liquid:hydrofluoric_acid>*8);
```

## Removing Recipes

### Parameters

| Type                                           | Name   | Required |
|------------------------------------------------|--------|----------|
| [ILiquidStack](/Vanilla/Liquids/ILiquidstack/) | Output | Yes      |

### Syntax

```zenscript
mods.immersiveintelligence.Electrolyzer.removeRecipe(ILiquidStack output);
```

### Example

```zenscript
mods.immersiveintelligence.Electrolyzer.removeRecipe(<liquid:water>);
```