::requiredMod[PneumaticCraft: Repressurized]{builtIn=true modLink=https://www.curseforge.com/minecraft/mc-mods/pneumaticcraft-repressurized}

Requires PneumaticCraft: Repressurized v2.12.6 or newer.

# Pressure Chamber

The Pressure Chamber is a type of [IRecipeManager](/vanilla/api/managers/IRecipeManager) and implements all the methods that are available to IRecipeManager's, such as `removeRecipe()` and `removeAll()`.

## Methoden

#### Rezept hinzufügen

Pressure Chamber recipes require a list of input item ingredients, a list of output items, and a minimum pressure. If the supplied pressure is negative, the chamber's pressure must be *below* that pressure, i.e. it is the absolute value of the pressure that is considered.

The following script adds a recipe to convert a Diamond and 4 Slime Balls into an Emerald, requiring 4.0 bar of pressure:

```zenscript
// <recipetype:pneumaticcraft:pressure_chamber>.addRecipe(name as string, input as IIngredientWithAmount[], outputs as IItemStack, pressure as float)
<recipetype:pneumaticcraft:pressure_chamber>.addRecipe("diamond_to_emerald", [<tag:forge:gems/diamond>, <tag:items:forge:slimeballs> * 4], [<item:minecraft:emerald>], 4.0);
```

#### Remove Recipes

The following script will remove all Pressure Chamber recipes:

```zenscript
<recipetype:pneumaticcraft:pressure_chamber>.removeAll();
```

