::requiredMod[Create]{builtIn=false modLink=https://www.curseforge.com/minecraft/mc-mods/create requiredMod=CreateTweaker requiredModLink=https://www.curseforge.com/minecraft/mc-mods/createtweaker}

# Create Compacting

The Compacting mechanic is a type of [IRecipeManager](/vanilla/api/managers/IRecipeManager) and implements all the methods that are available to IRecipeManager's, such as `removeRecipe()` and `removeAll()`.

## Methods

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

1) Output an Arrow when a Diamond and an Apple are Compacted with no heat and a duration of 200. 2) Output a Brick when a Diamond, Dirt and Lava (fluid) are Compacted with "heated" heat and a duration of 1000. 3) Output Paper when Glass, Dirt and Lava (fluid) are Compacted with "superheated" heat and a duration of 100.

```zenscript
// <recipetype:create:compacting>.addRecipe(String name, String heat, IItemStack output, IIngredient[] itemInputs, @Optional IFluidStack[] fluidInputs, @Optional(100) int duration)

<recipetype:create:compacting>.addRecipe("compacting_test_1", "none", <item:minecraft:arrow>, [<item:minecraft:diamond>, <item:minecraft:apple>]. [], 200);
<recipetype:create:compacting>.addRecipe("compacting_test_2", "heated", <item:minecraft:brick>, [<item:minecraft:diamond>, <item:minecraft:dirt>], [<fluid:minecraft:lava>], 1000);
<recipetype:create:compacting>.addRecipe("compacting_test_3", "superheated", <item:minecraft:paper>, [<item:minecraft:glass>, <item:minecraft:dirt>], [<fluid:minecraft:lava>]);
```

#### Add Recipe with a Fluid output

The following script will add recipes that will output Water (fluid) when Paper, a Stick and Lava are Compacted with a duration of 500.

```zenscript
// <recipetype:create:compacting>.addRecipe(String name, String heat, IItemStack output, IIngredient[] itemInputs, @Optional IFluidStack[] fluidInputs, @Optional(100) int duration)

<recipetype:create:compacting>.addRecipe("compacting_test_4", "superheated", <fluid:minecraft:water>, [<item:minecraft:paper>, <item:minecraft:stick>], [<fluid:minecraft:lava>], 500);
```

#### Remove Recipes for Items

The follow script will remove all Compacting recipes that output a Bar Of Chocolate.

```zenscript
// <recipetype:create:compacting>.removeRecipe(IItemStack output)

<recipetype:create:compacting>.removeRecipe(<item:create:bar_of_chocolate>);
```


#### Remove Recipes for Fluids

The follow script will remove all Compacting recipes that output Water (Fluid)

```zenscript
// <recipetype:create:compacting>.removeRecipe(IFluidStack output)

<recipetype:create:compacting>.removeRecipe(<fluid:minecraft:water>);
```