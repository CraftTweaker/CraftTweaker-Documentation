::requiredMod[Immersive Engineering]{builtIn=true modLink=https://www.curseforge.com/minecraft/mc-mods/immersive-engineering}

# Immersive Engineering Coke Oven

The Coke Oven is a type of [IRecipeManager](/vanilla/api/managers/IRecipeManager) and implements all the methods that are available to IRecipeManager's, such as `removeRecipe()` and `removeAll()`.

## Methods

#### Add Recipe

The following script will add a recipe to the Coke Oven that, after 100 ticks, will output a Treated Stick and 1Mb of Creosote (Fluid) with an input of a Stick.
```zenscript
// <recipetype:immersiveengineering:coke_oven>.addRecipe(string recipePath, IIngredient ingredient, int time, IItemStack output, @Optional(0) int creosoteProduced)

<recipetype:immersiveengineering:coke_oven>.addRecipe("burn_a_stick", <item:minecraft:stick>, 100, <item:immersiveengineering:stick_treated>, 1);
```

#### Remove Recipes

The follow script will remove all recipes from the Coke Oven that output Coal Coke.

```zenscript
// <recipetype:immersiveengineering:coke_oven>.removeRecipe(IItemStack fuel)

<recipetype:immersiveengineering:coke_oven>.removeRecipe(<item:immersiveengineering:coal_coke>);
```