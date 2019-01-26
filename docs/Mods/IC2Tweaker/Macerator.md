# Macerator

## Package
`import mods.ic2.Macerator;`

## Methods
- **[IItemStack](/Vanilla/Items/IItemStack/) output**
- **IIngredient input**

## Addition
```
mods.ic2.Macerator.addRecipe(IItemStack output, IItemStack input);

mods.ic2.Macerator.addRecipe(<minecraft:diamond_block>, <minecraft:dirt> * 64);
```

## Removal

To remove an existed recipe, simply remove the corresponding line in  `config/ic2/macerator.ini`.
