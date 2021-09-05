::requiredMod[Ex Nihilo: Sequentia]{builtIn=true modLink=https://www.curseforge.com/minecraft/mc-mods/ex-nihilo-sequentia}

# Fluide sur le dessus

## Package
`import mods.exnihilosequentia.ZenFluidOnTopRecipe;`

## Methods
- **create(String nom)**
- **setFluidInTank(IFluidStack fluidInTank)** Le fluide dans le réservoir.
- **setFluidOnTop(IFluidStack fluidOnTop)** le fluide au dessus.
- **setResult(IItemStack resultat)** Le résultat de la recette.


## Addition

```zenscript
<recipetype:exnihilosequentia:fluid_on_top>.create("fluid_on_top_test").setFluidInTank(<fluid:minecraft:lava>).setFluidOnTop(<fluid:minecraft:water>).setResult(<item:minecraft:netherrack>);
```

## Removal

```zenscript
<recipetype:exnihilosequentia:fluid_on_top>.removeRecipe(<item:minecraft:obsidian>);
```
