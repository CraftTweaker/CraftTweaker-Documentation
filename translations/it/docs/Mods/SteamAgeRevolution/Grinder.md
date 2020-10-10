# Grinder

The Grinder is a machine that converts an input item into an output item using steam.

## Package
`mods.steamagerevolution.Grinder`

## Methods

- **[IItemStack](/Vanilla/Items/IItemStack/) output** The result of the recipe.
- **[IItemStack](/Vanilla/Items/IItemStack/) input** The input of the recipe.
- **int craftTime** Crafting time for machine to process
- **int steamCost** Cost of Steam for machine to process

## Addition

```zenscript
mods.steamagerevolution.Grinder.addRecipe(IIngredient input, IItemStack output, int craftTime, int steamCost);
mods.steamagerevolution.Grinder.addRecipe(<ore:cobblestone>, <minecraft:gravel>, 200, 200);
```

## Removing

```zenscript
mods.steamagerevolution.Grinder.removeRecipe(IItemStack output);
mods.steamagerevolution.Grinder.removeRecipe(<minecraft:sand>);

mods.steamagerevolution.Grinder.removeAll();
```
