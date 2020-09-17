# Generador de semi fluidos

## Paquete

`importar mods.ic2.SemiFluidGenerator;`

## Métodos

- **[ILiquidStack](/Vanilla/Liquids/ILiquidStack/) líquido** El líquido que puede utilizarse como combustible en el generador de semi-líquido
- **double powerOutput** The power output, measured in EU/tick

## Añadir fluido

```zenscript
mods.ic2.SemiFluidGenerator.addFluid(ILiquidStack liquido, doble powerOutput;

mods.ic2.SemiFluidGenerator.addFluid(<liquid:water>, 2333.0D);
```