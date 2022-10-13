::requiredMod[Immersive Intelligence]{builtIn=true modLink=https://www.curseforge.com/minecraft/mc-mods/immersive-intelligence}

# Chemical Bath

The `ChemicalBath` package can be used to modify the Immersive Intelligence Chemical Bath recipes.

## Importing the Package

```zenscript
import mods.immersiveintelligence.ChemicalBath;
```

## Adding Recipes

### Parameters

| 类型                                                      | 名称          | Required |
| ------------------------------------------------------- | ----------- | -------- |
| [材料（IIngredient）](/Vanilla/Variable_Types/IIngredient/) | Item Input  | Yes      |
| [IItemstack](/Vanilla/Items/IItemStack/)                | Item Output | Yes      |
| [ILiquidStack](/Vanilla/Variable_Types/ILiquidStack/)   | Fluid Input | Yes      |
| int                                                     | Energy      | Yes      |
| int                                                     | Time        | Yes      |

### 语句

```zenscript
mods.immersiveintelligence.ChemicalBath.addRecipe(IIngredient itemInput, IItemStack itemOutput, ILiquidStack fluidInput, int energy, int time);
```

### 例子

```zenscript
mods.immersiveintelligence.ChemicalBath.addRecipe(<ore:ingotIron>, <minecraft:diamond>, <liquid:lava>, 2000, 200);
```

## Adding Washing Recipes

Washing recipes are functionally the same as regular recipes, but are placed in a different category in JEI.

### Parameters

| 类型                                                      | 名称          | Required |
| ------------------------------------------------------- | ----------- | -------- |
| [材料（IIngredient）](/Vanilla/Variable_Types/IIngredient/) | Item Input  | Yes      |
| [IItemstack](/Vanilla/Items/IItemStack/)                | Item Output | Yes      |
| [ILiquidStack](/Vanilla/Variable_Types/ILiquidStack/)   | Fluid Input | Yes      |
| int                                                     | Energy      | Yes      |
| int                                                     | Time        | Yes      |

### 语句

```zenscript
mods.immersiveintelligence.ChemicalBath.addWashingRecipe(IIngredient itemInput, IItemStack itemOutput, ILiquidStack fluidInput, int energy, int time);
```

### 例子

```zenscript
mods.immersiveintelligence.ChemicalBath.addWashingRecipe(<ore:ingotIron>, <minecraft:diamond>, <liquid:water>, 2000, 200);
```


## Removing Recipes

### Parameters

| 类型                                       | 名称 | Required |
| ---------------------------------------- | -- | -------- |
| [IItemstack](/Vanilla/Items/IItemStack/) | 输出 | Yes      |

### 语句

```zenscript
mods.immersiveintelligence.ChemicalBath.removeRecipe(IItemStack output);
```

### 例子

```zenscript
mods.immersiveintelligence.ChemicalBath.removeRecipe(<minecraft:diamond>);
```