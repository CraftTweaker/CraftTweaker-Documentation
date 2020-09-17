# Electrolizador

## Paquete

`importar mods.ic2.Electrolyzer;`

## Métodos

- **[ILiquidStack](/Vanilla/Liquids/ILiquidStack/)[] produce** array de todas las salidas. Cada franja corresponde a la dirección hacia abajo hacia el norte-sur-oeste-este. Se puede omitir nulos de trenes.
- **[ILiquidStack](/Vanilla/Liquids/ILiquidStack/) input** The input
- **int power** Power consumption, measured in EU/tick
- **@Optional int time** Time cost. Por defecto a 200 si no se da.

## Adicional

```zenscript
mods.ic2.Electrolyzer.addRecipe(ILiquidStack[] salidas, entrada de ILiquidStack, potencia de int, @Tiempo de int opcional);

mods.ic2.Electrolyzer.addRecipe([<liquid:lava> * 1000, <liquid:water> * 500, nulo, nulo, nulo, nulo], <liquid:water> * 1000, 30);
```