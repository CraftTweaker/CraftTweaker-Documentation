::requiredMod[Ars-Nouveau]{builtIn=true modLink=https://www.curseforge.com/minecraft/mc-mods/ars-nouveau}

# Ars-Nouveau Enchanting Apparatus

The Enchanting Apparatus is a type of [IRecipeManager](/vanilla/api/managers/IRecipeManager) and implements all the methods that are available to IRecipeManager's, such as `removeRecipe()` and `removeAll()`.

## 方法

#### 添加配方

The following script will add a recipe to the Enchanting Apparatus that will output a Diamond, when Glass is enchanted with Dirt, an Apple and an Arrow on pedestals.

```zenscript
// <recipetype:ars_nouveau:enchanting_apparatus>.addRecipe(String name, IItemStack result, IIngredient reagent, IIngredient[] pedestalItems)

<recipetype:ars_nouveau:enchanting_apparatus>.addRecipe("enchanting_test", <item:minecraft:diamond>, <item:minecraft:glass>, [<item:minecraft:dirt>, <item:minecraft:apple>, <item:minecraft:arrow>]);
```

#### Remove Recipes

The follow script will remove all recipes from the Enchanting Apparatus that output the Ring of Lesser Discount.

```zenscript
// <recipetype:ars_nouveau:enchanting_apparatus>.removeRecipe(IItemStack output);

<recipetype:ars_nouveau:enchanting_apparatus>.removeRecipe(<item:ars_nouveau:ring_of_lesser_discount>);
```
