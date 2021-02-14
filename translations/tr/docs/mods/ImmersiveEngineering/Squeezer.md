::requiredMod[Immersive Engineering]{builtIn=true modLink=https://www.curseforge.com/minecraft/mc-mods/immersive-engineering}

# Immersive Engineering Squeezer

The Squeezer is a type of [IRecipeManager](/vanilla/api/managers/IRecipeManager) and implements all the methods that are available to IRecipeManager's, such as `removeRecipe()` and `removeAll()`.

## Methods

#### Add Item Recipe

The following script will add a recipe that will output Dirt from nine Slag and 9000 IF.

```zenscript
// <recipetype:immersiveengineering:squeezer>.addRecipe(string recipePath, IIngredient input, int energy, IItemStack itemOutput)

<recipetype:immersiveengineering:squeezer>.addRecipe("slag_off", <item:immersiveengineering:slag> * 9, 5000, <item:minecraft:dirt>);
```

#### Add Fluid Recipe

The following script will add a recipe that will output 250Mb of Creosote (Fluid) from 8 Coal and 6000 IF.

```zenscript
// <recipetype:immersiveengineering:squeezer>.addRecipe(string recipePath, IIngredient input, int energy, IFluidStack fluidOutput)

<recipetype:immersiveengineering:squeezer>.addRecipe("the_last_drops", <item:minecraft:coal> * 8, 6000, <fluid:immersiveengineering:creosote> * 250);
```

#### Add Item and Fluid Recipe

The following script will add a recipe that will output 2500Mb of Creosote (Fluid) and a Diamond from 8 Coal Blocks and 6000 IF.

```zenscript
// <recipetype:immersiveengineering:squeezer>.addRecipe(string recipePath, IIngredient input, int energy, IFluidStack fluidOutput, IItemStack itemOutput)

<recipetype:immersiveengineering:squeezer>.addRecipe("pressure_creates_diamonds", <item:minecraft:coal_block> * 8, 6000, <fluid:immersiveengineering:creosote> * 2500, <item:minecraft:diamond>);
```

#### Remove Item Recipes

The follow script will remove all recipes from the Squeezer that output HOP Graphite Dust.

```zenscript
//<recipetype:immersiveengineering:squeezer>.removeRecipe(IItemStack output)

<recipetype:immersiveengineering:squeezer>.removeRecipe(<item:immersiveengineering:dust_hop_graphite>);
```

#### Remove FluidStack Recipes

The follow script will remove all recipes from the Squeezer that output exactly 60Mb of Plant Oil.

```zenscript
// <recipetype:immersiveengineering:squeezer>.removeRecipe(IFluidStack output)

<recipetype:immersiveengineering:squeezer>.removeRecipe(<fluid:immersiveengineering:plantoil> * 60);
```

#### Remove Fluid Recipes

The follow script will remove all recipes from the Squeezer that output any amount of Plant Oil.

```zenscript
// <recipetype:immersiveengineering:squeezer>.removeRecipe(MCFluid output)

<recipetype:immersiveengineering:squeezer>.removeRecipe(<fluid:immersiveengineering:plantoil>.fluid);
```