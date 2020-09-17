# Elektrolizator

## Pakiet

`import mods.ic2.Electrolyzer;`

## Metody

- **[ILiquidStack](/Vanilla/Liquids/ILiquidStack/)[] wyjść** Tablica wszystkich wyjść. Każdy slot odpowiada kierunkowi „Down-Up-North-South-West-Wschód”. Można pominąć wartość zerową.
- **[ILiquidStack](/Vanilla/Liquids/ILiquidStack/) input** The input
- **int power** Moc mierzona w EU/tick
- **@Optional int time** Czas. Wartość domyślna 200 jeśli nie podano

## Dodanie

```zenscript
mods.ic2.Electrolyzer.addRecipe(ILiquidStack[] wyjścia, ILiquidStack, input, int powerer, @Optional int time);

mods.ic2.Electrolyzer.addRecipe([<liquid:lava> * 1000, <liquid:water> * 500, null, null, null, null, null], <liquid:water> * 1000, 30);
```