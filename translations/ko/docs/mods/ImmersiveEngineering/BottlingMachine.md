::requiredMod[Immersive Engineering]{builtIn=true modLink=https://www.curseforge.com/minecraft/mc-mods/immersive-engineering}

# Immersive Engineering Bottling Machine

The Bottling Machine is a type of [IRecipeManager](/vanilla/api/managers/IRecipeManager) and implements all the methods that are available to IRecipeManager's, such as `removeRecipe()` and `removeAll()`.

## Methods

#### Add Recipe

The following script will add a recipe to the Bottling Machine that will use a Stick, 250Mb of any Fluid in the Water Fluid Tag and output a Wooden Pickaxe.

```zenscript
// <recipetype:immersiveengineering:bottling_machine>.addRecipe(string recipePath, IIngredient itemInput, MCTagWithAmount<Fluid> fluidTag, IItemStack output)

<recipetype:immersiveengineering:bottling_machine>.addRecipe("grow_a_pick", <item:minecraft:stick>, <tag:fluids:minecraft:water> * 250, <item:minecraft:wooden_pickaxe>);
```

#### Remove Recipes

The follow script will remove all recipes from the Bottling Machine that output a Wet Sponge.

```zenscript
// <recipetype:immersiveengineering:bottling_machine>.removeRecipe(IItemStack output)

<recipetype:immersiveengineering:bottling_machine>.removeRecipe(<item:minecraft:wet_sponge>);
```