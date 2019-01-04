# Toaster
The Toaster crips up food to start your day.

## Default Toaster Recipes
- Beef -> Cooked Beef
- Sausage -> Cooked Sausage
- Kebab -> Cooked Kebab

## Removing
Remove matching toaster recipes.
------
```java
mods.cfm.Toaster.remove(@Optional final IIngredient output, @Optional final IIngredient input);

// Remove recipes that make Toast from a Bread Slice
mods.cfm.Toaster.remove(<cfm:item_toast>,<cfm:item_bread_slice>);
// Remove all recipes
mods.cfm.Toaster.remove();
```

## Adding
Add a toaster recipe.
Only supports inputs of size 1.
------
```java
mods.cfm.Toaster.addRecipe(@Nonnull final IItemStack output, @Nonnull final IItemStack input);

// Add a recipe that makes Bread from Wheat
mods.cfm.Toaster.addRecipe(<minecraft:bread>,<minecraft:wheat>);
// Add a recipe that makes Cooked Beef from Beef
mods.cfm.Toaster.addRecipe(<minecraft:cooked_beef>,<minecraft:beef>);
```
