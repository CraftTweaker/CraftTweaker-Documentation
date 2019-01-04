# Microwave
The Microwave heats up food items.

## Default Microwave Recipes
- Beef -> Cooked Beef
- Potato -> Baked Potato

## Removing
Remove matching microwave recipes.
------
```java
mods.cfm.Microwave.remove(@Optional final IIngredient output, @Optional final IIngredient input);

// Remove recipes that require a Potato
mods.cfm.Microwave.remove(null,<minecraft:potato>);
// Remove recipes that result in Cooked Beef
mods.cfm.Microwave.remove(<minecraft:cooked_beef>);
// Remove all recipes
mods.cfm.Microwave.remove();
```

## Adding
Add a microwave recipe.
------
```java
mods.cfm.Microwave.addRecipe(@Nonnull final IItemStack output, @Nonnull final IItemStack input);

// Add a recipe that makes a 4 sticks from one sugar cane
mods.cfm.Microwave.addRecipe(<minecraft:stick>.withAmount(4),<minecraft:reeds>);
```
