# Extractor

## Package
`import mods.ic2.Extractor;`

## Methods
- **[IItemStack](/Vanilla/Items/IItemStack/) output**
- **[IIngredient](/Vanilla/Variable_Types/IIngredient/) input**

## Addition

```
mods.ic2.Extractor.addRecipe(IItemStack output, IIngredient input);

mods.ic2.Extractor.addRecipe(<minecraft:diamond_block>, <minecraft:dirt> * 64);
```

## Removal

To remove an existed recipe, simply remove the corresponding line in `config/ic2/extractor.ini`
