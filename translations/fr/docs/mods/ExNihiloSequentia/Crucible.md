# Crucible

## Package
`import mods.exnihilosequentia.ZenCrucibleRecipe;`

## Methods
- **create(String name)**
- **setInput(IIngredient input)** the input
- **setAmount(int amount)** the amount of fluid produced
- **setCrucibleType(String crucibleType)** the crucible type
- **setResultFluid(IFluidStack fluid)** the resulting fluid


## Addition

```zenscript
<recipetype:exnihilosequentia:crucible>.create("crucible_test").setInput(<item:minecraft:cobblestone>).setAmount(100).setCrucibleType("fired").setResultFluid(<fluid:minecraft:lava>);
```

## Removal

```zenscript
<recipetype:exnihilosequentia:crucible>.removeAll();
```

