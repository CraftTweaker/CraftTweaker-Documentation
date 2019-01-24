# SAG Mill
## Package
`mods.enderio.SagMill`

## Addition
**@Optional String bonusType** means how Grinding Ballss work. Can be **NONE**, **MULTIPLY_OUTPUT**  and **CHANCE_ONLY.**
```
mods.enderio.SagMill.  
addRecipe(IItemStack[] output, float[] chanceofitem, IIngredient input, @Optional String bonusType, @Optional int energyCost, @Optional float[] xp);

mods.enderio.SagMill.  
addRecipe(<minecraft:gravel>, 100, <minecraft:cobblestone>, NONE, 200, 0);
```
## Removal
```
mods.enderio.SagMill.removeRecipe(IItemStack input);

mods.enderio.SagMill.removeRecipe(<minecraft:cobblestone>);
```
