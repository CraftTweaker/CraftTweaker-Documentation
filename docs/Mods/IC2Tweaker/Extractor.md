# Extractor

## Package
`import mods.ic2.Extractor;`

## Methods
- **[IIngredient](/Vanilla/Variable_Types/IIngredient/) output**
- **[IIngredient](/Vanilla/Variable_Types/IIngredient/) input**

## Addition

```
mods.ic2.Extractor.addRecipe(IItemStack output, IItemStack input);

mods.ic2.Extractor.addRecipe(<minecraft:diamond_block>, <minecraft:dirt> * 64);
```

## Removal

To remove an existed recipe, simply remove the corresponding line in `config/ic2/extractor.ini`
