# Soul Binder
## Package
`mods.enderio.SoulBinder`

## Addition
**Ingredient input** The main (non-soul vial) ingredient.

**String[] entities** Allowed entities that must be present in a soul vial for this recipe to work.
```
mods.enderio.SoulBinder.addRecipe(IItemStack output, IIngredient input, String[] entities, int xp, int energyCost);

mods.enderio.SoulBinder.addRecipe(minecraft:nether_star>, <bone>, skeleton, 50, 50000);
```
## Removal
```
mods.enderio.SoulBinder.removeRecipe(IItemStack output);

mods.enderio.SoulBinder.removeRecipe(<some item that i have to fill in>);
```
