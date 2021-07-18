# Fluid Item Transformation

## Package
`import mods.exnihilosequentia.ZenFluidItemRecipe;`

## Methods
- **create(String name)**
- **setFluidInTank(IFluidStack fluidInTank)** the fluid in the tank
- **setInputItem(IIngredient inputItem)** the input
- **setResult(IItemStack result)** the result of the recipe


## Addition

```zenscript
<recipetype:exnihilosequentia:fluid_item>.create("fluid_item_test").setFluidInTank(<fluid:minecraft:water>).setInputItem(<item:minecraft:diamond>).setResult(<item:minecraft:dirt>);
```

## Removal

```zenscript
<recipetype:exnihilosequentia:fluid_item>.removeRecipe(<item:minecraft:brain_coral_block>);
```
