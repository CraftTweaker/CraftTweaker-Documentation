# Compressor

## Package
`import mods.ic2.Compressor`

## Methods
- **IItemStack output**
- **IIngredient input**

## Addition

```
mods.ic2.Compressor.addRecipe(IItemStack output, IItemStack input);

mods.ic2.Compressor.addRecipe(<minecraft:diamond_block>, <minecraft:dirt> * 64);
```

## Removal

To remove an existed recipe, simply remove the corresponding line in `config/ic2/compressor.ini`
