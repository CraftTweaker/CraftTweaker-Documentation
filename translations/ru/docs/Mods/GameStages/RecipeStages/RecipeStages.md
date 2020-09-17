# Этапы рецептов

Этот мод является аддоном для [GameStages API](https://minecraft.curseforge.com/projects/game-stages). Стадия рецептов позволяет ограничить рецепты таблиц создания пользовательской прогрессивной системы. Для получения дополнительной информации, посетите страницу модов [здесь](https://minecraft.curseforge.com/projects/recipe-stages)

## Методы

Добавляет рецепт формы, который закрепляется за сценой.

```zenscript
//mods.recipestages.Recipes.addShaped(String stage, IItemStack, IIngredient[][] ingredients, @Optional IRecipeFunction function, @Optional IRecipeAction action);
//моды. ecipestages.Recipes.addShaped(String name, String stage, IItemStack, IIngredient[][] ingredients, @Optional IRecipeFunction function, @Optional IRecipeAction action);

mods. ecipestages.Recipes. ddShaped("two", <minecraft:iron_leggings>,[[<minecraft:gold_ingot>, <minecraft:gold_ingot>, <minecraft:iron_ingot>],[<minecraft:iron_ingot>, null, <minecraft:iron_ingot>],[<minecraft:iron_ingot>, null, <minecraft:iron_ingot>]);
модов. ecipestages.Recipes.addShaped("test", "one", <minecraft:iron_leggings>,[[<minecraft:gold_ingot>, <minecraft:iron_ingot>, <minecraft:iron_ingot>],[<minecraft:iron_ingot>, null, <minecraft:iron_ingot>],[<minecraft:iron_ingot>, null, <minecraft:iron_ingot>]]);
```

Добавляет рецепт зеркальной формы, который закрепляется за сценой.

```zenscript
//mods.recipestages.Recipes.addShapedMirrored(String stage, IItemStack, IIngredient[][] ингредиенты, @Optional IRecipeFunction функция, @Optional IRecipeAction action);
//моды. ecipestages.Recipes.addShapedMirrored(String name, String stage, IItemStack, IIngredient[][] ingredients, @Optional IRecipeFunction function, @Optional IRecipeAction action);

mods. ecipestages.Recipes. ddShapedMirrored("two", <minecraft:iron_leggings>,[[<minecraft:gold_ingot>, <minecraft:gold_ingot>, <minecraft:iron_ingot>],[<minecraft:iron_ingot>, null, <minecraft:iron_ingot>],[<minecraft:iron_ingot>, null, <minecraft:iron_ingot>]]);
модов. ecipestages.Recipes.addShapedMirrored("test_mirrored", "one", <minecraft:iron_leggings>,[[<minecraft:gold_ingot>, <minecraft:iron_ingot>, <minecraft:iron_ingot>],[<minecraft:iron_ingot>, null, <minecraft:iron_ingot>],[<minecraft:iron_ingot>, null, <minecraft:iron_ingot>]]);

```

Добавляет бесформенный рецепт, запертый за сценой.

```zenscript
//mods.recipestages.Recipes.addShapeless(String stage, IItemStack, IIngredient[] ингредиенты, @Optional IRecipeFunction function, @Optional IRecipeAction action);
//mods.recipestages.Recipes. ddShapeless(String name, String stage, IItemStack, IIngredient[] ingredients, @Optional IRecipeAction action);

mods. ecipestages.Recipes.addShapeless("one", <minecraft:diamond>, [<ore:sand>, <ore:sand>, <ore:ingotIron>, <minecraft:gold_ingot>]);
mods.recipestages.Recipes.addShapeless("shapeless_test". "one", <minecraft:diamond>, [<ore:sand>, <ore:sand>, <ore:ingotIron>, <minecraft:gold_ingot>]);
```

Устанавливает стадию неокрашенного рецепта.

```zenscript
//mods.recipestages.Recipes.setRecipeStage(String name, IItemStack);
//mods.recipestages.Recipes.setRecipeStage(String name, String recipeName);

mods.recipestages.Recipes.setRecipeStage("one", <minecraft:stone_hoe>);
mods.recipestages.Recipes.setRecipeStage("one", "minecraft:boat");
```

Устанавливает этап всех рецептов, которые делают предметы из определенного мода.  
Более конкретно, содержит все рецепты, которые представлены в качестве домена ресурса.  
НЕ работает с регулярными выражениями, поэтому использование `.*` в качестве аргумента ничего не делает!

```zenscript
//mods.recipestages.Recipes.setRecipeStage(String name, String recipeName);
mods.recipestages.Recipes.setRecipeStageByMod("one", "minecraft");
```

Устанавливает стадию всех рецептов на основе регенерации с их именем.

```zenscript
//mods.recipestages.Recipes.setRecipeStageByRegex(String name, String modid);
//Этот этап задает стадию названия всех рецептов, содержащих только числа в разделе "one"

mods.recipestages.Recipes.setRecipeStageByRegex("one", "^[0-9]*$");
```

Рассказывает этапы рецептов для печати имен контейнеров в чате

```zenscript
//mods.recipestages.Recipes.setPrintContainers(boolean printContainers);
mods.recipestages.Recipes.setPrintContainers(true);
```

"Стадии" контейнер, позволяющий создавать рецепты с определенных этапов

```zenscript
//mods.recipestages.Recipes.setContainerStage(String containerPath, String[] stages);
mods.recipestages.Recipes.setContainerStage("primal_tech.inventory.ContainerWorkStump", "one");
```

"Стадии" пакет, позволяющий всем контейнерам в упаковке создавать рецепты с определенных этапов

```zenscript
//mods.recipestages.Recipes.setPackageStage(Имя пакета, String[]);
mods.recipestages.Recipes.setPackageStage("appeng", allStages);
```