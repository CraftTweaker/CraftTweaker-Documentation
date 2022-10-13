::requiredMod[Immersive Intelligence]{builtIn=true modLink=https://www.curseforge.com/minecraft/mc-mods/immersive-intelligence}

# Ammunition Workshop

The `AmmunitionWorkshop` package can be used to modify the Immersive Intelligence Ammunition Workshop recipes.

**Take note it is not limited to producing ammunition and can be used for any generic recipe involving 2 items.**

## Importing the Package

```zenscript
import mods.immersiveintelligence.AmmunitionWorkshop;
```

## Adding Recipes

### Parameters

| 类型                                                      | 名称              | Required |
| ------------------------------------------------------- | --------------- | -------- |
| [材料（IIngredient）](/Vanilla/Variable_Types/IIngredient/) | Core Input      | Yes      |
| [材料（IIngredient）](/Vanilla/Variable_Types/IIngredient/) | Casing Input    | Yes      |
| IAmmunitionWorkshopFunction                             | Output Function | Yes      |
| int                                                     | Energy          | Yes      |
| int                                                     | Time            | Yes      |

### 语句

```zenscript
mods.immersiveintelligence.AmmunitionWorkshop.addRecipe(IIngredient coreInput, IIngredient casingInput, IAmmunitionWorkshopFunction fun, int energy, int time);
```

### IAmmunitionWorkshopFunction

IAmmunitionWorkshopFunction is a function used to determine the output item of a recipe based on its ingredients.    
For example, It can be used to get the core NBT tag or merge the core and casing's NBT tags.

| 类型                                       | 名称           |
| ---------------------------------------- | ------------ |
| [IItemstack](/Vanilla/Items/IItemStack/) | Core Input   |
| [IItemstack](/Vanilla/Items/IItemStack/) | Casing Input |

Returns: [IItemStack](/Vanilla/Items/IItemStack/)

### 例子

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

| 类型                                       | 名称         | Required |
| ---------------------------------------- | ---------- | -------- |
| [IItemstack](/Vanilla/Items/IItemStack/) | Core Input | Yes      |

### 语句

```zenscript
mods.immersiveintelligence.AmmunitionWorkshop.removeRecipe(IItemStack input);
```

### 例子

```zenscript
mods.immersiveintelligence.AmmunitionWorkshop.removeRecipe(<minecraft:diamond>);
```