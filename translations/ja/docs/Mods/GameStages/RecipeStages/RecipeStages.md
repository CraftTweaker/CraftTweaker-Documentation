# レシピの段階

この mod は [GameStages API](https://minecraft.curseforge.com/projects/game-stages) のアドオンです。 レシピ段階を使用すると、カスタムの進行システムによって、作業台レシピを制限できます。 詳細はこちら [をご覧ください](https://minecraft.curseforge.com/projects/recipe-stages)

## メソッド

ステージの後ろにロックされた形状のレシピを追加します。

```zenscript
//mods.recipestages.Recipes.addShaped(String stage, IItemStack output, IIngredient[][] ingredients, @Optional IRecipeFunction function, @Optional IRecipeAction action);
//mods.recipestages.Recipes.addShaped(String name, String stage, IItemStack output, IIngredient[][] ingredients, @Optional IRecipeFunction function, @Optional IRecipeAction action);

mods.recipestages.Recipes.addShaped("two", <minecraft:iron_leggings>,[[<minecraft:gold_ingot>, <minecraft:gold_ingot>, <minecraft:iron_ingot>],[<minecraft:iron_ingot>, null, <minecraft:iron_ingot>],[<minecraft:iron_ingot>, null, <minecraft:iron_ingot>]]);
mods.recipestages.Recipes.addShaped("test", "one", <minecraft:iron_leggings>,[[<minecraft:gold_ingot>, <minecraft:iron_ingot>, <minecraft:iron_ingot>],[<minecraft:iron_ingot>, null, <minecraft:iron_ingot>],[<minecraft:iron_ingot>, null, <minecraft:iron_ingot>]]);
```

ステージの後ろにロックされているミラー状のレシピを追加します。

```zenscript
//mods.recipestages.Recipes.addShapedMirrored(String stage, IItemStack output, IIngredient[][] ingredients, @Optional IRecipeFunction function, @Optional IRecipeAction action);
//mods.recipestages.Recipes.addShapedMirrored(String name, String stage, IItemStack output, IIngredient[][] ingredients, @Optional IRecipeFunction function, @Optional IRecipeAction action);

mods.recipestages.Recipes.addShapedMirrored("two", <minecraft:iron_leggings>,[[<minecraft:gold_ingot>, <minecraft:gold_ingot>, <minecraft:iron_ingot>],[<minecraft:iron_ingot>, null, <minecraft:iron_ingot>],[<minecraft:iron_ingot>, null, <minecraft:iron_ingot>]]);
mods.recipestages.Recipes.addShapedMirrored("test_mirrored", "one", <minecraft:iron_leggings>,[[<minecraft:gold_ingot>, <minecraft:iron_ingot>, <minecraft:iron_ingot>],[<minecraft:iron_ingot>, null, <minecraft:iron_ingot>],[<minecraft:iron_ingot>, null, <minecraft:iron_ingot>]]);

```

ステージの後ろにロックされたシェイプレスレシピを追加します。

```zenscript
//mods.recipestages.Recipes.addShapeless(String stage, IItemStack output, IIngredient[] ingredients, @Optional IRecipeFunction function, @Optional IRecipeAction action);
//mods.recipestages.Recipes.addShapeless(String name, String stage, IItemStack output, IIngredient[] ingredients, @Optional IRecipeFunction function, @Optional IRecipeAction action);

mods.recipestages.Recipes.addShapeless("one", <minecraft:diamond>, [<ore:sand>, <ore:sand>, <ore:ingotIron>, <minecraft:gold_ingot>]);
mods.recipestages.Recipes.addShapeless("shapeless_test". "one", <minecraft:diamond>, [<ore:sand>, <ore:sand>, <ore:ingotIron>, <minecraft:gold_ingot>]);
```

ステージ以外のレシピのステージを設定します。

```zenscript
//mods.recipes.setRecipeStage(String name, IItemStack output);
//mods.recipeStackes.Recipes.setRecipeStage(String name, String recipeName);

mods.recipes.setRecipeStage("one", <minecraft:stone_hoe>);
mods.recipes.setRecipeRecipeStage("one", "minecraft:boat");
```

Sets the stage of all recipes that make items from a certain mod.  
More specifically, stages all recipes that have the given modid as resource domain.  
Does NOT work with regex expressions, so using `.*` as argument would do nothing!

```zenscript
//mods.recipes.setRecipeStage(String name, String recipeName);
mods.recipe.setRecipeStageByMod("one", "minecraft");
```

名前に基づいて、すべてのレシピのステージを設定します。

```zenscript
//mods.recipes.setRecipeStageByRegex(String name, String modid);
//これは、名前のみが「1」の数字を含むすべてのレシピのステージを設定します。

mods.recipes.setRecipeStageByRegex("one", "^[0-9]*$");
```

コンテナ名を出力してチャットするようRecipeStagesに伝えます

```zenscript
//mods.recipes.setPrintContainers(boolean printContainers);
mods.recipes.setPrintContainers(true);
```

特定の段階からレシピを作成できる容器を「ステージ」します

```zenscript
//mods.recipes.setContainerStage(String containerPath, String[] stage);
mods.recipes.setContainerStage("primal_tech.inventory.ContainerWorkStump", "one");
```

パッケージを「ステージ」し、パッケージ内のすべてのコンテナが特定の段階からレシピを作成できるようにします

```zenscript
//mods.recipes.setPackageStage(String packageName, String[] stages);
mods.recipes.setPackageStage("appeng", allStages);
```