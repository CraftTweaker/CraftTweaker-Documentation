::requiredMod[Cyclic]{builtIn=true modLink=https://www.curseforge.com/minecraft/mc-mods/cyclic}

# Cyclic Solidifier

The Solidifier is a type of [IRecipeManager](/vanilla/api/managers/IRecipeManager) and implements all the methods that are available to IRecipeManager's, such as `removeRecipe()` and `removeAll()`.

## 方法

#### 添加配方

The following script will add a recipe that will output 4 Stone when Gravel, Dirt and Cobblestone are Solidified using 200Mb of Lava (Fluid).

```zenscript
// <recipetype:cyclic:solidifier>.addRecipe(String name, IIngredient inputFirst, IIngredient inputSecond, IIngredient inputThird, IFluidStack fluid, IItemStack output)

<recipetype:cyclic:solidifier>.addRecipe("change_this_everytime", <item:minecraft:gravel>, <item:minecraft:dirt>, <item:minecraft:cobblestone>, <fluid:minecraft:lava> * 200, <item:minecraft:stone> * 4);
```

#### Remove Recipes

The following script will remove the Solifider recipe for Cyan Concrete.

```zenscript
// <recipetype:cyclic:solidifier>.removeRecipe(String name);

<recipetype:cyclic:solidifier>.removeRecipe("cyclic:solidifier_conc_cyan");
```