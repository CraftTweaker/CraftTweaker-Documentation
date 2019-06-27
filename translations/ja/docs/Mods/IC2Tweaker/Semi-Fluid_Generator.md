# Semi-Fluid Generator

## Package

`import mods.ic2.SemiFluidGenerator;`

## Methods

- **[ILiquidStack](/Vanilla/Liquids/ILiquidStack/) liquid** The liquid which can be used as fuel in semi-fluid generator
- **double powerOutput** The power output, measured in EU/tick

## Add Fluid

    mods.ic2.SemiFluidGenerator.addFluid(ILiquidStack liquid, double powerOutput;
    
    mods.ic2.SemiFluidGenerator.addFluid(<liquid:water>, 2333.0D);