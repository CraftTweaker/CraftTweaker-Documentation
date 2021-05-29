::requiredMod[Tinkers' Construct]{builtIn=true modLink=https://www.curseforge.com/minecraft/mc-mods/tinkers-construct}

# Tinkers' Construct Molding Basin

The Molding Basin is a type of [IRecipeManager](/vanilla/api/managers/IRecipeManager) and implements all the methods that are available to IRecipeManager's, such as `removeRecipe()` and `removeAll()`.

## Methoden

#### Rezept hinzufügen

The following script adds a Molding Basin recipe that turns Dirt into a Diamond when it is Molded with Glass. The Glass is not consumed.

```zenscript
// <recipetype:tconstruct:molding_basin>.addRecipe(name as string, material as IIngredient, mold as IIngredient, moldConsumed as boolean, output as IItemStack)

<recipetype:tconstruct:molding_basin>.addRecipe("molding_basin_test", <item:minecraft:dirt>, <item:minecraft:glass>, false, <item:minecraft:diamond>);
```

#### Remove Recipes

The following script removes the Molding Basin recipe that turns Part Sand Casts (Gem Sand Cast, Pickaxe Head Sand Cast, etc) back into a Blank Sand Cast.

NOTE: This script is commented out as there are no default Tinkers recipes that are made in the Molding Basin to remove.

```zenscript
// <recipetype:tconstruct:molding_basin>.removeRecipe(output as IItemStack)

// <recipetype:tconstruct:molding_basin>.removeRecipe(<item:tconstruct:blank_sand_cast>);
```