# Fornace Esplosiva

## Pacchetto

`import mods.ic2.BlastFurnace;`

## Metodi

- **[IItemStack](/Vanilla/Items/IItemStack/)[] outputs**
- **[Ingresso IIngrediente](/Vanilla/Variable_Types/IIngredient/)**
- **int totalFluidCost** Costo dell'aria liquefatta IC2, misurato in mB/tick
- **int time** Costo totale del tempo, misurato in ticks

## Addizione

```zenscript
mods.ic2.BlastFurnace.addRecipe(IItemStack[] outputs, IIngredient input, int totalFluidCost, int time);

mods.ic2.BlastFurnace.addRecipe([<minecraft:diamond>, <minecraft:emerald>], <minecraft:dirt> * 64, 1, 1000);
```

## Rimozione

Per ora basta rimuovere la riga corrispondente in `config/ic2/blast_furnace.ini`.