# Botania Mana Infusion

Mana Infusion is a type of [IRecipeManager](/vanilla/api/managers/IRecipeManager) and implements all the methods that are available to IRecipeManager's, such as `removeRecipe()` and `removeAll()`.

## Methods

#### Add Recipe

The follow script will add two Mana Infusion recipes, the recipes will do the following:

1) When an Enchanted Golden Apple is given to a Mana Pool, a piece of Dirt will be given back. 2) When an Apple is given to a Mana Pool with a Diamond Block beneath it, a Diamond will be given back.

```zenscript
// <recipetype:botania:mana_infusion>.addRecipe(String name, IItemStack output, IIngredient input, int mana, @Optional BlockState catalystState)

<recipetype:botania:mana_infusion>.addRecipe("mana_infusion_test", <item:minecraft:dirt>, <item:minecraft:enchanted_golden_apple>, 200);
<recipetype:botania:mana_infusion>.addRecipe("mana_infusion_test_catalyst", <item:minecraft:diamond>, <item:minecraft:apple>, 200, <blockstate:minecraft:diamond_block>);
```

#### Remove Recipes

The follow script will remove all Mana Infusion recipes that output an Apple

```zenscript
// <recipetype:botania:mana_infusion>.removeRecipe(IItemStack output);

<recipetype:botania:mana_infusion>.removeRecipe(<item:minecraft:apple>);
```
