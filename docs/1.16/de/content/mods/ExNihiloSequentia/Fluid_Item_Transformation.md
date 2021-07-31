# Fluid Item Transformation

## Package
`import mods.exnihilosequentia.ZenFluidItemRecipe;`

## Methoden
- **create(String name) // Name des Skripts **
- **setFluidInTank(IFluidStack fluidInTank)** // die Flüssigkeit im Tank
- **setInputItem(IIngredient inputItem)** // der Input
- **setResult(IItemStack result)** // das Ergebnis des Rezepts


## Addition

```zenscript
<recipetype:exnihilosequentia:fluid_item>.create("fluid_item_test").setFluidInTank(<fluid:minecraft:water>).setInputItem(<item:minecraft:diamond>).setResult(<item:minecraft:dirt>);
```

## Removal

```zenscript
<recipetype:exnihilosequentia:fluid_item>.removeRecipe(<item:minecraft:brain_coral_block>);
```
