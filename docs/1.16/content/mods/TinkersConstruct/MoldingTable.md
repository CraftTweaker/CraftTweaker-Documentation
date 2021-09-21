::requiredMod[Tinkers' Construct]{builtIn=true modLink=https://www.curseforge.com/minecraft/mc-mods/tinkers-construct}

# Tinkers' Construct Molding Table

The Molding Table is a type of [IRecipeManager](/vanilla/api/managers/IRecipeManager) and implements all the methods that are available to IRecipeManager's, such as `removeRecipe()` and `removeAll()`.

## Methods

#### Add Recipe

The following script adds a Molding Table recipe that turns Glass into a Stick when it is Molded with Dirt. The Dirt is not consumed.

```zenscript
// <recipetype:tconstruct:molding_table>.addRecipe(name as string, material as IIngredient, mold as IIngredient, moldConsumed as boolean, output as IItemStack)

<recipetype:tconstruct:molding_table>.addRecipe("molding_table_test", <item:minecraft:glass>, <item:minecraft:dirt>, false, <item:minecraft:stick>);
```

#### Remove Recipes

The following script removes the Molding Table recipe that turns Part Red Sand Casts (Gem Red Sand Cast, Pickaxe Head Red Sand Cast, etc) back into a Blank Red Sand Cast.

```zenscript
// <recipetype:tconstruct:molding_table>.removeRecipe(output as IItemStack)

<recipetype:tconstruct:molding_table>.removeRecipe(<item:tconstruct:blank_red_sand_cast>);
```