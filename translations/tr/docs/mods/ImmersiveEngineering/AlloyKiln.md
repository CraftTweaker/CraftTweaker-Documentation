::requiredMod[Immersive Engineering]{builtIn=true modLink=https://www.curseforge.com/minecraft/mc-mods/immersive-engineering}

# Immersive Engineering Alloy Kiln

The Alloy Kiln is a type of [IRecipeManager](/vanilla/api/managers/IRecipeManager) and implements all the methods that are available to IRecipeManager's, such as `removeRecipe()` and `removeAll()`.

## Methods

#### Add Recipe

The following script will add a recipe that will output 2 Gold ingots after 200 ticks when 10 Iron Ingots and any item from the Wool Tag is put in an Alloy Kiln.

```zenscript
// <recipetype:immersiveengineering:alloy>.addRecipe(string recipePath, IIngredient inputA, IIngredient inputB, int time, IItemStack output)

<recipetype:immersiveengineering:alloy>.addRecipe("spin_iron_to_gold", <item:minecraft:iron_ingot> * 10, <tag:items:minecraft:wool>, 200, <item:minecraft:gold_ingot> * 2);
```

#### Remove Recipes

The follow script will remove all recipes from the Alloy Kiln that outputs a Constantan Ingot.

```zenscript
// <recipetype:immersiveengineering:alloy>.removeRecipe(output as IItemStack)

<recipetype:immersiveengineering:alloy>.removeRecipe(<item:immersiveengineering:ingot_constantan>);
```