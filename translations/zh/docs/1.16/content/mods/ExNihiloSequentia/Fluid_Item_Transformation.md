::requiredMod[Ex Nihilo: Sequentia]{builtIn=true modLink=https://www.curseforge.com/minecraft/mc-mods/ex-nihilo-sequentia}

# Fluid Item Transformation

## 所属包
`import mods.exnihilosequentia.ZenFluidItemRecipe;`

## 使用方式
- **create(String name)**
- **setFluidInTank(IFluidStack fluidInTank)** the fluid in the tank
- **setInputItem(IIngredient inputItem)** the input
- **setResult(IItemStack result)** the result of the recipe


## 添加

```zenscript
<recipetype:exnihilosequentia:fluid_item>.create("fluid_item_test").setFluidInTank(<fluid:minecraft:water>).setInputItem(<item:minecraft:diamond>).setResult(<item:minecraft:dirt>);
```

## 移除

```zenscript
<recipetype:exnihilosequentia:fluid_item>.removeRecipe(<item:minecraft:brain_coral_block>);
```
