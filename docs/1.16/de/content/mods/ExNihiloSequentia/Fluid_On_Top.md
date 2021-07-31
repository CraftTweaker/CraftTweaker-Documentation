# Fluid On Top

## Package
`import mods.exnihilosequentia.ZenFluidOnTopRecipe;`

## Methoden
- **create(String name) // Name des Skripts **
- **setFluidInTank(IFluidStack fluidInTank)** // die Flüssigkeit im Tank
- **setFluidOnTop(IFluidStack fluidOnTop)** // die Flüssigkeit obendrauf
- **setResult(IItemStack result)** // das Ergebnis des Rezepts


## Addition

```zenscript
<recipetype:exnihilosequentia:fluid_on_top>.create("fluid_on_top_test").setFluidInTank(<fluid:minecraft:lava>).setFluidOnTop(<fluid:minecraft:water>).setResult(<item:minecraft:netherrack>);
```

## Removal

```zenscript
<recipetype:exnihilosequentia:fluid_on_top>.removeRecipe(<item:minecraft:obsidian>);
```
