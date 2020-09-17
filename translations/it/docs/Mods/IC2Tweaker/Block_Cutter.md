# Taglierina A Blocchi

## Pacchetto

`import mods.ic2.BlockCutter;`

## Metodi

- **[IItemStack](/Vanilla/Items/IItemStack/) output**
- **[Ingresso IIngrediente](/Vanilla/Variable_Types/IIngredient/)**
- **@Optional int durezza** Durezza minima richiesta per la lama.

## Addizione

```zenscript
mods.ic2.BlockCutter.addRecipe(IItemStack output, IIngredient input, @Optional int durezza predefinita 0);

mods.ic2.BlockCutter.addRecipe(<minecraft:diamond>, <minecraft:dirt>);
```

## Rimozione

Per ora basta rimuovere la riga corrispondente in `config/ic2/block_cutter.ini`.