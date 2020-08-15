# Полужидкий генератор

## Пакет

`импорт mods.ic2.SemiFluidGenerator;`

## Методы

- **[ILiquidStack](/Vanilla/Liquids/ILiquidStack/) жидкость** жидкость, которая может использоваться в качестве топлива в полужидком генераторе
- **двойной выход питания** Выход энергии, измеряемый в ЕС/такте

## Добавить жидкость

```zenscript
mods.ic2.SemiFluidGenerator.addFluid(ILiquidStack), двойной powerOutput;

mods.ic2.SemiFluidGenerator.addFluid(<liquid:water>, 2333.0D);
```