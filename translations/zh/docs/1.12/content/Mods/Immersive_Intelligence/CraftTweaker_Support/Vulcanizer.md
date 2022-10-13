::requiredMod[Immersive Intelligence]{builtIn=true modLink=https://www.curseforge.com/minecraft/mc-mods/immersive-intelligence}

# Vulcanizer

The `Vulcanizer` package can be used to modify the Immersive Intelligence Vulcanizer recipes.

## Importing the Package

```zenscript
import mods.immersiveintelligence.Vulcanizer;
```

## Adding Recipes

### Parameters

| 类型                                                      | 名称             | Required |
| ------------------------------------------------------- | -------------- | -------- |
| [材料（IIngredient）](/Vanilla/Variable_Types/IIngredient/) | Main Input     | Yes      |
| [材料（IIngredient）](/Vanilla/Variable_Types/IIngredient/) | Compound Input | Yes      |
| [材料（IIngredient）](/Vanilla/Variable_Types/IIngredient/) | Sulfur Input   | Yes      |
| [IItemstack](/Vanilla/Items/IItemStack/)                | Mold           | Yes      |
| int                                                     | Energy         | Yes      |
| int                                                     | Time           | Yes      |
| string                                                  | Latex Texture  | No       |
| string                                                  | Rubber Texture | No       |

**Note: the first 3 ingredients don't have to be rubber, compound and sulfur. It is just a slot name, any [IIngredient](/Vanilla/Variable_Types/IIngredient/) is allowed.**

Latex and Rubber texture are texture path (resource location) strings, f.e. `"immersiveintelligence:textures/blocks/multiblock/vulcanizer/latex_strip"`.  
These are displayed on the rollers, during the first phase of the machine animation.

### 语句

```zenscript
mods.immersiveintelligence.Vulcanizer.addRecipe(IIngredient mainInput, IIngredient compoundInput, IIngredient sulfurInput, IItemStack itemMold, IItemStack itemOutput, int energy, String resIn, String resOut);

//or

mods.immersiveintelligence.Vulcanizer.addRecipe(IIngredient mainInput, IIngredient compoundInput, IIngredient sulfurInput, IItemStack itemMold, IItemStack itemOutput, int energy);
```

### 例子

```zenscript
mods.immersiveintelligence.Vulcanizer.addRecipe(<minecraft:golden_ingot>,<ore:ingotIron>,<minecraft:diamond>,
    <immersiveintelligence:material_plate>,2000, 200,
    "minecraft:textures/blocks/dirt",
    "minecraft:textures/blocks/stone"
    );

//or

mods.immersiveintelligence.Vulcanizer.addRecipe(<minecraft:golden_ingot>,<ore:ingotIron>,<minecraft:diamond>,<immersiveintelligence:material_plate>,2000, 200);
```

## Removing Recipes

### Parameters

| 类型                                       | 名称 | Required |
| ---------------------------------------- | -- | -------- |
| [IItemstack](/Vanilla/Items/IItemStack/) | 输出 | Yes      |

### 语句

```zenscript
mods.immersiveintelligence.Vulcanizer.removeRecipe(IItemStack output);
```

### 例子

```zenscript
mods.immersiveintelligence.Vulcanizer.removeRecipe(<minecraft:diamond>);
```