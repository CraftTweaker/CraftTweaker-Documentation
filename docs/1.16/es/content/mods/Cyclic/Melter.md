::requiredMod[Cyclic]{builtIn=true modLink=https://www.curseforge.com/minecraft/mc-mods/cyclic}

# Cyclic Melter

The Melter is a type of [IRecipeManager](/vanilla/api/managers/IRecipeManager) and implements all the methods that are available to IRecipeManager's, such as `removeRecipe()` and `removeAll()`.

## Methods

#### Add Recipe

The following script will add a recipe that will output a 222Mb of Water (Fluid) when a Stick and Dirt is Melted.

```zenscript
// <recipetype:cyclic:melter>.addRecipe(String name, IIngredient inputFirst, IIngredient inputSecond, IFluidStack fluidStack)

<recipetype:cyclic:melter>.addRecipe("ct_water", <item:minecraft:stick>, <item:minecraft:dirt>, <fluid:minecraft:water> * 222);
```

#### Remove Recipes

The following script will remove the Melting recipe for water from 2 Snow Blocks

```zenscript
// <recipetype:cyclic:melter>.removeRecipe(String name);

<recipetype:cyclic:melter>.removeRecipe("cyclic:melter_snowwater");
```