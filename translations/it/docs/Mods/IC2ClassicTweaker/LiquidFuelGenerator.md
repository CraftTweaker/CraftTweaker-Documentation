# Generatore Di Combustibili Liquidi

## Pacchetto

```zemscript
import mods.ic2.LiquidFuelGenerator;
```

## Metodi

- **[ILiquidStack](/Vanilla/Liquids/ILiquidStack/) liquido** Il liquido che può essere utilizzato come combustibile nei generatori di combustibile liquido. La quantità di fluido specificata non farà differenza; utilizza 100 mb.
- **int zecche** Il tempo in zecche il liquido brucerà.
- **int powerOutput** EU/tick prodotta dal liquido.

### Aggiungi Fluido

```zenscript
mods.ic2.LiquidFuelGenerator.addFluid(ILiquidStack liquid, int ticks, int powerOutput);

mods.ic2.LiquidFuelGenerator.addFluid(<liquid:water>, 1000, 32);
```
