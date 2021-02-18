::requiredMod[Create]{builtIn=false modLink=https://www.curseforge.com/minecraft/mc-mods/create requiredMod=CreateTweaker requiredModLink=https://www.curseforge.com/minecraft/mc-mods/createtweaker}

# Create Mechanical Crafter

The Mechanical Crafter is a type of [IRecipeManager](/vanilla/api/managers/IRecipeManager) and implements all the methods that are available to IRecipeManager's, such as `removeRecipe()` and `removeAll()`.

## Methods

#### Add Recipe

The following script will add a recipe that will output a Diamond when 3 sticks are put in the given pattern in the Mechanical Crafter.

```zenscript
// <recipetype:create:mechanical_crafting>.addRecipe(String name, IItemStack output, IIngredient[][] ingredients)

<recipetype:create:mechanical_crafting>.addRecipe("mechanical_crafter_test", <item:minecraft:diamond>, [[<item:minecraft:stick>, <item:minecraft:air>, <item:minecraft:stick>], [<item:minecraft:air>, <item:minecraft:stick>, <item:minecraft:air>]]);
```

#### Remove Recipes

The follow script will remove all Mechanical Crafter recipes that output a Flywheel.

```zenscript
// <recipetype:create:mechanical_crafting>.removeRecipe(IItemStack output)

<recipetype:create:mechanical_crafting>.removeRecipe(<item:create:flywheel>);
```
