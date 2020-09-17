# 配方阶段

这个模组是 [GameStages API](https://minecraft.curseforge.com/projects/game-stages) 的附加值。 配方阶段允许制作桌面配方受到自定义进度系统的限制。 欲了解更多信息，请在这里查看模组页面 [](https://minecraft.curseforge.com/projects/recipe-stages)

## 方法

添加一个处于阶段后锁定的形配方。

```zenscript
//mods.formestages.Recipes.addShaped(String stage, IItemStack output, IIngredient[] components, @Optional IRecipeFunction function function 函数, @Optional IRecipeAction 动作);
/mods. ecipestages.Recipes.addShaped(名字，字符串阶段，IItemStack 输出, IIngredient[] 成分, @Optional IRecipeFunction 函数, @Optional IRecipeAction 动作);

mods. 食谱. ddShaped("2", <minecraft:iron_leggings>[[<minecraft:gold_ingot>, <minecraft:gold_ingot>, <minecraft:iron_ingot>],[<minecraft:iron_ingot>, null, <minecraft:iron_ingot>],[<minecraft:iron_ingot>, null, <minecraft:iron_ingot>]);
模组。 ecipestages.Recipes.addShaped("test", "one", <minecraft:iron_leggings>[[<minecraft:gold_ingot>, <minecraft:iron_ingot>, <minecraft:iron_ingot>], [<minecraft:iron_ingot>, null, <minecraft:iron_ingot>], [<minecraft:iron_ingot>, null, <minecraft:iron_ingot>]);
```

添加一个被锁在舞台后的镜像形配方。

```zenscript
//mods.formestages.Recipes.addShapedMirrored(String stage, IItemStack output, IIngredient[] components, @Optional IRecipepeFunction function 函数, @Optional IRecipeAction 动作);
//mods. ecipestages.Recipes.addShapedMirrored(名称, String station, IItemStack output, IIngredient[] 成分, @Optional IRecipeFunction 函数, @Optional IRecipeAction 动作);

mods. 食谱. ddShapedMirrored("two", <minecraft:iron_leggings>[[<minecraft:gold_ingot>, <minecraft:gold_ingot>, <minecraft:iron_ingot>],[<minecraft:iron_ingot>, null, <minecraft:iron_ingot>],[<minecraft:iron_ingot>, null, <minecraft:iron_ingot>]);
模组。 ecipestages.Recipes.addShapedMirrored("test_mirrored", "one", <minecraft:iron_leggings>,[[<minecraft:gold_ingot>, <minecraft:iron_ingot>, <minecraft:iron_ingot>],[<minecraft:iron_ingot>, null, <minecraft:iron_ingot>],[<minecraft:iron_ingot>, null, <minecraft:iron_ingot>]);

```

添加一个无耻的配方被锁在一个舞台上。

```zenscript
//mods.formestages.Recipes.addShapeless(String station, IItemStack output, IIngredient[] components, @Optional IRecipeFunction function function 函数, @Optional IRecipe Action 操作);
//mods.Configurestages.Recipes. ddShapeless(名称, String stake, IItemStack output, IIngredient[……] components, @Optional IRecipepe Function 函数, @Optional IRecipeAction action);

mods. ecipestages.Recipes.addShapeless("one", <minecraft:diamond>, [<ore:sand>, <ore:sand>, <ore:ingotIron>, <minecraft:gold_ingot>]);
mods.requestages.Recipes.addShapeless("shapeless_test"). "one", <minecraft:diamond>, [<ore:sand>, <ore:sand>, <ore:ingotIron>, <minecraft:gold_ingot>]);
```

设置未分阶段配方的阶段。

```zenscript
//mods.formestages.Recipes.setRecipeStage(String name, IItemStack output);
//mods.Configurestages.Recipes.setRecipeStage(String name, String recipeName);

mods.Configurestages.Recipes.setRecipege("one", <minecraft:stone_hoe>);
mods.requestages.Recipes.setRecipeStage("one", "minecraft:boat");
```

设置从某个模组生成项目的所有配方的阶段。  
更具体而言，将给定的摩托车作为资源领域的所有配方。  
不使用 regex 表达式，所以使用 `。*` 因为参数不会做任何事情！

```zenscript
//mods.formestages.Recipes.setRecipeStage(String name, String recipeName);
mods.formestages.Recipes.setRecipeStageBMod("one", "minecraft");
```

设置基于正则表达式检查的所有配方的级别。

```zenscript
//mods.配方estages.Recipes.setRecipeStageByRegex(名称, 字符串修改)；
///This 设置所有配方的名称只包含数字到级"

mods.配方estages.Recipes.setRecipeStageByRegex("one", "[0-9]*$")；
```

Tells RecipeStages to 打印容器名称到聊天

```zenscript
//mods.formestages.Recipes.setPrintContainers(Boolian printContainers);
mods.formestages.Recipes.setPrintContainers(true);
```

“阶段”是一个容器，允许它从某些阶段制作配方

```zenscript
//mods.配方estages.Recipes.setContainerStage(String containerPath, String[…]stages);
mods.formestages.Recipes.setContainerStage("primal_tech.inventory.ContainerWorkStump", "one");
```

“阶段”一个包，允许包内的所有容器从某些阶段制作配方

```zenscript
//mods.formestages.Recipes.setPackageStage(String packageName, String]stages);
mods.formestages.Recipes.setPackageStage("apppeng", allStages);
```