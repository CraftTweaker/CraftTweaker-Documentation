# Saldatore

Il pacchetto saldatore viene utilizzato per aggiungere o rimuovere ricette da/per il saldatore di stoccaggio raffinato.

## Chiamata

Puoi chiamare il pacchetto Solderer usando `mods.refinedstorage.Solderer`

## Aggiunta ricetta

L'array di righe **deve** avere una lunghezza di tre! Usa `null` se hai bisogno di pile vuote.

```zenscript
//mods.refinedstorage.Solderer.addRecipe(IItemStack output, int time, IItemStack[] rows);
mods.refinedstorage.Solderer.addRecipe(<minecraft:gold_ingot>, 100, [<minecraft:iron_ingot>, <minecraft:iron_ingot>, <minecraft:iron_ingot>]);
```

## Rimozione ricetta

```zenscript
//mods.refinedstorage.Solderer.removeRecipe(IItemStack output);
mods.refinedstorage.Solderer.removeRecipe(<minecraft:iron_ingot>);
```