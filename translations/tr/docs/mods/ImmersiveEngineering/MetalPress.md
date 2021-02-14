::requiredMod[Immersive Engineering]{builtIn=true modLink=https://www.curseforge.com/minecraft/mc-mods/immersive-engineering}

# Immersive Engineering Metal Press

The Metal Press is a type of [IRecipeManager](/vanilla/api/managers/IRecipeManager) and implements all the methods that are available to IRecipeManager's, such as `removeRecipe()` and `removeAll()`.

## Methods

#### Add Recipe

The following script will add a recipe to the MEtal Press that will take Paper, use the Engineer's Manual as a Mold, use 1000 IF and output an Engineer's Manual.

```zenscript
// <recipetype:immersiveengineering:metal_press>.addRecipe(String recipePath, IIngredient input, IItemStack mold, int energy, IItemStack output)

<recipetype:immersiveengineering:metal_press>.addRecipe("copy_manual", <item:minecraft:paper>, <item:immersiveengineering:manual>, 1000, <item:immersiveengineering:manual>);

```

#### Remove Recipes

The follow script will remove all recipes from the Metal Press that output two Empty Casing.

```zenscript
// <recipetype:immersiveengineering:metal_press>.removeRecipe(IItemStack output)

<recipetype:immersiveengineering:metal_press>.removeRecipe(<item:immersiveengineering:empty_casing> * 2);
```