# Elettrolyzer

## Pacchetto

`import mods.ic2.Electrolyzer;`

## Metodi

- **[ILiquidStack](/Vanilla/Liquids/ILiquidStack/)[] output** Array di tutti gli output. Ogni slot corrisponde alla direzione Down Up-Nord-Sud-Ovest-Est . Può essere omesso il null del rimorchio.
- **[ILiquidStack](/Vanilla/Liquids/ILiquidStack/) input** The input
- **int potenza** Consumo di energia, misurato in EU/tick
- **@Optional int time** Time cost. Predefinito a 200 se non indicato.

## Addizione

```zenscript
mods.ic2.Electrolyzer.addRecipe(ILiquidStack[] outputs, ILiquidStack input, int power, @Optional int time);

mods.ic2.Electrolyzer.addRecipe([<liquid:lava> * 1000, <liquid:water> * 500, null, null, null, null], <liquid:water> * 1000, 30);
```