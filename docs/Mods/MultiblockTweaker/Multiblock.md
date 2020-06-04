# IMatchValidator

## Importing the Package

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import.
```zencode
import mods.gregtech.multiblock.Multiblock;
```

## Information

The Multiblock object can be used to define additional behaviour for a multiblock, or to get information from it.

This is a good way to easily get the [RecipeMap](../GregTechCE/Machines.md) without having to get it manually by name.

## ZenGetters/ZenSetters

| ZenGetter            | ZenSetter           | Type                                                                  |
|----------------------|---------------------|-----------------------------------------------------------------------|
| `update`             | `update`            | [`IUpdateFunction`](./Functions/IUpdateFunction.md)                   |
| `updateWorktable`    | `updateWorktable`   | [`IUpdateWorktableFunction`](./Functions/IUpdateWorktableFunction.md) |
| `setupRecipe`        | `setupRecipe`       | [`ISetupRecipeFunction`](./Functions/ISetupRecipeFunction.md)         |
| `completeRecipe`     | `completeRecipe`    | [`ICompleteRecipeFunction`](./Functions/ICompleteRecipeFunction.md)   |
| `recipePredicate`    | `recipePredicate`   | [`IRecipePredicate`](./Functions/IRecipePredicate.md)                 |
| `recipeMap`          |                     | [`RecipeMap`](../GregTechCE/Machines.md)                              |
| `pattern`            |                     | [`IBlockPattern`](./IBlockPattern.md)                                 |
| `texture`            |                     | [`ICubeRenderer`](./ICubeRenderer.md)                                 |
| `metaId`             |                     | `int`                                                                 |
| `location`           |                     | `string`                                                              |
