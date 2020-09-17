# Sprengöfen

## Paket

`importieren mods.ic2.BlastFurnace;`

## Methoden

- **[IItemStack](/Vanilla/Items/IItemStack/)[] outputs**
- **[IIngredient](/Vanilla/Variable_Types/IIngredient/) Eingabe**
- **int totalFluidCost** Per-tick IC2 liquefied air cost, measured in mB/tick
- **int time** Total time cost, measured in ticks

## Addition

```zenscript
mods.ic2.BlastFurnace.addRecipe(IItemStack[] Ausgänge, IIngrediente Eingabe, int totalFluidCost, int Zeit);

mods.ic2.BlastFurnace.addRecipe([<minecraft:diamond>, <minecraft:emerald>], <minecraft:dirt> * 64, 1, 1000);
```

## Entfernen

Entfernen Sie vorerst einfach die entsprechende Zeile in `config/ic2/blast_furnace.ini`.