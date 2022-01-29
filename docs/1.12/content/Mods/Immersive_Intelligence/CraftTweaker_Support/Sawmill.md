::requiredMod[Immersive Intelligence]{builtIn=true modLink=https://www.curseforge.com/minecraft/mc-mods/immersive-intelligence}

# Sawmill

The `Sawmill` package can be used to modify the Immersive Intelligence Sawmill recipes.

## Importing the Package

```zenscript
import mods.immersiveintelligence.Sawmill;
```

## Adding Recipes

### Parameters

| Type                                                | Name             | Required  |
|-----------------------------------------------------|------------------|-----------|
| [IIngredient](/Vanilla/Variable_Types/IIngredient/) | Input            | Yes       |
| [IIngredient](/Vanilla/Variable_Types/IIngredient/) | Output           | Yes       |
| [IItemStack](/Vanilla/Items/IItemStack/)            | Secondary Output | Yes       |
| int                                                 | Torque           | Yes       |
| int                                                 | Time             | Yes       |
| int                                                 | Saw Hardness     | Yes       |
| int                                                 | Dust Color       | Yes       |

DustColor is a color provided in RGB int format. To get it, pick a color (RGB) in hex and convert the number to
decimal.  
Saw Hardness determines which saws can be used in the recipe.

| Material | Hardness |
|----------|----------|
| Iron     | 2        |
| Steel    | 3        |
| Tungsten | 4        |

### Syntax

```zenscript
mods.immersiveintelligence.Sawmill.addRecipe(IIngredient itemInput, IItemStack itemOutput, IItemStack secondaryItemOutput, int torque, int time, int hardness, int dustColor);
```

### Example

```zenscript
mods.immersiveintelligence.Sawmill.addRecipe(<ore:oreGold>,<minecraft:diamond>,<minecraft:diamond>,10,20,1,0);
```

## Removing Recipes

### Parameters

| Type                                     | Name   | Required  |
|------------------------------------------|--------|-----------|
| [IItemStack](/Vanilla/Items/IItemStack/) | Output | Yes       |

### Syntax

```zenscript
mods.immersiveintelligence.Sawmill.removeRecipe(IItemStack output);
```

### Example

```zenscript
mods.immersiveintelligence.Sawmill.removeRecipe(<minecraft:diamond>);
```