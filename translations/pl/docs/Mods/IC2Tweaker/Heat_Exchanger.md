# Wymiennik ciepła

## Pakiet

`importuj mods.ic2.HeatExchanger;`

## Metody

- **[ILiquidStack](/Vanilla/Liquids/ILiquidStack/) wyjście** Płyn po jego podgrzaniu/schłodzeniu
- **[ILiquidStack](/Vanilla/Liquids/ILiquidStack/) wejście** Płyn zanim zostanie podgrzewany/schłodzony
- **int heat** Gra wymagana do ogrzania płynu lub otrzymania go przez chłodzenie

Alternatywnie możesz użyć obiektów [ILiquidDefinition](/Vanilla/Liquids/ILiquidDefinition) zamiast [ILiquidStack](/Vanilla/Liquids/ILiquidStack/) obiektów.

## Dodaj chłodny płyn w dół

```zenscript
mods.ic2.HeatExchanger.addFluidCoolDown(ILiquidStack, ILiquidStack, Input, int heat);
mods.ic2.HeatExchanger.addFluidCoolDown(ILiquidDefinition output, ILiquidDefinition Input, int heat);

mods. c2.HeatExchanger.addFluidCoolDown(<liquid:lava>, <liquid:water>, 10);
mods.ic2.HeatExchanger.addFluidCoolDown(<liquid:lava>.definition, <liquid:water>.definition, 10);
```

## Dodaj ciepło płynne

```zenscript
mods.ic2.HeatExchanger.addFluidHeatUp(ILiquidStack, ILiquidStack, Input, int heat);
mods.ic2.HeatExchanger.addFluidHeatUp(ILiquidDefinition output, ILiquidDefinition Input, int heat);

mods. c2.HeatExchanger.addFluidHeatUp(<liquid:lava>, <liquid:water>, 10);
mods.ic2.HeatExchanger.addFluidHeatUp(<liquid:lava>.definition, <liquid:water>.definition, 10);
```