# 1.21 Migration Guide

## Major Changes

### Tag names

With 1.21, Mojang has stopped hard coding the `blocks`, `entity_types`, `fluids`, `game_events` and `items` tag folders, they are now treated the same as other types of tags, with singular names:

| Old            | New           |
|----------------|---------------|
| `blocks`       | `block`       |
| `entity_types` | `entity_type` |
| `fluids`       | `fluid`       |
| `game_events`  | `game_event`  |
| `items`        | `item`        |

This change means that scripts need to be updated to reference the new folder, all instances of `<tag:items:` now needs to become `<tag:item:`, you can safely use your text editor's 'find and replace in files' feature to perform the following replacements:

| Replace              | With                |
|----------------------|---------------------|
| `<tag:blocks:`       | `<tag:block:`       |
| `<tag:entity_types:` | `<tag:entity_type:` |
| `<tag:fluids:`       | `<tag:fluid:`       |
| `<tag:game_events:`  | `<tag:game_event:`  |
| `<tag:items:`        | `<tag:item:`        |

### RecipeInput

To use the `crafttweaker.api.recipe.type.Recipe` class in older versions, such as to query a recipe, scripts would need to look like the following:

```zenscript
import crafttweaker.api.recipe.RecipeHolder;
import crafttweaker.api.recipe.type.Recipe;
import crafttweaker.api.world.Container;

val recipe = recipes.getRecipeByName("minecraft:acacia_boat");
if recipe is RecipeHolder<Recipe<Container>> {
    println(recipe.value.resultItem.commandString);
}
```

In 1.21, Mojang has introduced a new class to replace `Container`, `crafttweaker.api.recipe.input.RecipeInput`, which functions similarly to `Container`, the above script now needs to look like:

```zenscript
import crafttweaker.api.recipe.RecipeHolder;
import crafttweaker.api.recipe.type.Recipe;
crafttweaker.api.recipe.input.RecipeInput

val recipe = recipes.getRecipeByName("minecraft:acacia_boat");
if recipe is RecipeHolder<Recipe<RecipeInput>> {
    println(recipe.value.resultItem.commandString);
}
```

### Ingredient

The `crafttweaker.api.item.Ingredient` class has been moved to `crafttweaker.api.ingredient.Ingredient`

### ResourceLocation
The constructor for `crafttweaker.api.resource.ResourceLocation` has been removed, `ResourceLocation`s can still be constructed using the bracket handler: `<resource:namespace:path>`, but can also be constructed by using the new `parse` and `fromNameSpaceAndPath` methods:

```zenscript
import crafttweaker.api.resource.ResourceLocation;

val old = <resource:minecraft:acacia_boat>;
val parse = ResourceLocation.parse("minecraft:acacia_boat");
val fromNameSpaceAndPath = ResourceLocation.fromNameSpaceAndPath("minecraft", "acacia_boat");
```

### LootingLevelEvent

The NeoForge `crafttweaker.neoforge.api.event.entity.living.LootingLevelEvent` event has been removed.
There is no replacement for this at this time, but may be in the future: https://github.com/neoforged/NeoForge/issues/1112