# Fluid Transform

## Package
`import mods.exnihilosequentia.ZenFluidTransformRecipe;`

## Methoden
- **create(String name) // Name des Skripts **
- **setFluidInTank(IFluidStack fluidInTank)** // die Flüssigkeit im Tank
- **setCatalyst(IIngredient catalyst)** // das hinzuzufügende Item
- **setResult(IFluidStack result)** // das Ergebnis des Rezepts


## Addition

```zenscript
<recipetype:exnihilosequentia:fluid_transform>.create("fluid_transform_test").setFluidInTank(<fluid:minecraft:lava>).setCatalyst(<item:minecraft:diamond>).setResult(<fluid:minecraft:water>);
```

## Removal

```zenscript
<recipetype:exnihilosequentia:fluid_transform>.removeAll();
```
