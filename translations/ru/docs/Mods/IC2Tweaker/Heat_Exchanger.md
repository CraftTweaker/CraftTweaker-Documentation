# Теплообменник

## Пакет

`импорт mods.ic2.HeatExchanger;`

## Методы

- **[ILiquidStack](/Vanilla/Liquids/ILiquidStack/) вывод** жидкость после нагревания/охлаждения
- **[ILiquidStack](/Vanilla/Liquids/ILiquidStack/) ввод** жидкость перед нагреванием/охлаждением
- **int heat** Тепла, необходимое для нагрева жидкости или получения охлаждения

Кроме того, вы можете использовать объекты [ILiquidDefinition](/Vanilla/Liquids/ILiquidDefinition) вместо объектов [ILiquidStack](/Vanilla/Liquids/ILiquidStack/).

## Добавить охлаждение жидкости

```zenscript
mods.ic2.HeatExchanger.addFluidCoolDown(ILiquidStack output, ILiquidStack input, int heat);
mods.ic2.HeatExchanger.addFluidCoolDown(ILiquidDefinition output, ILiquidDefinition input, int heat);

mods. c2.HeatExchanger.addFluidCoolDown(<liquid:lava>, <liquid:water>, 10);
mods.ic2.HeatExchanger.addFluidCoolDown(<liquid:lava>.definition, <liquid:water>.definition, 10);
```

## Добавить нагрев жидкости

```zenscript
mods.ic2.HeatExchanger.addFluidHeatUp(ILiquidStack output, ILiquidStack input, int heat);
mods.ic2.HeatExchanger.addFluidHeatUp(ILiquidDefinition output, ILiquidDefinition input, int heat);

mods. c2.HeatExchanger.addFluidHeatUp(<liquid:lava>, <liquid:water>, 10);
mods.ic2.HeatExchanger.addFluidHeatUp(<liquid:lava>.definition, <liquid:water>.definition, 10);
```