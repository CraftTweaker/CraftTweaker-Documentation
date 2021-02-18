::requiredMod[Immersive Engineering]{builtIn=true modLink=https://www.curseforge.com/minecraft/mc-mods/immersive-engineering}

# Immersive Engineering Mixer

The Mixer is a type of [IRecipeManager](/vanilla/api/managers/IRecipeManager) and implements all the methods that are available to IRecipeManager's, such as `removeRecipe()` and `removeAll()`.

## Methods

#### Add Recipe

The following script will add a recipe that will output 8000Mb of Creosote (Fluid) when an Oak Sapling, four Bone Meal, a bucket of Creosote and 8000Mb of Water (Fluid) is put into a Mixer.

```zenscript
// <recipetype:immersiveengineering:mixer>.addRecipe(String recipePath, MCTag<MCFluid> fluidInput , IIngredientWithAmount[] IIngredientinputItems, int energy, MCFluid output, int amount)

<recipetype:immersiveengineering:mixer>.addRecipe("grow_creosote_oil", <tag:fluids:minecraft:water>, [<item:minecraft:oak_sapling>, <item:minecraft:bone_meal> * 4, <item:immersiveengineering:creosote_bucket>], 5000, <fluid:immersiveengineering:creosote>, 8000);
```

#### Remove FluidStack Recipes

The follow script will remove all recipes from the Mixer that output exactly 500Mb of Concrete (Fluid).

```zenscript
// <recipetype:immersiveengineering:mixer>.removeRecipe(IFluidStack output)

<recipetype:immersiveengineering:mixer>.removeRecipe(<fluid:immersiveengineering:concrete> * 500);
```

#### Remove Fluid Recipes

The follow script will remove all recipes from the Mixer that output any amount of Concrete (Fluid).

```zenscript
// <recipetype:immersiveengineering:mixer>.removeRecipe(MCFluid output)

<recipetype:immersiveengineering:mixer>.removeRecipe(<fluid:immersiveengineering:concrete>.fluid);
```

#### Remove Potion Recipes

Potion Recipes are hardcoded in, the only way to remove them it to remove all of them at once, and is done like so.

```zenscript
<recipetype:immersiveengineering:mixer>.removeByName("immersiveengineering:mixer_potion_list");
```