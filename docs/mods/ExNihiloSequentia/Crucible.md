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
<recipetype:exnihilosequentia:heat>.create("heat_test").setBlock(<block:minecraft:cobblestone>).setAmount(100);
```
