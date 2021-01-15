# Crucible

## Package
`import mods.exnihilosequentia.ZenCrucibleRecipe;`

## Methods
- **create(String name)** 
- **setInput(IIngredient input)** the input
- **setAmount(int amount)** amount of fluid produced
- **setCrucibleType(String crucibleType)** crucible type
- **setResultFluid(IFluidStack fluid)** resulting fluid


## Addition

```zenscript
<recipetype:exnihilosequentia:crucible>.create("crucible_test").setInput(<item:minecraft:cobblestone>).setAmount(100).setCrucibleType("fired").setResultFluid(<fluid:minecraft:lava>);
```

## Removal

```zenscript
<recipetype:exnihilosequentia:crucible>.removeAll();
```

