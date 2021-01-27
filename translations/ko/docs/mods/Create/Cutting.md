::requiredMod[Create]{builtIn=false modLink=https://www.curseforge.com/minecraft/mc-mods/create requiredMod=CreateTweaker requiredModLink=https://www.curseforge.com/minecraft/mc-mods/createtweaker}

# Create Cutting

The Cutting mechanic is a type of [IRecipeManager](/vanilla/api/managers/IRecipeManager) and implements all the methods that are available to IRecipeManager's, such as `removeRecipe()` and `removeAll()`.

## Methods

#### Add Recipe

The following script will add a recipe that will output a Diamond when a piece of Glass is cut with a duration of 100.

```zenscript
// <recipetype:create:cutting>.addRecipe(String name, IItemStack output, IIngredient input, @Optional(100) int duration)

<recipetype:create:cutting>.addRecipe("cutting_test", <item:minecraft:diamond>, <item:minecraft:glass>);
```

#### Remove Recipes

The follow script will remove all Cutting recipes that output a Stripped Jungle Wood.

```zenscript
// <recipetype:create:cutting>.removeRecipe(IItemStack output)

<recipetype:create:cutting>.removeRecipe(<item:minecraft:stripped_jungle_wood>);
```


