# Botania Pure Daisy

The Pure Daisy is a type of [IRecipeManager](/vanilla/api/managers/IRecipeManager) and implements all the methods that are available to IRecipeManager's, such as `removeRecipe()` and `removeAll()`.

## 方法

#### 添加配方

The follow script will add a recipe to the Pure Daisy that will convert a Gold Block to a Diamond Block and will take 20 ticks to convert.

```zenscript
// <recipetype:botania:pure_daisy>.addRecipe(String name, BlockState output, BlockState input, int time)

<recipetype:botania:pure_daisy>.addRecipe("pure_daisy_test", <blockstate:minecraft:diamond_block>, <tag:items:forge:storage_blocks/gold>, 20);
```

#### Remove Recipes

The follow script will remove all Pure Daisy recipes that convert blocks into Living Rock

```zenscript
// <recipetype:botania:pure_daisy>.removeRecipe(BlockState state);

<recipetype:botania:pure_daisy>.removeRecipe(<blockstate:botania:livingrock>);
```



