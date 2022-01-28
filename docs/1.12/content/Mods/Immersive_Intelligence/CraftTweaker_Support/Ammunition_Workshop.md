::requiredMod[Immersive Intelligence]{builtIn=true
modLink=https://www.curseforge.com/minecraft/mc-mods/immersive-intelligence}

# Ammunition Workshop

The `AmmunitionWorkshop` package can be used to add/remove recipes to/from the II Ammunition Workshop.

**Take note it is not limited to producing ammunition and can be used for any generic recipe involving 2 items.**

## Importing the Package

```zenscript
import mods.immersiveintelligence.AmmunitionWorkshop;
```

## Adding Recipes

### Parameters

| Type                                                | Name            | Required |
|-----------------------------------------------------|-----------------|----------|
| [IIngredient](/Vanilla/Variable_Types/IIngredient/) | Core Input      | Yes      |
| [IIngredient](/Vanilla/Variable_Types/IIngredient/) | Casing Input    | Yes      |
| IAmmunitionWorkshopFunction                         | Output Function | Yes      |
| int                                                 | Energy          | Yes      |
| int                                                 | Time            | Yes      |

### Syntax

```zenscript
mods.immersiveintelligence.AmmunitionWorkshop.addRecipe(IIngredient coreInput, IIngredient casingInput, IAmmunitionWorkshopFunction fun, int energy, int time);
```

### IAmmunitionWorkshopFunction

IAmmunitionWorkshopFunction is a function used to determine the item outputted by a recipe based on ingredients.    
It can be used i.e. to get core NBT tag or merge core and casing's NBT tags.

| Type                                     | Name         |
|------------------------------------------|--------------|
| [IItemStack](/Vanilla/Items/IItemStack/) | Core Input   |
| [IItemStack](/Vanilla/Items/IItemStack/) | Casing Input |

Returns: [IItemStack](/Vanilla/Items/IItemStack/)

### Example

```zenscript
mods.immersiveintelligence.AmmunitionWorkshop.addRecipe(
<minecraft:diamond>, <ore:ingotIron>, 
    function(inputCore,inputCasing) {
        return <minecraft:iron_ingot>.withTag(inputCore.tag);
    }, 
2000, 200);
```

## Removing Recipes

### Parameters

| Type                                     | Name       | Required  |
|------------------------------------------|------------|-----------|
| [IItemStack](/Vanilla/Items/IItemStack/) | Core Input | Yes       |

### Syntax

```zenscript
mods.immersiveintelligence.AmmunitionWorkshop.removeRecipe(IItemStack input);
```

### Example

```zenscript
mods.immersiveintelligence.AmmunitionWorkshop.removeRecipe(<minecraft:diamond>);
```