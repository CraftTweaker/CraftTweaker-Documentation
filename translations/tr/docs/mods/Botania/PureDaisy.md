# Botania Pure Daisy

The Pure Daisy is a type of [IRecipeManager](/vanilla/api/managers/IRecipeManager) and implements all the methods that are available to IRecipeManager's, such as `removeRecipe()` and `removeAll()`.

## Methods

#### Add Recipe with BlockState input

The follow script will add a recipe to the Pure Daisy that will convert a Gold Block to a Diamond Block and will take 20 ticks to convert.

```zenscript
// <recipetype:botania:pure_daisy>.addRecipe(String name, BlockState output, BlockState input, int time)

<recipetype:botania:pure_daisy>.addRecipe("pure_daisy_test", <blockstate:minecraft:diamond_block>, <blockstate:minecraft:gold_block>, 20);
```

#### Add Recipe with Block[] input

The follow script will add a recipe to the Pure Daisy that will convert a Stone Block or a Cobblestone Block to an Iron Block and will take 20 ticks to convert.

```zenscript
// <recipetype:botania:pure_daisy>.addRecipe(String name, BlockState output, Block[] inputs, int time)

<recipetype:botania:pure_daisy>.addRecipe("pure_daisy_block_array_test", <blockstate:minecraft:iron_block>, [<block:minecraft:stone>, <block:minecraft:cobblestone>], 20);
```

#### Add Recipe with BlockTag input

The follow script will add a recipe to the Pure Daisy that will convert any Block in the `minecraft:wool` BlockTag to a Lapis Lazuli Block and will take 20 ticks to convert.

```zenscript
// <recipetype:botania:pure_daisy>.addRecipe(String name, BlockState output, Block[] inputs, int time)

<recipetype:botania:pure_daisy>.addRecipe("pure_daisy_block_tag_test", <blockstate:minecraft:lapis_block>, <tag:blocks:minecraft:wool>, 20);
```


#### Remove Recipes

The follow script will remove all Pure Daisy recipes that convert blocks into Living Rock

```zenscript
// <recipetype:botania:pure_daisy>.removeRecipe(BlockState state);

<recipetype:botania:pure_daisy>.removeRecipe(<blockstate:botania:livingrock>);
```



