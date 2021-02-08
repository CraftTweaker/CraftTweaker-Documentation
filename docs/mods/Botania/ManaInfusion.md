::requiredMod[Botania]{builtIn=true modLink=https://www.curseforge.com/minecraft/mc-mods/botania}

# Botania Mana Infusion

Mana Infusion is a type of [IRecipeManager](/vanilla/api/managers/IRecipeManager) and implements all the methods that are available to IRecipeManager's, such as `removeRecipe()` and `removeAll()`.

## Methods

#### Add Recipe

The follow script will add three Mana Infusion recipes, the recipes will do the following:

1) When an Enchanted Golden Apple is given to a Mana Pool, a piece of Dirt will be given back.
2) When an Apple is given to a Mana Pool with a Diamond Block beneath it, a Diamond will be given back.
3) When an Iron Helmet is given to a Mana Pool, a Manasteel Helmet will be given back, with the same NBT as the original.

```zenscript
import crafttweaker.api.item.IItemStack;

// <recipetype:botania:mana_infusion>.addRecipe(String name, IItemStack output, IIngredient input, int mana, @Optional BlockState catalystState, @Optional RecipeFunctionSingle function)

<recipetype:botania:mana_infusion>.addRecipe("mana_infusion_test", <item:minecraft:dirt>, <item:minecraft:enchanted_golden_apple>, 200);
<recipetype:botania:mana_infusion>.addRecipe("mana_infusion_test_catalyst", <item:minecraft:diamond>, <item:minecraft:apple>, 200, <blockstate:minecraft:diamond_block>);
<recipetype:botania:mana_infusion>.addRecipe("mana_infusion_test_helmet", <item:botania:manasteel_helmet>, <item:minecraft:iron_helmet>.anyDamage(), 500, null, (usualOut as IItemStack, inputs as IItemStack) => { return usualOut.withTag(inputs.tag); });
```

#### Remove Recipes

The follow script will remove all Mana Infusion recipes that output an Apple

```zenscript
// <recipetype:botania:mana_infusion>.removeRecipe(IItemStack output);

<recipetype:botania:mana_infusion>.removeRecipe(<item:minecraft:apple>);
```
