# Create Filling

### This support is added by [CreateTweaker](https://www.curseforge.com/minecraft/mc-mods/createtweaker), you need [CreateTweaker](https://www.curseforge.com/minecraft/mc-mods/createtweaker) for this to work.

The Filling mechanic is a type of [IRecipeManager](/vanilla/api/managers/IRecipeManager) and implements all the methods that are available to IRecipeManager's, such as `removeRecipe()` and `removeAll()`.

## Methoden

#### Rezept hinzufügen

The following script will add a recipe that will output a Diamond when a piece of Dirt is Filled with Lava (fluid).

```zenscript
// <recipetype:create:filling>.addRecipe(String name, IItemStack output, IIngredient inputContainer, IFluidStack inputFluid)
<recipetype:create:filling>.addRecipe("filling_test", <item:minecraft:diamond>, <item:minecraft:dirt>, <fluid:minecraft:lava>);
```

#### Remove Recipes

The follow script will remove all Filling recipes that output Redstone.

```zenscript
// <recipetype:create:filling>.removeRecipe(IItemStack output);
<recipetype:create:filling>.removeRecipe(<item:minecraft:redstone>);
```