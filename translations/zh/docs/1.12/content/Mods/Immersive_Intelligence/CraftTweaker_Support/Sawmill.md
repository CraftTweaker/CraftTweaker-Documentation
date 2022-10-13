::requiredMod[Immersive Intelligence]{builtIn=true modLink=https://www.curseforge.com/minecraft/mc-mods/immersive-intelligence}

# Sawmill

The `Sawmill` package can be used to modify the Immersive Intelligence Sawmill recipes.

## Importing the Package

```zenscript
import mods.immersiveintelligence.Sawmill;
```

## Adding Recipes

### Parameters

| 类型                                                      | 名称               | Required |
| ------------------------------------------------------- | ---------------- | -------- |
| [材料（IIngredient）](/Vanilla/Variable_Types/IIngredient/) | 输入               | Yes      |
| [材料（IIngredient）](/Vanilla/Variable_Types/IIngredient/) | 输出               | Yes      |
| [IItemstack](/Vanilla/Items/IItemStack/)                | Secondary Output | Yes      |
| int                                                     | Torque           | Yes      |
| int                                                     | Time             | Yes      |
| int                                                     | Saw Hardness     | Yes      |
| int                                                     | Dust Color       | Yes      |

DustColor is a color provided in RGB int format. To get it, pick a color (RGB) in hex and convert the number to decimal.  
Saw Hardness determines which saws can be used in the recipe.

| 材料       | Hardness |
| -------- | -------- |
| Iron     | 2        |
| Steel    | 3        |
| Tungsten | 4        |

### 语句

```zenscript
mods.immersiveintelligence.Sawmill.addRecipe(IIngredient itemInput, IItemStack itemOutput, IItemStack secondaryItemOutput, int torque, int time, int hardness, int dustColor);
```

### 例子

```zenscript
mods.immersiveintelligence.Sawmill.addRecipe(<ore:oreGold>,<minecraft:diamond>,<minecraft:diamond>,10,20,1,0);
```

## Removing Recipes

### Parameters

| 类型                                       | 名称 | Required |
| ---------------------------------------- | -- | -------- |
| [IItemstack](/Vanilla/Items/IItemStack/) | 输出 | Yes      |

### 语句

```zenscript
mods.immersiveintelligence.Sawmill.removeRecipe(IItemStack output);
```

### 例子

```zenscript
mods.immersiveintelligence.Sawmill.removeRecipe(<minecraft:diamond>);
```