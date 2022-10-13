::requiredMod[Ex Nihilo: Sequentia]{builtIn=true modLink=https://www.curseforge.com/minecraft/mc-mods/ex-nihilo-sequentia}

# Heating Sources

## 所属包
`import mods.exnihilosequentia.ZenHeatRecipe;`

## 使用方式
- **create(String name)**
- **setBlock(MCBlock input)** the block to add as a heat source
- **setAmount(int amount)** the heat source strenght



## 添加

```zenscript
<recipetype:exnihilosequentia:heat>.create("heat_test").setBlock(<block:minecraft:cobblestone>).setAmount(100);
```

## 移除

```zenscript
<recipetype:exnihilosequentia:heat>.removeAll();
```
