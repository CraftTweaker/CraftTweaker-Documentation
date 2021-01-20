# Create Cutting

### This support is added by [CreateTweaker](https://www.curseforge.com/minecraft/mc-mods/createtweaker), you need [CreateTweaker](https://www.curseforge.com/minecraft/mc-mods/createtweaker) for this to work.

The Cutting mechanic is a type of [IRecipeManager](/vanilla/api/managers/IRecipeManager) and implements all the methods that are available to IRecipeManager's, such as `removeRecipe()` and `removeAll()`.

## Methods

#### Add Recipe

The following script will add a recipe that will output a Diamond when a piece of Glass is cut.

```zenscript
// <recipetype:create:cutting>.addRecipe(String name, IItemStack output, IIngredient input)
<recipetype:create:cutting>.addRecipe("cutting_test", <item:minecraft:diamond>, <item:minecraft:glass>);
```

#### Remove Recipes

The follow script will remove all Cutting recipes that output a Stripped Jungle Wood.

```zenscript
// <recipetype:create:cutting>.removeRecipe(IItemStack output);
<recipetype:create:cutting>.removeRecipe(<item:minecraft:stripped_jungle_wood>);
```


