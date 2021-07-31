# Steam Furnace

The Steam Furnace is a machine that converts an input item into an output item using steam.

## Package
`mods.steamagerevolution.SteamFurnace`

## Methods

- **[IItemStack](/Vanilla/Items/IItemStack/) output** The result of the recipe.
- **[IItemStack](/Vanilla/Items/IItemStack/) input** The input of the recipe.
- **int craftTime** Crafting time for machine to process
- **int steamCost** Cost of Steam for machine to process

## Addition

```zenscript
mods.steamagerevolution.SteamFurnace.addRecipe(IIngredient input, IItemStack output, int craftTime, int steamCost);
mods.steamagerevolution.SteamFurnace.addRecipe(<ore:cobblestone>, <minecraft:stone>, 200, 200);
```


## Removal

```zenscript mods.steamagerevolution.SteamFurnace.removeRecipe(IItemStack output); mods.steamagerevolution.SteamFurnace.removeRecipe(<minecraft:glass>);

mods.steamagerevolution.SteamFurnace.removeAll(); ``
