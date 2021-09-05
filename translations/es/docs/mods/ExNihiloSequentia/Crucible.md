::requiredMod[Ex Nihilo: Sequentia]{builtIn=true modLink=https://www.curseforge.com/minecraft/mc-mods/ex-nihilo-sequentia}

# Crucible

## Package
`import mods.exnihilosequentia.ZenCrucibleRecipe;`

## Methods
- **create(String name)**
- **setInput(IIngredient input)** the input
- **setAmount(int amount)** the amount of fluid produced
- **setCrucibleType(String crucibleType)** the crucible type
- **setResultFluid(IFluidStack fluid)** the resulting fluid


## Suma

```zenscript
<recipetype:exnihilosequentia:crucible>.create("crucible_test").setInput(<item:minecraft:cobblestone>).setAmount(100).setCrucibleType("fired").setResultFluid(<fluid:minecraft:lava>);
```

## Removal

```zenscript
<recipetype:exnihilosequentia:crucible>.removeAll();
```

