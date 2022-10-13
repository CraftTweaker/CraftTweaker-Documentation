::requiredMod[Ex Nihilo: Sequentia]{builtIn=true modLink=https://www.curseforge.com/minecraft/mc-mods/ex-nihilo-sequentia}

# Composting

## 所属包
`import mods.exnihilosequentia.ZenCompostRecipe;`

## 使用方式
- **create(String name)**
- **setInput(IIngredient input)** the input
- **setAmount(int amount)** the chance for an item to add a level of compost


## 添加

```zenscript
<recipetype:exnihilosequentia:compost>.create("compost_test").setInput(<item:minecraft:oak_leaves>).setAmount(100);
```

## 移除

```zenscript
<recipetype:exnihilosequentia:compost>.removeRecipe(<item:minecraft:melon_slice>);
```
