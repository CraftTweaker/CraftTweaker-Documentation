# Freezer

The Freezer is the bottom compartment of the Fridge.

It can be used to freeze items, but requires Ice to operate.

## Default Freezer Recipes

- Water Bucket -> Ice
- Ice -> Packed Ice
- Lava Bucket -> Obsidian
- Slimeball -> Snowball
- Poisonous Potato -> Potato
- Rotten Flesh -> Flesh

## Removing

## Remove matching freezer recipes.

```java
mods.cfm.Freezer.remove(@Optional final IIngredient output, @Optional final IIngredient input);

// Remove recipes that result in Ice
mods.cfm.Freezer.remove(<minecraft:ice>);
// Remove recipes that require a Lava Bucket
mods.cfm.Freezer.remove(null,<minecraft:lava_bucket>);
// Remove all recipes
mods.cfm.Freezer.remove();
```

## Adding

Add a freezer recipe.

## Only supports inputs of size 1.

```java
mods.cfm.Freezer.addRecipe(@Nonnull final IItemStack output, @Nonnull final IItemStack input);

// Add a recipe that makes 16 Ice from a Lava Bucket
mods.cfm.Freezer.addRecipe(<minecraft:ice>.withAmount(16),<minecraft:lava_bucket>);
// Adds a recipe that makes 16 Obsidian from a Water Bucket
mods.cfm.Freezer.addRecipe(<minecraft:obsidian>.withAmount(16),<minecraft:water_bucket>);
// Adds a recipe that makes a Water Bucket from a Bucket
mods.cfm.Freezer.addRecipe(<minecraft:water_bucket>,<minecraft:bucket>);
```