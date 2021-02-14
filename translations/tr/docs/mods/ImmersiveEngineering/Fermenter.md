::requiredMod[Immersive Engineering]{builtIn=true modLink=https://www.curseforge.com/minecraft/mc-mods/immersive-engineering}

# Immersive Engineering Fermenter

The Fermenter is a type of [IRecipeManager](/vanilla/api/managers/IRecipeManager) and implements all the methods that are available to IRecipeManager's, such as `removeRecipe()` and `removeAll()`.

## Methods

#### Add Fluid Recipes

The following script will add a recipe to the Fermenter that will take a Wooden Hoe, 1000 IF and output 100Mb of Water (Fluid).

```zenscript
//<recipetype:immersiveengineering:fermenter>.addRecipe(string name, IIngredient input, int energy, IFluidStack fluidOutput)

<recipetype:immersiveengineering:fermenter>.addRecipe("fermenter_extract_water", <item:minecraft:wooden_hoe>, 1000, <fluid:minecraft:water> * 100);
```

#### Add Item Recipes

The following script will add a recipe to the Fermenter that will take a Wooden Shovel, 1000 IF and output a Stone Shovel.

```zenscript
// <recipetype:immersiveengineering:fermenter>.addRecipe(string name, IIngredient input, int energy, IItemStack itemOutput)

<recipetype:immersiveengineering:fermenter>.addRecipe("fermenter_upgrade_hoe", <item:minecraft:wooden_shovel>, 1000, <item:minecraft:stone_shovel>);
```

#### Add Item and Fluid Recipes

The following script will add a recipe to the Fermenter that will take a Wooden Sword, 1000 IF and output a Stone Sword and 100Mb of Water.

```zenscript
//<recipetype:immersiveengineering:fermenter>.addRecipe(name as string, input as IIngredient, energy as int, itemOutput as IItemStack, fluidOutput as IFluidStack)

<recipetype:immersiveengineering:fermenter>.addRecipe("fermenter_upgrade_sword", <item:minecraft:wooden_sword>, 1000, <item:minecraft:stone_sword>, <fluid:minecraft:water> * 100);
```

#### Remove Fluid Recipes

The follow script will remove all recipes from the Fermenter output Ethanol (Fluid). Note that with Immersive Engineering on it's own, this will remove all the default recipes.

```zenscript
<recipetype:immersiveengineering:fermenter>.removeRecipe(MCFluid output)

<recipetype:immersiveengineering:fermenter>.removeRecipe(<fluid:immersiveengineering:ethanol>.fluid);
```

#### Remove Item Recipes

The follow script will remove all recipes from the Fermenter that outputs a Stone Shovel. Note that with Immersive Engineering on it's own, there is no recipe that outputs an Item, the example provided will only exist if the recipe is added beforehand.

```zenscript
// <recipetype:immersiveengineering:fermenter>.removeRecipe(IItemStack output)

<recipetype:immersiveengineering:fermenter>.removeRecipe(<item:minecraft:stone_shovel>);
```