# Dissolver

## Package
`mods.alchemistry.Dissolver`

## Methods
- **[IItemStack](/Vanilla/Items/IItemStack/) input** - The input of the recipe.
- **boolean relativeProbability** - Possibility Enable / Disable
- **int rolls** -  Possibilty of Roles

## Addition
```zenscript
mods.alchemistry.Dissolver.addRecipe(IIngredient input, boolean relativeProbability, int rolls, Object[][] probabilityGroups);
mods.alchemistry.Dissolver.addRecipe(<minecraft:dye:9>, false, 5,
[[10, <minecraft:stone>], 
 [20, <minecraft:sand>,<minecraft:iron_ore>]]);
```

## Removal
```zenscript
mods.alchemistry.Dissolver.removeRecipe(IIngredient input);
mods.alchemistry.Dissolver.removeRecipe(<minecraft:ender_pearl>);

mods.alchemistry.Dissolver.removeAllRecipes();
```
