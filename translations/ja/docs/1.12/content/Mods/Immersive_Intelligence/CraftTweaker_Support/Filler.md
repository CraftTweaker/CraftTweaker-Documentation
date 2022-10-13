::requiredMod[Immersive Intelligence]{builtIn=true modLink=https://www.curseforge.com/minecraft/mc-mods/immersive-intelligence}

# Filler

The `Filler` package can be used to modify the Immersive Intelligence Filler recipes.

## Importing the Package

```zenscript
import mods.immersiveintelligence.Filler;
```

## Adding Recipes

### Parameters

| Type                                                | 名称          | Required |
| --------------------------------------------------- | ----------- | -------- |
| [IItemStack](/Vanilla/Variable_Types/IIngredient/)  | Item Output | Yes      |
| [IIngredient](/Vanilla/Variable_Types/IIngredient/) | Item Input  | Yes      |
| 文字列型                                                | Dust        | Yes      |
| int                                                 | Amount      | Yes      |
| int                                                 | Energy      | Yes      |
| int                                                 | Time        | Yes      |

### Syntax

```zenscript
mods.immersiveintelligence.Filler.addRecipe(IItemStack itemOutput, IIngredient itemInput, String dust, int amount, int time, int energy);
```

### 例

```zenscript
mods.immersiveintelligence.Filler.addRecipe(IItemStack itemOutput, IIngredient itemInput, String dust, int amount, int time, int energy);
```

## Removing Recipes

### Parameters

| Type                                     | 名称          | Required |
| ---------------------------------------- | ----------- | -------- |
| [IItemStack](/Vanilla/Items/IItemStack/) | Item Output | Yes      |

### Syntax

```zenscript
mods.immersiveintelligence.Filler.removeRecipe(IItemStack output);
```

### 例

```zenscript
mods.immersiveintelligence.Filler.removeRecipe(<minecraft:diamond>);
```