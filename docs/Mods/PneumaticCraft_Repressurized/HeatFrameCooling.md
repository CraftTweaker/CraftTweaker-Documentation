# Heat Frame Cooling

Heat Frame Cooling can be used to transform one item into another by placing items in a chest or other inventory with a Heat Frame attached, and cooling it to below 0°C (commonly using a Vortex Tube).

## Calling

You can call the Heat Frame Cooling package using `mods.pneumaticcraft.heatframecooling`

## Removing

This function removes the first recipe it finds with the given [IIngredient](/Vanilla/Variable_Types/IIngredient) `output`:

```
mods.pneumaticcraft.heatframecooling.removeRecipe(IIngredient output);
// Example
mods.pneumaticcraft.heatframecooling.removeRecipe(<minecraft:obsidian>);
```

This function removes *all* Heat Frame Cooling recipes:

```
mods.pneumaticcraft.heatframecooling.removeAllRecipes();
```

## Adding

These functions are used to add new recipes for the Heat Frame Cooling system:

```
mods.pneumaticcraft.heatframecooling.addRecipe(IItemStack input, IItemStack output);
mods.pneumaticcraft.heatframecooling.addRecipe(IOreDictEntry input, IItemStack output);

// Example
mods.pneumaticcraft.heatframecooling.addRecipe(<minecraft:slime_ball>, <minecraft:snow_ball>);
```
