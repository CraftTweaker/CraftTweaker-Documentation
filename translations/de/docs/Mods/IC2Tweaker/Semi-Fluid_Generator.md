# Halbflüssigkeitsgenerator

## Paket

`importieren mods.ic2.SemiFluidGenerator;`

## Methoden

- **[ILiquidStack](/Vanilla/Liquids/ILiquidStack/) Flüssigkeit** Die Flüssigkeit, die als Kraftstoff im Halbflüssigkeitsgenerator verwendet werden kann
- **double powerOutput** The power output, measured in EU/tick

## Fluid hinzufügen

```zenscript
mods.ic2.SemiFluidGenerator.addFluid(ILiquidStack Flüssigkeit, Doppel-PowerOutput;

mods.ic2.SemiFluidGenerator.addFluid(<liquid:water>, 2333.0D);
```