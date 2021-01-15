# Barrel Fluid Transforming

## Package
`import mods.exnihilosequentia.ZenFluidTransformRecipe;`

## Methods
- **create(String name)** 
- **setFluidInTank(IFluidStack fluidInTank)** the fluid in the tank
- **setCatalyst(IIngredient catalyst)** block to be placed below or item to be inserted
- **setResult(IFluidStack result)** the result of the recipe


## Addition

```zenscript
<recipetype:exnihilosequentia:fluid_transform>.create("fluidtransform_test").setFluidInTank(<fluid:minecraft:lava>).setCatalyst(<item:minecraft:diamond>).setResult(<fluid:minecraft:water>);
```

## Removal

```zenscript
<recipetype:exnihilosequentia:fluid_transform>.removeAll();
```
