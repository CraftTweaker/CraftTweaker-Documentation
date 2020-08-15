# Block Cutter

## Pacchetto

`import mods.ic2.BlockCutter;`

## Metodi

- **[IItemStack](/Vanilla/Items/IItemStack/) output**
- **[IIngredient](/Vanilla/Variable_Types/IIngredient/) input**
- **@Optional int hardness** Minimum hardness requirement for blade.

## Addizione

```zenscript
mods.ic2.BlockCutter.addRecipe(IItemStack output, IIngredient input, @Optional int hardness default 0);

mods.ic2.BlockCutter.addRecipe(<minecraft:diamond>, <minecraft:dirt>);
```

## Rimozione

For now simply remove the corresponding line in `config/ic2/block_cutter.ini`.