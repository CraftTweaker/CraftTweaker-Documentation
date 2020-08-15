# Flüssigbrennstoffgenerator

## Paket

```zemscript
importieren mods.ic2.LiquidFuelGenerator;
```

## Methoden

- **[ILiquidStack](/Vanilla/Liquids/ILiquidStack/) liquide** Die Flüssigkeit, die als Treibstoff in Flüssigbrennstoffgeneratoren verwendet werden kann. Die angegebene Menge an Flüssigkeit macht keinen Unterschied; sie verwendet 100 mb.
- **int Ticks** Die Zeit in Ticks, für die die Flüssigkeit brennt.
- **int powerOutput** EU/Tick, produziert von der Flüssigkeit.

### Fluid hinzufügen

```zenscript
mods.ic2.LiquidFuelGenerator.addFluid(ILiquidStack liquid, int ticks, int powerOutput);

mods.ic2.LiquidFuelGenerator.addFluid(<liquid:water>, 1000, 32);
```
