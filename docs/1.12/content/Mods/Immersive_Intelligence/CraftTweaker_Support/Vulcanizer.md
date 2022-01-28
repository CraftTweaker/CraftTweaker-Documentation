::requiredMod[Immersive Intelligence]{builtIn=true modLink=https://www.curseforge.com/minecraft/mc-mods/immersive-intelligence}

# Vulcanizer

The `Vulcanizer` package can be used to add/remove recipes to/from the II Vulcanizer.

## Importing the Package

```zenscript
import mods.immersiveintelligence.Vulcanizer;
```

## Adding Recipes

### Parameters

| Type                                                | Name           | Required |
|-----------------------------------------------------|----------------|----------|
| [IIngredient](/Vanilla/Variable_Types/IIngredient/) | Main Input     | Yes      |
| [IIngredient](/Vanilla/Variable_Types/IIngredient/) | Compound Input | Yes      |
| [IIngredient](/Vanilla/Variable_Types/IIngredient/) | Sulfur Input   | Yes      |
| [IItemStack](/Vanilla/Items/IItemStack/)            | Mold           | Yes      |
| int                                                 | Energy         | Yes      |
| int                                                 | Time           | Yes      |
| string                                              | Latex Texture  | No       |
| string                                              | Rubber Texture | No       |

**Note: the first 3 ingredients don't have to be rubber, compound and sulfur. It is just a slot name,
any [IIngredient](/Vanilla/Variable_Types/IIngredient/) is allowed.**

Latex and Rubber texture are texture path (resource location) strings,
f.e. `"immersiveintelligence:textures/blocks/multiblock/vulcanizer/latex_strip"`.  
These are displayed on the rollers, during the first phase of the machine animation.

### Syntax

```zenscript
mods.immersiveintelligence.Vulcanizer.addRecipe(IIngredient mainInput, IIngredient compoundInput, IIngredient sulfurInput, IItemStack itemMold, IItemStack itemOutput, int energy, String resIn, String resOut);

//or

mods.immersiveintelligence.Vulcanizer.addRecipe(IIngredient mainInput, IIngredient compoundInput, IIngredient sulfurInput, IItemStack itemMold, IItemStack itemOutput, int energy);
```

### Example

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

| Type                                     | Name   | Required  |
|------------------------------------------|--------|-----------|
| [IItemStack](/Vanilla/Items/IItemStack/) | Output | Yes       |

### Syntax

```zenscript
mods.immersiveintelligence.Vulcanizer.removeRecipe(IItemStack output);
```

### Example

```zenscript
mods.immersiveintelligence.Vulcanizer.removeRecipe(<minecraft:diamond>);
```