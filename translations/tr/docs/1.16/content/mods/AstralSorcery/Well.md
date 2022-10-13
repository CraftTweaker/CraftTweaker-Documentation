::requiredMod[Astral Sorcery]{builtIn=true modLink=https://www.curseforge.com/minecraft/mc-mods/astral-sorcery}

# Astral Sorcery Well

The Well is a type of [IRecipeManager](/vanilla/api/managers/IRecipeManager) and implements all the methods that are available to IRecipeManager's, such as `removeRecipe()` and `removeAll()`.

## Methods

#### Add Recipe

The following script adds two new Liquid Interaction recipes.

The following script adds a Lightwell recipe that produces Water (Fluid) when any Item from the Wool Tag is given to the well.

The recipe has a productionMultiplier of 500, so it produces a lot of Water very quickly, however because it has a shatterMultiplier of 0.01, the item is consumed very quickly as well.

The color at the end is optional, if left out it will default to white but you can use it to change what colour the particles are that the light well produces.

The format is a decimal integer, but ZenScript supports hex format, so you can do `0xFFFFFF` for white instead of having to type `16777215`.

```zenscript
// <recipetype:astralsorcery:well>.addRecipe(name as string, output as MCFluid, input as IIngredient, productionMultiplier as float, shatterMultiplier as float, @Optional int color)

<recipetype:astralsorcery:well>.addRecipe("well_test", <fluid:minecraft:water>, <tag:items:minecraft:wool>, 500, 0.01, 0xFF55FF);
```

#### Remove Recipes

The following script will do the following:

1) Removes the all recipes from the Lightwell that output Water (Fluid). 2) Removes the recipe for Starlight Aquamarine.

```zenscript
// <recipetype:astralsorcery:well>.removeRecipe(output as IFluidStack)
// <recipetype:astralsorcery:well>.removeByName(name as string)

<recipetype:astralsorcery:well>.removeRecipe(<fluid:minecraft:water>);
<recipetype:astralsorcery:well>.removeByName("astralsorcery:lightwell/starlight_aquamarine");
```