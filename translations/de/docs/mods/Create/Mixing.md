::requiredMod[Create]{builtIn=false modLink=https://www.curseforge.com/minecraft/mc-mods/create requiredMod=CreateTweaker requiredModLink=https://www.curseforge.com/minecraft/mc-mods/createtweaker}

# Create Mixing

The Mixing mechanic is a type of [IRecipeManager](/vanilla/api/managers/IRecipeManager) and implements all the methods that are available to IRecipeManager's, such as `removeRecipe()` and `removeAll()`.

## Methoden

### Heat Types

Create has three different "heat" types that are used in recipes. which are the following:

```plaintext
none
heated
superheated
```

You can use any of those heat values when the recipe calls for "heat"

#### Add Recipe with an Item output

The following script will add recipes that will:

1) Output an Arrow when a Diamond and an Apple are Mixed with no heat with a duration of 100. 2) Output a Brick when a Diamond, Dirt and Lava (fluid) are Mixed with "heated" heat with a duration of 100. 3) Output Water (fluid) when Glass, Dirt and Lava (fluid) are Mixed with "superheated" heat with a duration of 100.

```zenscript
// <recipetype:create:mixing>.addRecipe(String name, String heat, IItemStack output, IIngredient[] itemInputs, @Optional IFluidStack[] fluidInputs, @Optional(100) int duration)

// <recipetype:create:mixing>.addRecipe(String name, String heat, IFluidStack output, IIngredient[] itemInputs, @Optional IFluidStack[] fluidInputs, @Optional(100) int duration)

<recipetype:create:mixing>.addRecipe("mixing_test_1", "none", <item:minecraft:arrow>, [<item:minecraft:diamond>, <item:minecraft:apple>]);
<recipetype:create:mixing>.addRecipe("mixing_test_2", "heated", <item:minecraft:brick>, [<item:minecraft:diamond>, <item:minecraft:dirt>], [<fluid:minecraft:lava>]);
<recipetype:create:mixing>.addRecipe("mixing_test_3", "superheated", <fluid:minecraft:water>, [<item:minecraft:glass>, <item:minecraft:dirt>], [<fluid:minecraft:lava>]);
```

#### Remove Recipes

The follow script will remove all Mixing recipes that output Andesite Alloy.

```zenscript
// <recipetype:create:mixing>.removeRecipe(IItemStack output)

<recipetype:create:mixing>.removeRecipe(<item:create:andesite_alloy>);
```



