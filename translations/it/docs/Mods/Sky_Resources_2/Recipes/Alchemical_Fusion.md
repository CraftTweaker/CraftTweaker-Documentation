# Fusione Alchemica

Il pacchetto *fusion* viene utilizzato per aggiungere o rimuovere ricette a/dal processo di fusione alchimica.

## Chiamata

Puoi chiamare il pacchetto *fusion* utilizzando `mods.skyresources.fusion`

## Aggiunta Ricetta

```zenscript
//mods.skyresources.fusion.addRecipe(IItemStack output, IItemStack[] input, float catalystUsedPerCraft);
mods.skyresources.fusion.addRecipe(<minecraft:diamond> * 6, [<minecraft:dirt>, <minecraft:emerald> * 2], 0.00420);
```

## Rimozione Ricetta

```zenscript
//mods.skyresources.fusion.removeRecipe(IItemStack output);
mods.skyresources.fusion.removeRecipe(<minecraft:dirt>);
```