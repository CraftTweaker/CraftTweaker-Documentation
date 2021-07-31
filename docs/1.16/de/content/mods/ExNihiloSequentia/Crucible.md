# Crucible

## Package
`import mods.exnihilosequentia.ZenCrucibleRecipe;`

## Methoden
- **create(String name) // Name des Skripts **
- **setInput(IIngredient input)** // Der Input
- **setAmount(int amount)** // die Menge der erzeugten Flüssigkeit
- **setCrucibleType(String crucibleType)** // Der Crucible Typ
- **setResultFluid(IFluidStack fluid)** // die resultierende Flüssigkeit


## Addition

```zenscript
<recipetype:exnihilosequentia:crucible>.create("crucible_test").setInput(<item:minecraft:cobblestone>).setAmount(100).setCrucibleType("fired").setResultFluid(<fluid:minecraft:lava>);
```

## Removal

```zenscript
<recipetype:exnihilosequentia:crucible>.removeAll();
```

