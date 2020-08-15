# Generator paliwa ciekłego

## Pakiet

```zemscript
import mods.ic2.LiquidFuelGenerator;
```

## Metody

- **[Ciecz ILiquidStack](/Vanilla/Liquids/ILiquidStack/)** Ciecz, która może być użyta jako paliwo w generatorach paliwa ciekłego. Ilość określonego płynu nie zmieni się; używa 100 mb.
- **ticki** Czas w tickach spali płyn.
- **int powerOutput** EU/tick wytwarzany przez ciecz.

### Dodaj płyn

```zenscript
mods.ic2.LiquidFuelGenerator.addFluid(ILiquidStack liquid, int ticks, int powerOutput);

mods.ic2.LiquidFuelGenerator.addFluid(<liquid:water>, 1000, 32);
```
