# Steam Hammer

The Steam Hammer is a machine that converts two input items into an output item using steam.

## Package
`mods.steamagerevolution.SteamHammer`.

## Methods

- **[IItemStack](/Vanilla/Items/IItemStack/) output** The result of the recipe.
- **[IItemStack](/Vanilla/Items/IItemStack/) input** The input of the recipe.
- **int craftTime** Crafting time for machine to process
- **int steamCost** Cost of Steam for machine to process

## Addition

```zenscript
mods.steamagerevolution.SteamHammer.addRecipe(IIngredient input, IIngredient input, IItemStack output, int craftTime, int steamCost);
mods.steamagerevolution.SteamHammer.addRecipe(<ore:ingotIron>, <ore:ingotIron>, <ore:plateIron>.firstItem, 200, 200);
```


## Removal

```zenscript
mods.steamagerevolution.SteamHammer.removeRecipe(IItemStack output);
mods.steamagerevolution.SteamHammer.removeRecipe(<ore:plateIron>.firstItem);

mods.steamagerevolution.SteamHammer.removeAll();
```
