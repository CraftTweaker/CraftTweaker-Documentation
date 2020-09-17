# Fermentatore

## Pacchetto

`import mods.ic2.Fermenter;`

## Metodi

- **[ILiquidStack](/Vanilla/Liquids/ILiquidStack/) output** Il fluido fermentato
- **[ILiquidStack](/Vanilla/Liquids/ILiquidStack/) input** The input fluid
- **int heat** La quantità di calore richiesta per la fermentazione

## Addizione

```zenscript
mods.ic2.Fermenter.addRecipe(ILiquidStack output, ILiquidStack input, int heat);

mods.ic2.Fermenter.addRecipe(<liquid:lava> * 1000, <liquid:water> * 2000, 23333);
```