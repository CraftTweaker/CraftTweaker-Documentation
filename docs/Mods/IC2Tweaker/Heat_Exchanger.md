# Heat Exchanger

## Package
`import mods.ic2.HeatExchanger;`

## Methods
- **[ILiquidStack](/Vanilla/Liquids/ILiquidStack/) output** The liquid after it's been heated up/cooled down
- **[ILiquidStack](/Vanilla/Liquids/ILiquidStack/) input** The liquid before it's been heated up/cooled down
- **int heat** The heat required to heat the fluid or gained by cooling it down

Alternatively you can use [ILiquidDefinition](/Vanilla/Liquids/ILiquidDefinition) objects instead of the [ILiquidStack](/Vanilla/Liquids/ILiquidStack/) objects.

## Add Fluid Cool Down

```
mods.ic2.HeatExchanger.addFluidCoolDown(ILiquidStack output, ILiquidStack input, int heat);
mods.ic2.HeatExchanger.addFluidCoolDown(ILiquidDefinition output, ILiquidDefinition input, int heat);

mods.ic2.HeatExchanger.addFluidCoolDown(<liquid:lava>, <liquid:water>, 10);
mods.ic2.HeatExchanger.addFluidCoolDown(<liquid:lava>.definition, <liquid:water>.definition, 10);
```

## Add Fluid Heat Up

```
mods.ic2.HeatExchanger.addFluidHeatUp(ILiquidStack output, ILiquidStack input, int heat);
mods.ic2.HeatExchanger.addFluidHeatUp(ILiquidDefinition output, ILiquidDefinition input, int heat);

mods.ic2.HeatExchanger.addFluidHeatUp(<liquid:lava>, <liquid:water>, 10);
mods.ic2.HeatExchanger.addFluidHeatUp(<liquid:lava>.definition, <liquid:water>.definition, 10);
```
