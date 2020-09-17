# Жидкий генератор топлива

## Пакет

```zemscript
import mods.ic2.LiquidFuelGenerator;
```

## Методы

- **[ILiquidStack](/Vanilla/Liquids/ILiquidStack/) жидкость** жидкость, которая может использоваться в качестве топлива в генераторах жидкого топлива. Количество указанной жидкости не изменится; оно использует 100 мб.
- **int ticks** Время в тактах сжигается жидкость.
- **int Power Output** EU/tick, производимых жидкостью.

### Добавить жидкость

```zenscript
mods.ic2.LiquidFuelGenerator.addFluid(ILiquidStack liquid, int ticks, int Output);

mods.ic2.LiquidFuelGenerator.addFluid(<liquid:water>, 1000, 32);
```
