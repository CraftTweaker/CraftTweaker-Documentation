::requiredMod[Immersive Engineering]{builtIn=true modLink=https://www.curseforge.com/minecraft/mc-mods/immersive-engineering}

# Immersive Engineering Refinery

The Refinery is a type of [IRecipeManager](/vanilla/api/managers/IRecipeManager) and implements all the methods that are available to IRecipeManager's, such as `removeRecipe()` and `removeAll()`.

## Methods

#### Add Recipe

The following script will add a recipe to the Refinery that will output 10Mb of Herbicide (Fluid) out of 10Mb of Water (Fluid) and 1Mb of Ethanol and 1000 IF.

```zenscript
// <recipetype:immersiveengineering:refinery>.addRecipe(string recipePath, MCTagWithAmount<MCFluid> fluidInput1, MCTagWithAmount<MCFluid> fluidInput2, int energy, IFluidStack output)

<recipetype:immersiveengineering:refinery>.addRecipe("refine_herbicide", <tag:fluids:minecraft:water> * 10, <tag:fluids:forge:ethanol> * 1, 1000, <fluid:immersiveengineering:herbicide> * 10);
```

#### Remove FluidStack Recipes

The follow script will remove all recipes from the Refinery that output exactly 16Mb of Biodesiel.

```zenscript
// <recipetype:immersiveengineering:refinery>.removeRecipe(IFluidStack output)

<recipetype:immersiveengineering:refinery>.removeRecipe(<fluid:immersiveengineering:biodiesel> * 16);
```

#### Remove Fluid Recipes

The follow script will remove all recipes from the Refinery that output any amount of Biodesiel.

```zenscript
// <recipetype:immersiveengineering:refinery>.removeRecipe(MCFluid output)

<recipetype:immersiveengineering:refinery>.removeRecipe(<fluid:immersiveengineering:biodiesel>.fluid);
```