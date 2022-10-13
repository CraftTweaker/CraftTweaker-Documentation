::requiredMod[Immersive Intelligence]{builtIn=true modLink=https://www.curseforge.com/minecraft/mc-mods/immersive-intelligence}

# Filler

The `Filler` package can be used to modify the Immersive Intelligence Filler recipes.

## Importing the Package

```zenscript
import mods.immersiveintelligence.Filler;
```

## Adding Recipes

### Parameters

| 类型                                                      | 名称          | Required |
| ------------------------------------------------------- | ----------- | -------- |
| [IItemstack](/Vanilla/Variable_Types/IIngredient/)      | Item Output | Yes      |
| [材料（IIngredient）](/Vanilla/Variable_Types/IIngredient/) | Item Input  | Yes      |
| 字符串[string]                                             | Dust        | Yes      |
| int                                                     | Amount      | Yes      |
| int                                                     | Energy      | Yes      |
| int                                                     | Time        | Yes      |

### 语句

```zenscript
mods.immersiveintelligence.Filler.addRecipe(IItemStack itemOutput, IIngredient itemInput, String dust, int amount, int time, int energy);
```

### 例子

```zenscript
mods.immersiveintelligence.Filler.addRecipe(IItemStack itemOutput, IIngredient itemInput, String dust, int amount, int time, int energy);
```

## Removing Recipes

### Parameters

| 类型                                       | 名称          | Required |
| ---------------------------------------- | ----------- | -------- |
| [IItemstack](/Vanilla/Items/IItemStack/) | Item Output | Yes      |

### 语句

```zenscript
mods.immersiveintelligence.Filler.removeRecipe(IItemStack output);
```

### 例子

```zenscript
mods.immersiveintelligence.Filler.removeRecipe(<minecraft:diamond>);
```