::requiredMod[Ex Nihilo: Sequentia]{builtIn=true modLink=https://www.curseforge.com/minecraft/mc-mods/ex-nihilo-sequentia}

# Fluid On Top

## 所属包名
`import mods.exnihilosequentia.ZenFluidOnTopRecipe;`

## 方法
- **create(String name)**
- **setFluidInTank(IFluidStack fluidInTank)** the fluid in the tank
- **setFluidOnTop(IFluidStack fluidOnTop)** the fluid on top
- **setResult(IItemStack result)** the result of the recipe


## 加

```zenscript
<recipetype:exnihilosequentia:fluid_on_top>.create("fluid_on_top_test").setFluidInTank(<fluid:minecraft:lava>).setFluidOnTop(<fluid:minecraft:water>).setResult(<item:minecraft:netherrack>);
```

## Removal

```zenscript
<recipetype:exnihilosequentia:fluid_on_top>.removeRecipe(<item:minecraft:obsidian>);
```
