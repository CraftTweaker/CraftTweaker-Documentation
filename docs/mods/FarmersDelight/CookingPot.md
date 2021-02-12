::requiredMod[Farmer's Delight]{builtIn=true modLink=https://www.curseforge.com/minecraft/mc-mods/farmers-delight}

# Farmer's Delight Cooking Pot

The Cooking Pot is a type of [IRecipeManager](/vanilla/api/managers/IRecipeManager) and implements all the methods that are available to IRecipeManager's, such as `removeRecipe()` and `removeAll()`.

## Methods

#### Add Recipe

The following script will add three Cooking Pot recipes, the recipes will do the following:
1) When a Cobblestone is put in a Cooking Pot, it will cook into a Diamond over 200 ticks (10 seconds), granting no experience.
2) When a Gold Block is put into a Cooking Pot, it will cook into an Enchanted Golden Apple to be served on an Apple, over 200 ticks, granting no experience.
3) When a Water Bucket is put into a Cooking Pot it will cook into Obsidian to be served on a Lava Bucket, over 2 ticks, granting 100 experience.

```zenscript
// <recipetype:farmersdelight:cooking>.addRecipe(String name, IItemStack output, IIngredient[] inputs, @Optional IItemStack container, @OptionalFloat float experience, @OptionalInt(200) int cookTime);

<recipetype:farmersdelight:cooking>.addRecipe("test_cooking", <item:minecraft:diamond>, [<item:minecraft:cobblestone>]);
<recipetype:farmersdelight:cooking>.addRecipe("test_cooking_container", <item:minecraft:enchanted_golden_apple>, [<item:minecraft:gold_block>], <item:minecraft:apple>);
<recipetype:farmersdelight:cooking>.addRecipe("test_cooking_experience_and_time", <item:minecraft:obsidian>, [<item:minecraft:water_bucket>], <item:minecraft:lava_bucket>, 100, 2);
```

#### Remove Recipes

The following script will remove all Cooking Pot recipes that output Mushroom Stew:

```zenscript
// <recipetype:farmersdelight:cooking>.removeRecipe(IItemStack output);

<recipetype:farmersdelight:cooking>.removeRecipe(<item:minecraft:mushroom_stew>);
```
