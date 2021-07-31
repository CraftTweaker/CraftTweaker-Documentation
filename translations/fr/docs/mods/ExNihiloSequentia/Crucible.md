::requiredMod[Ex Nihilo: Sequentia]{builtIn=true modLink=https://www.curseforge.com/minecraft/mc-mods/ex-nihilo-sequentia}

# Crucible

## Package
`import mods.exnihilosequentia.ZenCrucibleRecipe;`

## Methods
- **create(String nom)**
- **setInput(IIngredient input)** L'ingédient à insérer dans le compost.
- **setAmount(int amount)** La quantité de liquide produite.
- **setCrucibleType(String crucibleType)** le type de crucible.
- **setResultFluid(IFluidStack fluide)** Le fluide obtenu.


## Addition

```zenscript
<recipetype:exnihilosequentia:crucible>.create("crucible_test").setInput(<item:minecraft:cobblestone>).setAmount(100).setCrucibleType("fired").setResultFluid(<fluid:minecraft:lava>);
```

## Removal

```zenscript
<recipetype:exnihilosequentia:crucible>.removeAll();
```

