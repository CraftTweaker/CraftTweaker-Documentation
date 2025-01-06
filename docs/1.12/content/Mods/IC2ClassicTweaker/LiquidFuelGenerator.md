# Liquid Fuel Generator

## Package

```zenscript
import mods.ic2.LiquidFuelGenerator;
```

## Methods

- **[ILiquidStack](/Vanilla/Liquids/ILiquidStack/) liquid** The liquid which can be used as fuel in liquid fuel generators. The amount of fluid specified will make no difference; it uses 100 mb.
- **int ticks** The time in ticks the liquid will burn for.
- **int powerOutput** EU/tick produced by the liquid.

### Add Fluid

```zenscript
mods.ic2.LiquidFuelGenerator.addFluid(ILiquidStack liquid, int ticks, int powerOutput);

mods.ic2.LiquidFuelGenerator.addFluid(<liquid:water>, 1000, 32);
```
