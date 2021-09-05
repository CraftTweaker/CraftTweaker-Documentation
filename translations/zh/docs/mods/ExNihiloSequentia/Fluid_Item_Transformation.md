::requiredMod[Ex Nihilo: Sequentia]{builtIn=true modLink=https://www.curseforge.com/minecraft/mc-mods/ex-nihilo-sequentia}

# Fluid Item Transformation

## 所属包名
`import mods.exnihilosequentia.ZenFluidItemRecipe;`

## 方法
- **create(String name)**
- **setFluidInTank(IFluidStack fluidInTank)** the fluid in the tank
- **setInputItem(IIngredient inputItem)** the input
- **setResult(IItemStack result)** the result of the recipe


## 加

```zenscript
<recipetype:exnihilosequentia:fluid_item>.create("fluid_item_test").setFluidInTank(<fluid:minecraft:water>).setInputItem(<item:minecraft:diamond>).setResult(<item:minecraft:dirt>);
```

## Removal

```zenscript
<recipetype:exnihilosequentia:fluid_item>.removeRecipe(<item:minecraft:brain_coral_block>);
```
