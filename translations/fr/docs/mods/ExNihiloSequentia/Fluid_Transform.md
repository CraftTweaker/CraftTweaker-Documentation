::requiredMod[Ex Nihilo: Sequentia]{builtIn=true modLink=https://www.curseforge.com/minecraft/mc-mods/ex-nihilo-sequentia}

# Transformation de fluide

## Package
`import mods.exnihilosequentia.ZenFluidTransformRecipe;`

## Methods
- **create(String nom)**
- **setFluidInTank(IFluidStack fluidInTank)** Le fluide dans le réservoir.
- **setCatalyst(IIngrédient catalyseur)** l'élément à insérer
- **setResult(IFluidStack resultat)** Le résultat de la recette.


## Addition

```zenscript
<recipetype:exnihilosequentia:fluid_transform>.create("test_transformation_fluide").setFluidInTank(<fluid:minecraft:lava>).setCatalyst(<item:minecraft:diamond>).setResult(<fluid:minecraft:water>);
```

## Removal

```zenscript
<recipetype:exnihilosequentia:fluid_transform>.removeAll();
```
