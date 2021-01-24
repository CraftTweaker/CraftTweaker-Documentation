::requiredMod[Create]{buildIn=false modLink=https://www.curseforge.com/minecraft/mc-mods/create requiredMod=CreateTweaker requiredModLink=https://www.curseforge.com/minecraft/mc-mods/createtweaker}

# Create Emptying

The Emptying mechanic is a type of [IRecipeManager](/vanilla/api/managers/IRecipeManager) and implements all the methods that are available to IRecipeManager's, such as `removeRecipe()` and `removeAll()`.

## Methods

#### Add Recipe

The following script will add a recipe that will output a Diamond and Lava (fluid) when a piece of Dirt is Emptied.

```zenscript
// <recipetype:create:emptying>.addRecipe(String name, IItemStack outputItem, IFluidStack outputFluid, IIngredient inputContainer)
<recipetype:create:emptying>.addRecipe("emptying_test", <item:minecraft:diamond>, <fluid:minecraft:lava>, <item:minecraft:dirt>);
```

#### Remove Recipes

The follow script will remove all Emptying recipes that output a Bucket.

```zenscript
// <recipetype:create:emptying>.removeRecipe(IItemStack output);
<recipetype:create:emptying>.removeRecipe(<item:minecraft:bucket>);
```



