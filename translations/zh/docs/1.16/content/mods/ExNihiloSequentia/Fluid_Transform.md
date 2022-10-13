::requiredMod[Ex Nihilo: Sequentia]{builtIn=true modLink=https://www.curseforge.com/minecraft/mc-mods/ex-nihilo-sequentia}

# Fluid Transform

## 所属包
`import mods.exnihilosequentia.ZenFluidTransformRecipe;`

## 使用方式
- **create(String name)**
- **setFluidInTank(IFluidStack fluidInTank)** the fluid in the tank
- **setCatalyst(IIngredient catalyst)** the item to be inserted
- **setResult(IFluidStack result)** the result of the recipe


## 添加

```zenscript
<recipetype:exnihilosequentia:fluid_transform>.create("fluid_transform_test").setFluidInTank(<fluid:minecraft:lava>).setCatalyst(<item:minecraft:diamond>).setResult(<fluid:minecraft:water>);
```

## 移除

```zenscript
<recipetype:exnihilosequentia:fluid_transform>.removeAll();
```
