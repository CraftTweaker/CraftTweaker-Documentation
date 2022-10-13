::requiredMod[Blood Magic]{builtIn=true modLink=https://www.curseforge.com/minecraft/mc-mods/blood-magic}

# Blood Magic Alchemie Reaktionskammer / ARC

Die Alchemistische Reaktionskammer oder ARC ist vom Typ [IRecipeManager](/vanilla/api/managers/IRecipeManager) und implementiert alle Methoden, die IRecipeManager zur Verfügung stehen wie `removeRecipe()` und `removeAll()`.

## Methoden

#### Rezept hinzufügen

Das folgende Skript wird dem ARC mehrere Rezepte hinzufügen. Hier sollten alle Grundlagen beschrieben sein.

```zenscript
// <recipetype:bloodmagic:arc>addRecipe(name as string, output as IItemStack, outputFluid as IFluidStack, input as IIngredient, inputFluid as IFluidStack, arcTool as IIngredient, consumeIngredient as boolean, addedItems as @Optional MCWeightedItemStack[])

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

The following script will remove all recipes from the ARC that output a Weak Blood Shard.

```zenscript
// <recipetype:bloodmagic:arc>.removeRecipe(output as IItemStack);

<recipetype:bloodmagic:arc>.removeRecipe(<item:bloodmagic:weakbloodshard>);
```