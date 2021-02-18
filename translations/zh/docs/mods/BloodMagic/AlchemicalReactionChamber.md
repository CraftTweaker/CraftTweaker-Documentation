::requiredMod[Blood Magic]{builtIn=true modLink=https://www.curseforge.com/minecraft/mc-mods/blood-magic}

# Blood Magic Alchemical Reaction Chamber / ARC

The Alchemical Reaction Chamber or ARC is a type of [IRecipeManager](/vanilla/api/managers/IRecipeManager) and implements all the methods that are available to IRecipeManager's, such as `removeRecipe()` and `removeAll()`.

## 方法

#### 添加配方

The following script will add multiple recipes to the ARC, it should cover all the bases of what is possible

```zenscript
// <recipetype:bloodmagic:arc>addRecipe(String name, IItemStack output, IFluidStack outputFluid, IIngredient input, IFluidStack inputFluid, IIngredient arcTool, boolean consumeIngredient, @Optional MCWeightedItemStack[] addedItems)

<recipetype:bloodmagic:arc>.addRecipe("arc_recipe_test_all", <item:minecraft:glass>, <fluid:minecraft:lava>, <item:minecraft:diamond>, <fluid:minecraft:water>, <item:bloodmagic:basiccuttingfluid>.anyDamage(), false, [<item:minecraft:apple> % 50]);
<recipetype:bloodmagic:arc>.addRecipe("arc_recipe_test_no_extras", <item:minecraft:diamond>, <fluid:minecraft:lava>, <item:minecraft:dirt>, <fluid:minecraft:water>, <item:bloodmagic:basiccuttingfluid>.anyDamage(), false);
<recipetype:bloodmagic:arc>.addRecipe("arc_recipe_test_no_fluid_output", <item:minecraft:diamond>, <fluid:minecraft:lava>, <item:minecraft:glass>, <fluid:minecraft:empty>, <item:bloodmagic:basiccuttingfluid>.anyDamage(), false);
<recipetype:bloodmagic:arc>.addRecipe("arc_recipe_test_no_fluid_input", <item:minecraft:diamond>, <fluid:minecraft:empty>, <item:minecraft:apple>, <fluid:minecraft:water>, <item:bloodmagic:basiccuttingfluid>.anyDamage(), false);

<recipetype:bloodmagic:arc>.addRecipe("arc_recipe_test_all_consume", <item:minecraft:stick>, <fluid:minecraft:lava>, <item:minecraft:water_bucket>, <fluid:minecraft:water>, <item:bloodmagic:basiccuttingfluid>.anyDamage(), true, [<item:minecraft:apple> % 50]);
<recipetype:bloodmagic:arc>.addRecipe("arc_recipe_test_no_extras_consume", <item:minecraft:arrow>, <fluid:minecraft:lava>,<item:minecraft:pufferfish_bucket>, <fluid:minecraft:water>, <item:bloodmagic:basiccuttingfluid>.anyDamage(), true);
<recipetype:bloodmagic:arc>.addRecipe("arc_recipe_test_no_fluid_output_consume", <item:minecraft:shield>, <fluid:minecraft:lava>, <item:minecraft:lava_bucket>, <fluid:minecraft:empty>, <item:bloodmagic:basiccuttingfluid>.anyDamage(), true);
<recipetype:bloodmagic:arc>.addRecipe("arc_recipe_test_no_fluid_input_consume", <item:minecraft:stone>, <fluid:minecraft:empty>, <item:minecraft:water_bucket>, <fluid:minecraft:water>, <item:bloodmagic:basiccuttingfluid>.anyDamage(), true);
```

#### Remove Recipes

The follow script will remove all recipes from the ARC that output a Weak Blood Shard.

```zenscript
// <recipetype:bloodmagic:arc>.removeRecipe(IItemStack output);

<recipetype:bloodmagic:arc>.removeRecipe(<item:bloodmagic:weakbloodshard>);
```