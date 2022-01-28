::requiredMod[Immersive Intelligence]{builtIn=true modLink=https://www.curseforge.com/minecraft/mc-mods/immersive-intelligence}

# Filler

The `Filler` package can be used to add/remove recipes to/from the II Filler.

## Importing the Package

```zenscript
import mods.immersiveintelligence.Filler;
```

## Adding Recipes

### Parameters

| Type                                                | Name        | Required |
|-----------------------------------------------------|-------------|----------|
| [IItemStack](/Vanilla/Variable_Types/IIngredient/)  | Item Output | Yes      |
| [IIngredient](/Vanilla/Variable_Types/IIngredient/) | Item Input  | Yes      |
| String                                              | Dust        | Yes      |
| int                                                 | Amount      | Yes      |
| int                                                 | Energy      | Yes      |
| int                                                 | Time        | Yes      |

### Syntax

```zenscript
mods.immersiveintelligence.Filler.addRecipe(IItemStack itemOutput, IIngredient itemInput, String dust, int amount, int time, int energy);
```

### Example

```zenscript
mods.immersiveintelligence.Filler.addRecipe(IItemStack itemOutput, IIngredient itemInput, String dust, int amount, int time, int energy);
```

## Removing Recipes

### Parameters

| Type                                     | Name        | Required  |
|------------------------------------------|-------------|-----------|
| [IItemStack](/Vanilla/Items/IItemStack/) | Item Output | Yes       |

### Syntax

```zenscript
mods.immersiveintelligence.Filler.removeRecipe(IItemStack output);
```

### Example

```zenscript
mods.immersiveintelligence.Filler.removeRecipe(<minecraft:diamond>);
```