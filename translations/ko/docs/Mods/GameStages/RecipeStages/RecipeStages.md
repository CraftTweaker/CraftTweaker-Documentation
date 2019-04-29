# Recipe Stages

This mod is an addon for the [GameStages API](https://minecraft.curseforge.com/projects/game-stages). Recipe Stages allows for Crafting Table Recipes to be restricted by a custom progression system. For more info, check out the mod page [here](https://minecraft.curseforge.com/projects/recipe-stages)

## Methods

Adds a shaped recipe that is locked behind a stage.

```java
//mods.recipestages.Recipes.addShaped(String stage, IItemStack output, IIngredient[][] ingredients, @Optional IRecipeFunction function, @Optional IRecipeAction action);
//mods.recipestages.Recipes.addShaped(String name, String stage, IItemStack output, IIngredient[][] ingredients, @Optional IRecipeFunction function, @Optional IRecipeAction action);

mods.recipestages.Recipes.addShaped("two", <minecraft:iron_leggings>,[[<minecraft:gold_ingot>, <minecraft:gold_ingot>, <minecraft:iron_ingot>],[<minecraft:iron_ingot>, null, <minecraft:iron_ingot>],[<minecraft:iron_ingot>, null, <minecraft:iron_ingot>]]);
mods.recipestages.Recipes.addShaped("test", "one", <minecraft:iron_leggings>,[[<minecraft:gold_ingot>, <minecraft:iron_ingot>, <minecraft:iron_ingot>],[<minecraft:iron_ingot>, null, <minecraft:iron_ingot>],[<minecraft:iron_ingot>, null, <minecraft:iron_ingot>]]);
```

Adds a mirrored shaped recipe that is locked behind a stage.

```java
//mods.recipestages.Recipes.addShapedMirrored(String stage, IItemStack output, IIngredient[][] ingredients, @Optional IRecipeFunction function, @Optional IRecipeAction action);
//mods.recipestages.Recipes.addShapedMirrored(String name, String stage, IItemStack output, IIngredient[][] ingredients, @Optional IRecipeFunction function, @Optional IRecipeAction action);

mods.recipestages.Recipes.addShapedMirrored("two", <minecraft:iron_leggings>,[[<minecraft:gold_ingot>, <minecraft:gold_ingot>, <minecraft:iron_ingot>],[<minecraft:iron_ingot>, null, <minecraft:iron_ingot>],[<minecraft:iron_ingot>, null, <minecraft:iron_ingot>]]);
mods.recipestages.Recipes.addShapedMirrored("test", "one", <minecraft:iron_leggings>,[[<minecraft:gold_ingot>, <minecraft:iron_ingot>, <minecraft:iron_ingot>],[<minecraft:iron_ingot>, null, <minecraft:iron_ingot>],[<minecraft:iron_ingot>, null, <minecraft:iron_ingot>]]);

```

Adds a shapeless recipe that is locked behind a stage.

```java
//mods.recipestages.Recipes.addShapeless(String stage, IItemStack output, IIngredient[] ingredients, @Optional IRecipeFunction function, @Optional IRecipeAction action);
//mods.recipestages.Recipes.addShapeless(String name, String stage, IItemStack output, IIngredient[] ingredients, @Optional IRecipeFunction function, @Optional IRecipeAction action);

mods.recipestages.Recipes.addShapeless("one", <minecraft:diamond>, [<ore:sand>, <ore:sand>, <ore:ingotIron>, <minecraft:gold_ingot>]);
mods.recipestages.Recipes.addShapeless("shapeless test". "one", <minecraft:diamond>, [<ore:sand>, <ore:sand>, <ore:ingotIron>, <minecraft:gold_ingot>]);
```

Sets the stage of a non staged recipe.

```java
//mods.recipestages.Recipes.setRecipeStage(String name, IItemStack output);
//mods.recipestages.Recipes.setRecipeStage(String name, String recipeName);

mods.recipestages.Recipes.setRecipeStage("one", <minecraft:stone_hoe>);
mods.recipestages.Recipes.setRecipeStage("one", "minecraft:boat");
```

Sets the stage of all recipes based on a regex check against their name.

```java
//mods.recipestages.Recipes.setRecipeStageByRegex(String name, String recipeName);

mods.recipestages.Recipes.setRecipeStageByRegex("one", "minecraft");
```

Sets the stage of all recipes that make items from a certain mod.

```java
//mods.recipestages.Recipes.setRecipeStage(String name, String recipeName);
//This sets the stage of all recipes who's name only contains numbers to stage "one"

mods.recipestages.Recipes.setRecipeStageByMod("one", "^[0-9]*$");
```

Tells RecipeStages to print Container names to chat

```java
//mods.recipestages.Recipes.setPrintContainers(boolean printContainers);
mods.recipestages.Recipes.setPrintContainers(true);
```

"Stages" a container, allowing it to craft recipes from certain stages

```java
//mods.recipestages.Recipes.setContainerStage(String containerPath, String[] stages);
mods.recipestages.Recipes.setContainerStage("primal_tech.inventory.ContainerWorkStump", "one");
```

"Stages" a package, allowing all containers in the package to craft recipes from certain stages

```java
//mods.recipestages.Recipes.setPackageStage(String packageName, String[] stages);
mods.recipestages.Recipes.setPackageStage("appeng", allStages);
```