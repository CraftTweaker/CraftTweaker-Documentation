# Grill

The Grill cooks food over hot coals.

It requires flipping food to cook both sides.

## Default Grill Recipes

- Beef -> Cooked Beef
- Sausage -> Cooked Sausage
- Kebab -> Cooked Kebab

## Removing

## Remove matching grill recipes.

```java
mods.cfm.Grill.remove(@Optional final IIngredient output, @Optional final IIngredient input);

// Remove recipes that require Beef
mods.cfm.Grill.remove(null,<minecraft:beef>);
// Remove recipes that result in a Cooked Sausage
mods.cfm.Grill.remove(<cfm:item_sausage_cooked>);
// Remove all recipes
mods.cfm.Grill.remove();
```

## Adding

Add a grill recipe.

## Only supports inputs of size 1.

```java
mods.cfm.Grill.addRecipe(@Nonnull final IItemStack output, @Nonnull final IItemStack input);

// Add a recipe that makes a Stick from a Sausage
mods.cfm.Grill.addRecipe(<minecraft:stick>,<cfm:item_sausage>);
// Add a recipe that makes a Torch from a Stick
mods.cfm.Grill.addRecipe(<minecraft:torch>,<minecraft:stick>);
```