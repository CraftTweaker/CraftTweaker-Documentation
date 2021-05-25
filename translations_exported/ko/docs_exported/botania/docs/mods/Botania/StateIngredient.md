# StateIngredient

Wrapper around blocks, blockstates or block tags used to match recipe inputs like blocks to convert with the Pure Daisy, or catalysts for mana infusion.

 To create, simply cast an MCBlock, MCBlockState, an array of MCBlocks, or an MCTag&lt;MCBlock&gt; to StateIngredient. This is done automatically when using them as a parameter for a method.

This class was added by a mod with mod-id `botania`. So you need to have this mod installed if you want to use this feature.

## Importing the class

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import mods.botania.StateIngredient;
```


## Implemented Interfaces
StateIngredient implements the following interfaces. That means all methods defined in these interfaces are also available in StateIngredient

- Predicate&lt;[MCBlockState](/vanilla/api/block/MCBlockState)&gt;

## Casters

| 반환 자료형 | 암묵적   |
| ------ | ----- |
| string | false |

## Methods

:::group{name=matches}

Tests if the provided block state matches the recipe.

Return Type: boolean

```zenscript
// StateIngredient.matches(state as MCBlockState) as boolean

ingredient.matches(<blockstate:minecraft:dirt>);
```

| Parameter | Type                                            | Description                                 |
| --------- | ----------------------------------------------- | ------------------------------------------- |
| state     | [MCBlockState](/vanilla/api/block/MCBlockState) | Block state to test against this ingredient |


:::

:::group{name=pick}

Returns a random state matching the ingredient.

Return Type: [MCBlockState](/vanilla/api/block/MCBlockState)

```zenscript
// StateIngredient.pick(random as Random) as MCBlockState

ingredient.pick(world.random);
```

| Parameter | Type                               | Description                                      |
| --------- | ---------------------------------- | ------------------------------------------------ |
| random    | [Random](/vanilla/api/util/Random) | a Random instance, usually obtained from a world |


:::


