::requiredMod[Ex Nihilo: Sequentia]{builtIn=true modLink=https://www.curseforge.com/minecraft/mc-mods/ex-nihilo-sequentia}

# Hammering

## 所属包名
`import mods.exnihilosequentia.ZenHammerRecipe;`

## 方法
- **create(String name)**
- **setInput(IIngredient input)** the block that needs to be broken
- **addOutput(IItemStack drop)** the item the block drops when broken
- **addOutput(IItemStack drop, float chance)** the other item the blocks drops when broken and its chance to drop


## 加

```zenscript
<recipetype:exnihilosequentia:hammer>.create("hammer_test").setInput(<item:minecraft:cobblestone>).addOutput(<item:minecraft:gravel>).addOutput(<item:minecraft:diamond>, 0.01);
```

## Removal

```zenscript
<recipetype:exnihilosequentia:hammer>.removeAll();
```
