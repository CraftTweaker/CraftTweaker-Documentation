::requiredMod[Ars-Nouveau]{builtIn=true modLink=https://www.curseforge.com/minecraft/mc-mods/ars-nouveau}

# Ars-Nouveau Glyph Press

The Glyph Press is a type of [IRecipeManager](/vanilla/api/managers/IRecipeManager) and implements all the methods that are available to IRecipeManager's, such as `removeRecipe()` and `removeAll()`.

## 方法

#### 添加配方

The following script will add a tier "one" recipe to the Glyph Press that will output a Diamond when dirt is given to the Press.

```zenscript
// <recipetype:ars_nouveau:glyph_recipe>.addRecipe(String name, String tier, IItemStack reagent, IItemStack output);

<recipetype:ars_nouveau:glyph_recipe>.addRecipe("glyph_test", "one", <item:minecraft:dirt>, <item:minecraft:diamond>);
```

#### Remove Recipes

The follow script will remove all recipes from the Glyph Press that output Glyph: Touch.

```zenscript
// <recipetype:ars_nouveau:glyph_recipe>.removeRecipe(IItemStack output);

<recipetype:ars_nouveau:glyph_recipe>.removeRecipe(<item:ars_nouveau:glyph_touch>);
```