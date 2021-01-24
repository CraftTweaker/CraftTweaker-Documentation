::requiredMod[Create]{buildIn=false modLink=https://www.curseforge.com/minecraft/mc-mods/create requiredMod=CreateTweaker requiredModLink=https://www.curseforge.com/minecraft/mc-mods/createtweaker}

# Create Compacting

The Compacting mechanic is a type of [IRecipeManager](/vanilla/api/managers/IRecipeManager) and implements all the methods that are available to IRecipeManager's, such as `removeRecipe()` and `removeAll()`.

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

1) Output an Arrow when a Diamond and an Apple are Compacted with no heat. 2) Output a Brick when a Diamond, Dirt and Lava (fluid) are Compacted with "heated" heat. 3) Output Paper when Glass, Dirt and Lava (fluid) are Compacted with "superheated" heat.

```zenscript
// <recipetype:create:compacting>.addRecipe(String name, String heat, IItemStack output, IIngredient[] itemInputs, @ZenCodeType.Optional IFluidStack[] fluidInputs)
<recipetype:create:compacting>.addRecipe("compacting_test_1", "none", <item:minecraft:arrow>, [<item:minecraft:diamond>, <item:minecraft:apple>]);
<recipetype:create:compacting>.addRecipe("compacting_test_2", "heated", <item:minecraft:brick>, [<item:minecraft:diamond>, <item:minecraft:dirt>], [<fluid:minecraft:lava>]);
<recipetype:create:compacting>.addRecipe("compacting_test_3", "superheated", <item:minecraft:paper>, [<item:minecraft:glass>, <item:minecraft:dirt>], [<fluid:minecraft:lava>]);
```

#### Add Recipe with a Fluid output

The following script will add recipes that will output Water (fluid) when Paper, a Stick and Lava are Compacted.

```zenscript
// <recipetype:create:compacting>.addRecipe(String name, String heat, IItemStack output, IIngredient[] itemInputs, @ZenCodeType.Optional IFluidStack[] fluidInputs)
<recipetype:create:compacting>.addRecipe("compacting_test_4", "superheated", <fluid:minecraft:water>, [<item:minecraft:paper>, <item:minecraft:stick>], [<fluid:minecraft:lava>]);
```

#### Remove Recipes

The follow script will remove all Compacting recipes that output a Bar Of Chocolate.

```zenscript
// <recipetype:create:compacting>.removeRecipe(IItemStack output);
<recipetype:create:compacting>.removeRecipe(<item:create:bar_of_chocolate>);
```