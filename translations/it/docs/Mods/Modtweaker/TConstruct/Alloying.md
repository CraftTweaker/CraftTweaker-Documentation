# Leghe

Il pacchetto `Alloy` consente di aggiungere o rimuovere ricette Lega.

## Chiamata

Puoi chiamare il pacchetto Lega usando `mods.tconstruct.Alloy`

## Aggiungi Ricette Leghe Metalliche

```zenscript
//mods.tconstruct.Alloy.addRecipe(ILiquidStack output, ILiquidStack[] inputs);
mods.tconstruct.Alloy.addRecipe(<liquid:water> * 10, [<liquid:lava> * 10, <liquid:molten_iron> * 5]);
```

## Rimozione Ricette Leghe Metalliche

```zenscript
//mods.tconstruct.Alloy.removeRecipe(ILiquidStack output);
mods.tconstruct.Alloy.removeRecipe(<liquid:water>);

//mods.tconstruct.Alloy.removeRecipe(ILiquidStack output, ILiquidStack[] inputs);
mods.tconstruct.Alloy.removeRecipe(<liquid:water>, [<liquid:lava>, <liquid:molten_iron>]);
```