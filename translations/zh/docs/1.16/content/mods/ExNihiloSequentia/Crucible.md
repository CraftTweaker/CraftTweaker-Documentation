::requiredMod[Ex Nihilo: Sequentia]{builtIn=true modLink=https://www.curseforge.com/minecraft/mc-mods/ex-nihilo-sequentia}

# Crucible

## 所属包
`import mods.exnihilosequentia.ZenCrucibleRecipe;`

## 使用方式
- **create(String name)**
- **setInput(IIngredient input)** the input
- **setAmount(int amount)** the amount of fluid produced
- **setCrucibleType(String crucibleType)** the crucible type
- **setResultFluid(IFluidStack fluid)** the resulting fluid


## 添加

```zenscript
<recipetype:exnihilosequentia:crucible>.create("crucible_test").setInput(<item:minecraft:cobblestone>).setAmount(100).setCrucibleType("fired").setResultFluid(<fluid:minecraft:lava>);
```

## 移除

```zenscript
<recipetype:exnihilosequentia:crucible>.removeAll();
```

