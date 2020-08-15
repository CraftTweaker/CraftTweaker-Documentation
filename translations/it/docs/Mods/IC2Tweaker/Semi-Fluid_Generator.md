# Generatore Semi-Fluido

## Pacchetto

`import mods.ic2.SemiFluidGenerator;`

## Metodi

- **[ILiquidStack](/Vanilla/Liquids/ILiquidStack/) liquido** Il liquido che può essere utilizzato come combustibile nel generatore semi-fluido
- **double powerOutput** The power output, measured in EU/tick

## Aggiungi Fluido

```zenscript
mods.ic2.SemiFluidGenerator.addFluid(ILiquidStack liquid, double powerOutput;

mods.ic2.SemiFluidGenerator.addFluid(<liquid:water>, 2333.0D);
```