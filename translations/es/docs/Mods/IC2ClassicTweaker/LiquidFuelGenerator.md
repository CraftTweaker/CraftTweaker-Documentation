# Generador de combustible líquido

## Paquete

```zemscript
importar mods.ic2.LiquidFuelGenerator;
```

## Métodos

- **[ILiquidStack](/Vanilla/Liquids/ILiquidStack/) líquido** El líquido que puede utilizarse como combustible en los generadores de combustible líquidos. La cantidad de líquido especificada no marcará ninguna diferencia; utiliza 100 mb.
- **ticks enteros** El tiempo en los ticks para los que se quemará el líquido.
- **int. de potencia** UE/tick producido por el líquido.

### Añadir fluido

```zenscript
mods.ic2.LiquidFuelGenerator.addFluid(liquido ILiquidStack, ticks de int, int powerOutput);

mods.ic2.LiquidFuelGenerator.addFluid(<liquid:water>, 1000, 32);
```
